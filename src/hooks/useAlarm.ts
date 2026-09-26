"use client";

import { useCallback, useRef } from "react";
import type { AppSettings } from "./useSettings";
import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";

export function useAlarm(settings: AppSettings) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const keepAliveAudioRef = useRef<HTMLAudioElement | null>(null);

  // Background Keep-Alive Audio Session (Keeps iOS & Android from sleeping when screen is locked)
  const startBackgroundKeepAlive = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      if (!keepAliveAudioRef.current) {
        // A clean, ultra-tiny silent 1-second WAV buffer
        const silentWavBase64 = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
        const audio = new Audio(silentWavBase64);
        audio.loop = true;
        audio.volume = 0.001; // Ultra-low volume keepalive
        keepAliveAudioRef.current = audio;
      }
      keepAliveAudioRef.current.play().catch(() => {});
    } catch {}
  }, []);

  const stopBackgroundKeepAlive = useCallback(() => {
    if (keepAliveAudioRef.current) {
      keepAliveAudioRef.current.pause();
      keepAliveAudioRef.current.currentTime = 0;
    }
  }, []);

  // Synthesize rich audio alarm pulses using Web Audio API (100% offline & zero network dependency)
  const playSynthesizedAlarm = useCallback((soundType: string, volume: number) => {
    const doPlay = (ctx: AudioContext) => {
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(Math.max(0.05, Math.min(1, volume / 100)), ctx.currentTime);
      gainNode.connect(ctx.destination);

      const playBeep = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.connect(oscGain);
        oscGain.connect(gainNode);

        if (soundType === "radar") {
          osc.type = "sine";
          osc.frequency.setValueAtTime(980, now);
          osc.frequency.exponentialRampToValueAtTime(1400, now + 0.25);
          oscGain.gain.setValueAtTime(0.8, now);
          oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          osc.start(now);
          osc.stop(now + 0.3);
        } else if (soundType === "extreme_buzz") {
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.setValueAtTime(880, now + 0.1);
          oscGain.gain.setValueAtTime(0.9, now);
          oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.32);
        } else if (soundType === "soft_chime") {
          osc.type = "triangle";
          osc.frequency.setValueAtTime(587.33, now); // D5
          osc.frequency.setValueAtTime(880, now + 0.15); // A5
          oscGain.gain.setValueAtTime(0.6, now);
          oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.55);
        } else {
          // transit_alert (Default crisp 2-tone chime)
          osc.type = "sine";
          osc.frequency.setValueAtTime(659.25, now); // E5
          osc.frequency.setValueAtTime(880, now + 0.12); // A5
          oscGain.gain.setValueAtTime(0.8, now);
          oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          osc.start(now);
          osc.stop(now + 0.38);
        }
      };

      // Play immediately, then loop every 650ms
      playBeep();
      if (oscillatorIntervalRef.current) clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = setInterval(playBeep, 650);
    };

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) {
        console.warn("Web Audio API not supported in this browser");
        return;
      }

      // Always create a fresh context if closed, or reuse existing
      if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;

      // Must resume suspended context (browsers auto-suspend until user gesture)
      if (ctx.state === "suspended") {
        ctx.resume().then(() => doPlay(ctx)).catch(err => {
          console.warn("Could not resume AudioContext:", err);
          // Fallback: create new context and try again
          try {
            audioCtxRef.current = new AudioCtx();
            doPlay(audioCtxRef.current);
          } catch {}
        });
      } else {
        doPlay(ctx);
      }
    } catch (err) {
      console.warn("Web Audio synth error:", err);
    }
  }, []);

  // Play a soft single pre-alert chime (Two-Stage Alert)
  const playPreAlertChime = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = "sine";
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.15); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.3); // G5
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc.start(now);
      osc.stop(now + 0.85);

      if ("vibrate" in navigator) {
        navigator.vibrate([200, 100, 200]);
      }
      if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance("Heads up: Your stop is 1 kilometer away.");
        window.speechSynthesis.speak(u);
      }
    } catch {}
  }, []);

  const prepareAudio = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
          audioCtxRef.current = new AudioCtx();
        }
        // Unlock the AudioContext on user gesture (critical for mobile + desktop)
        if (audioCtxRef.current.state === "suspended") {
          void audioCtxRef.current.resume().catch(() => {});
        }
      }
      startBackgroundKeepAlive();
    } catch {}
  }, [startBackgroundKeepAlive]);

  const requestNotificationPermission = useCallback(async () => {
    if (typeof window === "undefined") return false;
    if (Capacitor.isNativePlatform()) {
      const permission = await LocalNotifications.requestPermissions();
      return permission.display === "granted";
    }
    if (!("Notification" in window)) return false;
    if (Notification.permission === "granted") return true;
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }, []);

  const triggerAlarm = useCallback(async (message: string) => {
    if (typeof window === "undefined") return;

    // 1. Vibration — strong repeating pattern for alarm
    if (settings.vibrate && "vibrate" in navigator) {
      try {
        navigator.vibrate([800, 200, 800, 200, 800, 200, 800, 200, 1500]);
      } catch {}
    }

    // 2. High-reliability Synthesized Sound
    playSynthesizedAlarm(settings.alarmSound, settings.volume);

    // 3. Fallback mp3 audio — only on native/mobile (avoids CORS/autoplay issues on desktop)
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/alarm.mp3");
        audioRef.current.loop = true;
      }
      audioRef.current.volume = Math.max(0, Math.min(1, settings.volume / 100));
      void audioRef.current.play().catch(() => {
        // Autoplay blocked — the synthesized Web Audio alarm is the primary fallback
      });
    } catch {}

    // 4. Native / Web Notification (Shows on lock screen)
    if (Capacitor.isNativePlatform()) {
      await LocalNotifications.schedule({
        notifications: [{
          id: 7001,
          title: "WakeMe Transit Alarm",
          body: message,
          sound: "default",
          schedule: { at: new Date(Date.now() + 100) },
          extra: { type: "destination-alarm" },
        }],
      }).catch(console.error);
    } else if ("Notification" in window && Notification.permission === "granted") {
      try {
        new Notification("WakeMe Transit Alarm", {
          body: message,
          icon: "/favicon.ico",
          tag: "destination-alarm",
          requireInteraction: true
        });
      } catch {}
    }

    // 5. Speech voice alert
    if ("speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance("Your destination is near. Wake up!");
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
      } catch {}
    }
  }, [playSynthesizedAlarm, settings.alarmSound, settings.volume, settings.vibrate]);

  const stopAlarm = useCallback(() => {
    stopBackgroundKeepAlive();
    if (oscillatorIntervalRef.current) {
      clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      void audioCtxRef.current.suspend().catch(() => {});
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (typeof window !== "undefined") {
      if ("vibrate" in navigator) {
        navigator.vibrate(0);
      }
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }
    if (Capacitor.isNativePlatform()) {
      void LocalNotifications.cancel({ notifications: [{ id: 7001 }] }).catch(() => {});
    }
  }, [stopBackgroundKeepAlive]);

  const previewSound = useCallback((soundType: string, volume: number) => {
    stopAlarm();
    playSynthesizedAlarm(soundType, volume);
    setTimeout(() => {
      stopAlarm();
    }, 1400);
  }, [playSynthesizedAlarm, stopAlarm]);

  return { 
    triggerAlarm, 
    stopAlarm, 
    prepareAudio, 
    previewSound, 
    playPreAlertChime, 
    startBackgroundKeepAlive, 
    stopBackgroundKeepAlive,
    requestNotificationPermission 
  };
}
