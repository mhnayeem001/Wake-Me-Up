export interface CuratedPlace {
  id: string;
  name: string;
  bnName?: string;
  area: string;
  city: string;
  lat: number;
  lon: number;
  category: "bus_terminal" | "metro_station" | "railway" | "airport" | "landmark" | "area" | "commercial" | "university" | "hospital";
  tags: string[];
}

export const BANGLADESH_PLACES: CuratedPlace[] = [
  // ===================== METRO STATIONS (MRT Line 6 - All 17) =====================
  { id: "metro-uttara-north", name: "Uttara North (Diabari) Metro Station", bnName: "উত্তরা উত্তর মেট্রো", area: "Diabari / Uttara", city: "Dhaka", lat: 23.8821, lon: 90.3705, category: "metro_station", tags: ["diabari", "uttara north", "metro", "mrt depot", "kashful", "mrt", "line 6"] },
  { id: "metro-uttara-center", name: "Uttara Center Metro Station", bnName: "উত্তরা সেন্টার মেট্রো", area: "Uttara", city: "Dhaka", lat: 23.8710, lon: 90.3790, category: "metro_station", tags: ["uttara center", "metro", "sector 18", "mrt", "line 6"] },
  { id: "metro-uttara-south", name: "Uttara South Metro Station", bnName: "উত্তরা দক্ষিণ মেট্রো", area: "Uttara", city: "Dhaka", lat: 23.8615, lon: 90.3845, category: "metro_station", tags: ["uttara south", "metro", "azampur link", "mrt", "line 6"] },
  { id: "metro-pallabi", name: "Pallabi Metro Station", bnName: "পল্লবী মেট্রো", area: "Pallabi", city: "Dhaka", lat: 23.8247, lon: 90.3647, category: "metro_station", tags: ["pallabi", "metro", "mirpur 12 link", "mrt", "line 6"] },
  { id: "metro-mirpur-11", name: "Mirpur 11 Metro Station", bnName: "মিরপুর ১১ মেট্রো", area: "Mirpur 11", city: "Dhaka", lat: 23.8184, lon: 90.3670, category: "metro_station", tags: ["mirpur 11", "metro", "purobi cinema", "pallabi link", "mrt", "line 6"] },
  { id: "metro-mirpur-10", name: "Mirpur 10 Roundabout & Metro Station", bnName: "মিরপুর ১০ মেট্রো", area: "Mirpur 10", city: "Dhaka", lat: 23.8070, lon: 90.3685, category: "metro_station", tags: ["mirpur 10", "metro", "roundabout", "golchottor", "fire service", "mrt", "line 6"] },
  { id: "metro-kazipara", name: "Kazipara Metro Station", bnName: "কাজীপাড়া মেট্রো", area: "Kazipara", city: "Dhaka", lat: 23.7980, lon: 90.3720, category: "metro_station", tags: ["kazipara", "metro", "mrt", "mirpur", "line 6"] },
  { id: "metro-shewrapara", name: "Shewrapara Metro Station", bnName: "শেওড়াপাড়া মেট্রো", area: "Shewrapara", city: "Dhaka", lat: 23.7910, lon: 90.3755, category: "metro_station", tags: ["shewrapara", "sewrapara", "metro", "mrt", "line 6"] },
  { id: "metro-agargaon", name: "Agargaon Metro Station (MRT Line 6)", bnName: "আগারগাঁও মেট্রো", area: "Agargaon", city: "Dhaka", lat: 23.7785, lon: 90.3773, category: "metro_station", tags: ["agargaon", "metro", "mrt", "passport office", "idb", "bhaban", "line 6"] },
  { id: "metro-bijoy-sarani", name: "Bijoy Sarani Metro Station", bnName: "বিজয় সরণি মেট্রো", area: "Tejgaon", city: "Dhaka", lat: 23.7656, lon: 90.3878, category: "metro_station", tags: ["bijoy sarani", "metro", "mrt", "novo theatre", "military museum", "line 6"] },
  { id: "metro-farmgate", name: "Farmgate Metro Station", bnName: "ফার্মগেট মেট্রো", area: "Farmgate", city: "Dhaka", lat: 23.7570, lon: 90.3895, category: "metro_station", tags: ["farmgate", "metro", "ananda cinema", "khamarbari", "green road", "mrt", "line 6"] },
  { id: "metro-kawran-bazar", name: "Kawran Bazar Metro Station", bnName: "কাওরান বাজার মেট্রো", area: "Kawran Bazar", city: "Dhaka", lat: 23.7513, lon: 90.3934, category: "metro_station", tags: ["kawran bazar", "karwan bazar", "karwan", "pan pacific", "sonar gaon", "metro", "mrt", "line 6"] },
  { id: "metro-shahbagh", name: "Shahbagh Metro Station", bnName: "শাহবাগ মেট্রো", area: "Shahbagh", city: "Dhaka", lat: 23.7389, lon: 90.3957, category: "metro_station", tags: ["shahbagh", "metro", "bsmmu", "pg hospital", "national museum", "du", "mrt", "line 6"] },
  { id: "metro-du-tsc", name: "Dhaka University TSC Metro Station", bnName: "ঢাবি টিএসসি মেট্রো", area: "Dhaka University", city: "Dhaka", lat: 23.7328, lon: 90.3957, category: "metro_station", tags: ["tsc", "dhaka university", "du", "shohid minar", "metro", "mrt", "line 6"] },
  { id: "metro-secretariat", name: "Bangladesh Secretariat Metro Station", bnName: "সচিবালয় মেট্রো", area: "Secretariat", city: "Dhaka", lat: 23.7310, lon: 90.4070, category: "metro_station", tags: ["secretariat", "sachivalay", "metro", "mrt", "high court", "line 6"] },
  { id: "metro-motijheel", name: "Motijheel Metro Station", bnName: "মতিঝিল মেট্রো", area: "Motijheel", city: "Dhaka", lat: 23.7291, lon: 90.4180, category: "metro_station", tags: ["motijheel", "shapla chattar", "metro", "bangladesh bank", "commercial area", "mrt", "line 6"] },
  { id: "metro-kamalapur", name: "Kamalapur Metro Station", bnName: "কমলাপুর মেট্রো", area: "Kamalapur", city: "Dhaka", lat: 23.7317, lon: 90.4262, category: "metro_station", tags: ["kamalapur", "metro", "railway", "central station", "mrt", "line 6"] },

  // ===================== AIRPORTS =====================
  { id: "hazrat-shahjalal-airport", name: "Hazrat Shahjalal International Airport", bnName: "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর", area: "Kurmitola", city: "Dhaka", lat: 23.8433, lon: 90.3978, category: "airport", tags: ["airport", "shahjalal", "terminal", "flight", "kurmitola", "international", "hsia", "biman"] },

  // ===================== RAILWAY STATIONS =====================
  { id: "kamalapur-railway", name: "Kamalapur Central Railway Station", bnName: "কমলাপুর কেন্দ্রীয় রেলওয়ে স্টেশন", area: "Kamalapur", city: "Dhaka", lat: 23.7317, lon: 90.4262, category: "railway", tags: ["kamalapur", "train station", "railway", "central station", "motijheel", "intercity", "mail"] },
  { id: "airport-railway", name: "Dhaka Airport Railway Station", bnName: "বিমানবন্দর রেলওয়ে স্টেশন", area: "Airport", city: "Dhaka", lat: 23.8518, lon: 90.4080, category: "railway", tags: ["airport", "railway", "train", "station", "bimandar"] },
  { id: "tongi-railway", name: "Tongi Railway Junction", bnName: "টঙ্গী রেলওয়ে জংশন", area: "Tongi", city: "Gazipur", lat: 23.8900, lon: 90.4010, category: "railway", tags: ["tongi", "railway", "junction", "train", "ijtema"] },

  // ===================== MAJOR BUS TERMINALS =====================
  { id: "abdullahpur-bus-stand", name: "Abdullahpur Bus Stand", bnName: "আব্দুল্লাহপুর বাস স্ট্যান্ড", area: "Uttara", city: "Dhaka", lat: 23.8826, lon: 90.3986, category: "bus_terminal", tags: ["abdullahpur", "uttara", "bus", "stand", "terminal", "gazipur highway", "tongi bridge"] },
  { id: "azampur-bus-stand", name: "Azampur Bus Stand (Uttara Sector 3 & 6)", bnName: "আজমপুর বাস স্ট্যান্ড", area: "Uttara", city: "Dhaka", lat: 23.8685, lon: 90.3995, category: "bus_terminal", tags: ["azampur", "azam", "uttara", "sector 3", "sector 6", "rajlakshmi", "rajlokkhi", "bus stand", "dhaka mymensingh highway"] },
  { id: "rajlakshmi-uttara", name: "Rajlakshmi Complex & Bus Stand (Uttara Sector 3)", bnName: "রাজলক্ষ্মী বাস স্ট্যান্ড", area: "Uttara", city: "Dhaka", lat: 23.8647, lon: 90.3995, category: "bus_terminal", tags: ["rajlakshmi", "rajlokkhi", "rajlokhi", "raj lokkhi", "raj lakshmi", "uttara", "sector 3", "azampur"] },
  { id: "jasimuddin-bus-stand", name: "Jasimuddin Road Bus Stand (Uttara Sector 1 & 3)", bnName: "জসীমউদদীন বাস স্ট্যান্ড", area: "Uttara", city: "Dhaka", lat: 23.8585, lon: 90.4005, category: "bus_terminal", tags: ["jasimuddin", "jashimuddin", "jashim uddin", "uttara", "sector 1", "sector 3", "airport link"] },
  { id: "house-building", name: "House Building Bus Stand (Uttara Sector 7 & 9)", bnName: "হাউজ বিল্ডিং বাস স্ট্যান্ড", area: "Uttara", city: "Dhaka", lat: 23.8735, lon: 90.3988, category: "bus_terminal", tags: ["house building", "uttara", "sector 7", "sector 9", "dhaka mymensingh highway"] },
  { id: "gabtoli-bus-terminal", name: "Gabtoli Inter-District Bus Terminal", bnName: "গাবতলী বাস টার্মিনাল", area: "Gabtoli", city: "Dhaka", lat: 23.7828, lon: 90.3475, category: "bus_terminal", tags: ["gabtoli", "bus terminal", "inter district", "kallyanpur", "long distance"] },
  { id: "sayedabad-bus-terminal", name: "Sayedabad Inter-District Bus Terminal", bnName: "সায়েদাবাদ বাস টার্মিনাল", area: "Sayedabad", city: "Dhaka", lat: 23.7126, lon: 90.4285, category: "bus_terminal", tags: ["sayedabad", "bus terminal", "janapath", "chittagong sylhet route", "long distance"] },
  { id: "mohakhali-bus-terminal", name: "Mohakhali Inter-District Bus Terminal", bnName: "মহাখালী বাস টার্মিনাল", area: "Mohakhali", city: "Dhaka", lat: 23.7776, lon: 90.4005, category: "bus_terminal", tags: ["mohakhali", "bus terminal", "wireless gate", "icddrb", "tb gate", "long distance"] },
  { id: "jatrabari-bus-stand", name: "Jatrabari Bus Stand & Flyover", bnName: "যাত্রাবাড়ী বাস স্ট্যান্ড", area: "Jatrabari", city: "Dhaka", lat: 23.7083, lon: 90.4350, category: "bus_terminal", tags: ["jatrabari", "flyover", "chittagong road", "dholairpar", "sayedabad link", "mayor hanif"] },
  { id: "arambagh-bus-counter", name: "Arambagh Inter-District Bus Counter", bnName: "আরামবাগ বাস কাউন্টার", area: "Motijheel", city: "Dhaka", lat: 23.7315, lon: 90.4190, category: "bus_terminal", tags: ["arambagh", "motijheel", "green line", "shohagh", "bus counter"] },

  // ===================== UTTARA BUS STOPS & LANDMARKS =====================
  { id: "abdullahpur-chowrasta", name: "Abdullahpur Chowrasta", bnName: "আব্দুল্লাহপুর চৌরাস্তা", area: "Uttara", city: "Dhaka", lat: 23.8845, lon: 90.3992, category: "landmark", tags: ["abdullahpur", "chowrasta", "uttara", "intersection"] },
  { id: "uttara-sector-11-kacha-bazar", name: "Uttara Sector 11 Kacha Bazar", bnName: "উত্তরা সেক্টর ১১ কাঁচা বাজার", area: "Uttara", city: "Dhaka", lat: 23.8765, lon: 90.3875, category: "commercial", tags: ["uttara sector 11", "zamzam tower", "sonargaon janapath", "kacha bazar"] },
  { id: "bns-center", name: "BNS Center (Uttara Sector 7)", bnName: "বিএনএস সেন্টার উত্তরা", area: "Uttara", city: "Dhaka", lat: 23.8725, lon: 90.3960, category: "commercial", tags: ["bns", "bns center", "bns centre", "uttara", "sector 7", "shopping", "market"] },

  // ===================== UNIVERSITIES =====================
  { id: "aiub", name: "AIUB - American International University Bangladesh", bnName: "এআইইউবি", area: "Kuratoli / Khilkhet", city: "Dhaka", lat: 23.8279, lon: 90.4187, category: "university", tags: ["aiub", "american international", "university", "kuratoli", "koratoli", "kuril", "khilkhet"] },
  { id: "nsu", name: "North South University (NSU)", bnName: "নর্থ সাউথ ইউনিভার্সিটি", area: "Bashundhara", city: "Dhaka", lat: 23.8145, lon: 90.4250, category: "university", tags: ["nsu", "north south", "north south university", "bashundhara"] },
  { id: "brac-university", name: "BRAC University (Merul Badda)", bnName: "ব্র্যাক ইউনিভার্সিটি", area: "Mohakhali / Merul Badda", city: "Dhaka", lat: 23.7800, lon: 90.4070, category: "university", tags: ["brac", "bracu", "brac university", "merul badda", "mohakhali", "kha 224"] },
  { id: "buet", name: "BUET - Bangladesh University of Engineering", bnName: "বুয়েট", area: "Palashi", city: "Dhaka", lat: 23.7266, lon: 90.3929, category: "university", tags: ["buet", "engineering", "palashi", "polashi", "new market link"] },
  { id: "iub", name: "IUB - Independent University Bangladesh", bnName: "আইইউবি", area: "Bashundhara", city: "Dhaka", lat: 23.8130, lon: 90.4280, category: "university", tags: ["iub", "independent university", "bashundhara"] },
  { id: "uiu", name: "UIU - United International University", bnName: "ইউআইইউ", area: "Madani Avenue", city: "Dhaka", lat: 23.7985, lon: 90.4195, category: "university", tags: ["uiu", "united international", "university", "madani avenue", "satarkul"] },
  { id: "ewu", name: "East West University (EWU)", bnName: "ইস্ট ওয়েস্ট ইউনিভার্সিটি", area: "Aftabnagar", city: "Dhaka", lat: 23.7680, lon: 90.4260, category: "university", tags: ["ewu", "east west", "aftabnagar", "rampura", "merul badda"] },
  { id: "diu", name: "Daffodil International University (DIU)", bnName: "ড্যাফোডিল ইন্টারন্যাশনাল", area: "Ashulia", city: "Dhaka", lat: 23.8766, lon: 90.3204, category: "university", tags: ["diu", "daffodil", "daffodil international", "ashulia", "permanent campus"] },
  { id: "aust", name: "AUST - Ahsanullah University", bnName: "আহসানউল্লাহ বিশ্ববিদ্যালয়", area: "Tejgaon Industrial", city: "Dhaka", lat: 23.7630, lon: 90.4000, category: "university", tags: ["aust", "ahsanullah", "tejgaon", "love road"] },
  { id: "du-main", name: "Dhaka University (Main Campus)", bnName: "ঢাকা বিশ্ববিদ্যালয়", area: "Dhaka University", city: "Dhaka", lat: 23.7328, lon: 90.3957, category: "university", tags: ["dhaka university", "du", "varsity", "curzon hall", "fuller road", "tsc", "shohid minar"] },
  { id: "jnu", name: "Jagannath University", bnName: "জগন্নাথ বিশ্ববিদ্যালয়", area: "Old Dhaka", city: "Dhaka", lat: 23.7107, lon: 90.4116, category: "university", tags: ["jnu", "jagannath", "sadarghat", "victoria park"] },
  { id: "stamford", name: "Stamford University", bnName: "স্ট্যামফোর্ড ইউনিভার্সিটি", area: "Siddeswari", city: "Dhaka", lat: 23.7455, lon: 90.4050, category: "university", tags: ["stamford", "siddeswari", "ramna"] },
  { id: "green-university", name: "Green University of Bangladesh", bnName: "গ্রিন ইউনিভার্সিটি", area: "Mirpur", city: "Dhaka", lat: 23.8005, lon: 90.3560, category: "university", tags: ["green university", "mirpur", "begum rokeya sharani"] },

  // ===================== HOSPITALS =====================
  { id: "dmch", name: "Dhaka Medical College Hospital (DMCH)", bnName: "ঢাকা মেডিকেল কলেজ", area: "Bakshibazar", city: "Dhaka", lat: 23.7258, lon: 90.3976, category: "hospital", tags: ["dmch", "dhaka medical", "medical college", "shahbagh", "curzon hall"] },
  { id: "square-hospital", name: "Square Hospital", bnName: "স্কয়ার হাসপাতাল", area: "Panthapath", city: "Dhaka", lat: 23.7520, lon: 90.3830, category: "hospital", tags: ["square", "square hospital", "panthapath", "green road"] },
  { id: "united-hospital", name: "United Hospital", bnName: "ইউনাইটেড হাসপাতাল", area: "Gulshan 2", city: "Dhaka", lat: 23.7930, lon: 90.4165, category: "hospital", tags: ["united", "united hospital", "gulshan 2"] },
  { id: "labaid-hospital", name: "Labaid Specialized Hospital", bnName: "ল্যাবএইড হাসপাতাল", area: "Dhanmondi", city: "Dhaka", lat: 23.7440, lon: 90.3820, category: "hospital", tags: ["labaid", "labaide", "dhanmondi", "green road"] },
  { id: "evercare-hospital", name: "Evercare Hospital (Bashundhara)", bnName: "এভারকেয়ার হাসপাতাল", area: "Bashundhara", city: "Dhaka", lat: 23.8110, lon: 90.4300, category: "hospital", tags: ["evercare", "apollo", "bashundhara", "hospital"] },
  { id: "ibn-sina-hospital", name: "Ibn Sina Hospital (Dhanmondi)", bnName: "ইবনে সিনা হাসপাতাল", area: "Dhanmondi", city: "Dhaka", lat: 23.7460, lon: 90.3750, category: "hospital", tags: ["ibn sina", "ibne sina", "dhanmondi", "hospital"] },
  { id: "popular-hospital", name: "Popular Diagnostic Center (Dhanmondi)", bnName: "পপুলার ডায়াগনস্টিক", area: "Dhanmondi", city: "Dhaka", lat: 23.7435, lon: 90.3782, category: "hospital", tags: ["popular", "diagnostic", "dhanmondi", "hospital"] },

  // ===================== SHOPPING / COMMERCIAL =====================
  { id: "bashundhara-city", name: "Bashundhara City Shopping Mall", bnName: "বসুন্ধরা সিটি শপিং মল", area: "Panthapath", city: "Dhaka", lat: 23.7505, lon: 90.3885, category: "commercial", tags: ["bashundhara city", "shopping mall", "panthapath", "tejgaon link", "biggest mall"] },
  { id: "jamuna-future-park", name: "Jamuna Future Park", bnName: "যমুনা ফিউচার পার্ক", area: "Bashundhara / Kuril", city: "Dhaka", lat: 23.8142, lon: 90.4225, category: "commercial", tags: ["jamuna future park", "jfp", "future park", "kuril", "bashundhara gate"] },
  { id: "shimanto-square", name: "Shimanto Square (Dhanmondi)", bnName: "সীমান্ত স্কয়ার", area: "Dhanmondi", city: "Dhaka", lat: 23.7475, lon: 90.3770, category: "commercial", tags: ["shimanto", "shimanto square", "dhanmondi", "meena bazar"] },
  { id: "new-market-nilkhet", name: "New Market & Nilkhet Book Market", bnName: "নিউ মার্কেট ও নীলক্ষেত", area: "New Market", city: "Dhaka", lat: 23.7335, lon: 90.3842, category: "commercial", tags: ["new market", "nilkhet", "balaka cinema", "gawsia", "chandni chowk", "book market"] },
  { id: "eastern-plus", name: "Eastern Plus Shopping (Sonargaon Janapath)", bnName: "ইস্টার্ন প্লাস", area: "Uttara", city: "Dhaka", lat: 23.8690, lon: 90.3880, category: "commercial", tags: ["eastern plus", "eastern", "sonargaon janapath", "uttara"] },

  // ===================== DHAKA - MAJOR BUS STOPS & AREAS =====================
  { id: "agargaon-bus-stop", name: "Agargaon Bus Stand / IDB Bhaban", bnName: "আগারগাঁও বাস স্ট্যান্ড", area: "Agargaon", city: "Dhaka", lat: 23.7770, lon: 90.3800, category: "bus_terminal", tags: ["agargaon", "idb", "bcs", "computer city", "bus stop", "passport office"] },
  { id: "farmgate-bus-stand", name: "Farmgate Bus Stand", bnName: "ফার্মগেট বাস স্ট্যান্ড", area: "Farmgate", city: "Dhaka", lat: 23.7570, lon: 90.3895, category: "bus_terminal", tags: ["farmgate", "ananda cinema", "khamarbari", "green road"] },
  { id: "banani-bus-stop", name: "Banani Kakoli Bus Stop", bnName: "বনানী কাকলী বাস স্টপ", area: "Banani", city: "Dhaka", lat: 23.7937, lon: 90.4046, category: "bus_terminal", tags: ["banani", "kakoli", "kemal ataturk", "rail crossing", "chairman bari"] },
  { id: "mirpur-1-bus-stand", name: "Mirpur 1 Bus Stand", bnName: "মিরপুর ১ বাস স্ট্যান্ড", area: "Mirpur 1", city: "Dhaka", lat: 23.7958, lon: 90.3533, category: "bus_terminal", tags: ["mirpur 1", "bus stand", "sony cinema", "muktijoddha market"] },
  { id: "mirpur-12-bus-stand", name: "Mirpur 12 Bus Stand", bnName: "মিরপুর ১২ বাস স্ট্যান্ড", area: "Mirpur 12", city: "Dhaka", lat: 23.8285, lon: 90.3644, category: "bus_terminal", tags: ["mirpur 12", "metro", "terminal", "dohs link"] },
  { id: "dhanmondi-32", name: "Dhanmondi 32 Bus Stand / Sukrabad", bnName: "ধানমন্ডি ৩২ বাস স্ট্যান্ড", area: "Dhanmondi", city: "Dhaka", lat: 23.7512, lon: 90.3780, category: "bus_terminal", tags: ["dhanmondi", "32", "sukrabad", "mirpur road", "russell square"] },
  { id: "science-lab-mor", name: "Science Laboratory Mor & Bus Stop", bnName: "সায়েন্স ল্যাব মোড়", area: "Science Lab", city: "Dhaka", lat: 23.7385, lon: 90.3812, category: "bus_terminal", tags: ["science lab", "city college", "priyangan", "mirpur road"] },
  { id: "shyamoli-bus-stand", name: "Shyamoli Square & Bus Stand", bnName: "শ্যামলী স্কয়ার বাস স্ট্যান্ড", area: "Shyamoli", city: "Dhaka", lat: 23.7712, lon: 90.3644, category: "bus_terminal", tags: ["shyamoli", "square", "shishu hospital", "bus stand"] },
  { id: "kallyanpur-bus-stand", name: "Kallyanpur Bus Stand", bnName: "কল্যাণপুর বাস স্ট্যান্ড", area: "Kallyanpur", city: "Dhaka", lat: 23.7797, lon: 90.3602, category: "bus_terminal", tags: ["kallyanpur", "bus stand", "shyamoli", "darussalam"] },
  { id: "mohammadpur-bus-stand", name: "Mohammadpur Bus Stand & Town Hall", bnName: "মোহাম্মদপুর বাস স্ট্যান্ড", area: "Mohammadpur", city: "Dhaka", lat: 23.7582, lon: 90.3606, category: "bus_terminal", tags: ["mohammadpur", "bus stand", "town hall", "krishi market", "nurjahan road"] },
  { id: "azimpur-bus-stand", name: "Azimpur Bus Stand", bnName: "আজিমপুর বাস স্ট্যান্ড", area: "Azimpur", city: "Dhaka", lat: 23.7298, lon: 90.3854, category: "bus_terminal", tags: ["azimpur", "bus stand", "eden college", "chapra masjid"] },
  { id: "ecb-chattar", name: "ECB Chattar & Flyover", bnName: "ইসিবি চত্বর", area: "Matikata / Mirpur DOHS", city: "Dhaka", lat: 23.8242, lon: 90.3920, category: "bus_terminal", tags: ["ecb", "chattar", "matikata", "mirpur dohs", "kalshi flyover", "cantonment"] },
  { id: "khilkhet-bus-stop", name: "Khilkhet Bus Stop", bnName: "খিলক্ষেত বাস স্টপ", area: "Khilkhet", city: "Dhaka", lat: 23.8298, lon: 90.4206, category: "bus_terminal", tags: ["khilkhet", "overbridge", "nikunja", "airport road", "kuril link"] },
  { id: "kuril-biswa-road", name: "Kuril Biswa Road & Flyover", bnName: "কুড়িল বিশ্বরোড ফ্লাইওভার", area: "Kuril", city: "Dhaka", lat: 23.8202, lon: 90.4215, category: "bus_terminal", tags: ["kuril", "biswa road", "flyover", "purbachal 300 feet", "bashundhara gate"] },
  { id: "rampura-bridge", name: "Rampura Bridge & TV Bhaban", bnName: "রামপুরা ব্রিজ", area: "Rampura", city: "Dhaka", lat: 23.7628, lon: 90.4222, category: "bus_terminal", tags: ["rampura", "bridge", "btv", "hatirjheel link", "banasree link"] },
  { id: "badda-link-road", name: "Badda Link Road / Middle Badda", bnName: "বাড্ডা লিংক রোড", area: "Badda", city: "Dhaka", lat: 23.7808, lon: 90.4266, category: "bus_terminal", tags: ["badda", "link road", "middle badda", "north badda", "gulshan-1 link"] },
  { id: "notun-bazar", name: "Notun Bazar Bus Stop / Baridhara", bnName: "নতুন বাজার বাস স্ট্যান্ড", area: "Baridhara / Vatara", city: "Dhaka", lat: 23.7979, lon: 90.4243, category: "bus_terminal", tags: ["notun bazar", "baridhara", "vatara", "gulshan 2 link", "madani avenue"] },
  { id: "moghbazar-chourasta", name: "Moghbazar Chowrasta & Wireless Mor", bnName: "মগবাজার চৌরাস্তা", area: "Moghbazar", city: "Dhaka", lat: 23.7495, lon: 90.4075, category: "bus_terminal", tags: ["moghbazar", "mogbazar", "chowrasta", "wireless", "flyover", "holly family", "mouchak link"] },
  { id: "aminbazar-bridge", name: "Aminbazar Bridge & Bus Stand", bnName: "আমিনবাজার বাস স্ট্যান্ড", area: "Gabtoli / Aminbazar", city: "Dhaka", lat: 23.7840, lon: 90.3340, category: "bus_terminal", tags: ["aminbazar", "gabtoli", "bridge", "entry point", "savar link"] },
  { id: "narayanganj-chasara", name: "Chasara Bus Stand (Narayanganj)", bnName: "চাষাড়া বাস স্ট্যান্ড", area: "Chasara", city: "Narayanganj", lat: 23.6238, lon: 90.4990, category: "bus_terminal", tags: ["narayanganj", "chasara", "shibbari", "railway"] },

  // ===================== DHAKA - KEY LANDMARKS & AREAS =====================
  { id: "gulshan-1-circle", name: "Gulshan 1 Circle & DCC Market", bnName: "গুলশান ১ সার্কেল", area: "Gulshan 1", city: "Dhaka", lat: 23.7788, lon: 90.4168, category: "commercial", tags: ["gulshan 1", "gulshan", "circle", "dcc market", "niketan link"] },
  { id: "gulshan-2-circle", name: "Gulshan 2 Circle", bnName: "গুলশান ২ সার্কেল", area: "Gulshan 2", city: "Dhaka", lat: 23.7925, lon: 90.4150, category: "commercial", tags: ["gulshan 2", "circle", "unimart", "diplomatic zone", "banani 11"] },
  { id: "banglamotor-mor", name: "Banglamotor Mor & Bus Stand", bnName: "বাংলা মোটর মোড়", area: "Banglamotor", city: "Dhaka", lat: 23.7460, lon: 90.3939, category: "landmark", tags: ["banglamotor", "sonar gaon", "kawran bazar", "shahbagh link"] },
  { id: "hatirjheel", name: "Hatirjheel & Begunbari", bnName: "হাতিরঝিল", area: "Hatirjheel", city: "Dhaka", lat: 23.7630, lon: 90.4120, category: "landmark", tags: ["hatirjheel", "hatirzheel", "hatir jheel", "begunbari", "jheel", "lake"] },
  { id: "panthapath", name: "Panthapath Signal & Green Road", bnName: "পান্থপথ সিগনাল", area: "Panthapath", city: "Dhaka", lat: 23.7510, lon: 90.3850, category: "landmark", tags: ["panthapath", "green road", "signal", "bashundhara city link"] },
  { id: "elephant-road", name: "Elephant Road / Bata Signal", bnName: "এলিফ্যান্ট রোড / বাটা সিগন্যাল", area: "Elephant Road", city: "Dhaka", lat: 23.7397, lon: 90.3878, category: "commercial", tags: ["elephant road", "bata signal", "multiplan", "science lab link"] },
  { id: "mouchak-mor", name: "Mouchak Mor & Market", bnName: "মৌচাক মোড়", area: "Moghbazar", city: "Dhaka", lat: 23.7488, lon: 90.4105, category: "commercial", tags: ["mouchak", "moghbazar", "malibagh link", "market", "mor"] },
  { id: "malibagh-rail-gate", name: "Malibagh Rail Gate", bnName: "মালিবাগ রেলগেট", area: "Malibagh", city: "Dhaka", lat: 23.7510, lon: 90.4172, category: "landmark", tags: ["malibagh", "rail gate", "chowdhury para", "dider", "shantinagar"] },
  { id: "shantinagar-mor", name: "Shantinagar Mor & Twin Towers", bnName: "শান্তিনগর মোড়", area: "Shantinagar", city: "Dhaka", lat: 23.7410, lon: 90.4140, category: "commercial", tags: ["shantinagar", "twin towers", "chameli bagh", "moghbazar link"] },
  { id: "kakrail-mor", name: "Kakrail Mor & Circuit House", bnName: "কাকরাইল মোড়", area: "Kakrail", city: "Dhaka", lat: 23.7389, lon: 90.4075, category: "landmark", tags: ["kakrail", "mor", "shantinagar", "ramna park", "moghbazar link"] },
  { id: "paltan-mor", name: "Purana Paltan Mor & Baitul Mukarram", bnName: "পুরানা পল্টন মোড়", area: "Paltan", city: "Dhaka", lat: 23.7305, lon: 90.4132, category: "landmark", tags: ["paltan", "purana paltan", "baitul mukarram", "national stadium", "press club"] },
  { id: "tejgaon-nabisco", name: "Tejgaon Nabisco Mor", bnName: "তেজগাঁও নাবিস্কো মোড়", area: "Tejgaon", city: "Dhaka", lat: 23.7688, lon: 90.4045, category: "commercial", tags: ["tejgaon", "nabisco", "tibbat", "channel i", "link road"] },
  { id: "mohakhali-dohs", name: "Mohakhali DOHS / RAOWA Club", bnName: "মহাখালী ডিওএইচএস", area: "Mohakhali", city: "Dhaka", lat: 23.7820, lon: 90.3955, category: "landmark", tags: ["mohakhali", "dohs", "raowa club", "jahangir gate"] },
  { id: "dhanmondi-27", name: "Dhanmondi 27 / Rapa Plaza", bnName: "ধানমন্ডি ২৭", area: "Dhanmondi", city: "Dhaka", lat: 23.7548, lon: 90.3705, category: "landmark", tags: ["dhanmondi", "27", "rapa plaza", "shankar", "lalmatia link"] },
  { id: "dhanmondi-lake", name: "Rabindra Sarobar / Dhanmondi Lake", bnName: "রবীন্দ্র সরোবর / ধানমন্ডি লেক", area: "Dhanmondi", city: "Dhaka", lat: 23.7438, lon: 90.3742, category: "landmark", tags: ["dhanmondi", "lake", "rabindra sarobar", "8a"] },
  { id: "lalbagh-fort", name: "Lalbagh Fort (Kella)", bnName: "লালবাগ কেল্লা", area: "Lalbagh", city: "Dhaka", lat: 23.7188, lon: 90.3881, category: "landmark", tags: ["lalbagh fort", "kella", "puran dhaka", "historic"] },
  { id: "chawkbazar", name: "Chawkbazar Shahi Masjid & Mor", bnName: "চকবাজার শাহী মসজিদ", area: "Old Dhaka", city: "Dhaka", lat: 23.7163, lon: 90.3956, category: "landmark", tags: ["chawkbazar", "chowkbazar", "old dhaka", "puran dhaka", "lalbagh"] },
  { id: "purbachal-300-feet", name: "Purbachal 300 Feet Highway", bnName: "পূর্বাচল ৩০০ ফিট", area: "Purbachal", city: "Dhaka", lat: 23.8270, lon: 90.4560, category: "landmark", tags: ["purbachal", "300 feet", "expressway", "neelgonj"] },
  { id: "wari-baldha-garden", name: "Wari Baldha Garden", bnName: "ওয়ারী বলধা গার্ডেন", area: "Wari", city: "Dhaka", lat: 23.7160, lon: 90.4185, category: "landmark", tags: ["wari", "baldha garden", "rankin street", "old dhaka"] },
  { id: "mohammadpur-beribadh", name: "Mohammadpur Beribadh / Tin Rasta", bnName: "মোহাম্মদপুর বেড়িবাঁধ", area: "Mohammadpur", city: "Dhaka", lat: 23.7540, lon: 90.3470, category: "landmark", tags: ["mohammadpur", "beribadh", "tin rasta", "bosila bridge link"] },
  { id: "adabor-ring-road", name: "Adabor Baytul Aman / Ring Road", bnName: "আদাবর রিং রোড", area: "Adabor / Mohammadpur", city: "Dhaka", lat: 23.7710, lon: 90.3580, category: "area", tags: ["adabor", "shyamoli", "ring road", "mohammadpur"] },
  { id: "eskaton", name: "Eskaton Garden Road", bnName: "ইস্কাটন গার্ডেন রোড", area: "Eskaton", city: "Dhaka", lat: 23.7450, lon: 90.4020, category: "area", tags: ["eskaton", "garden road", "ramna", "moghbazar link"] },
  { id: "jigatola", name: "Jigatola Bus Stand", bnName: "জিগাতলা বাস স্ট্যান্ড", area: "Dhanmondi", city: "Dhaka", lat: 23.7395, lon: 90.3755, category: "bus_terminal", tags: ["jigatola", "dhanmondi", "hazaribagh link"] },
  { id: "kalabagan", name: "Kalabagan Mor & Bashir Uddin Road", bnName: "কলাবাগান মোড়", area: "Kalabagan", city: "Dhaka", lat: 23.7475, lon: 90.3785, category: "area", tags: ["kalabagan", "bashir uddin", "dhanmondi link", "lake circus"] },
  { id: "lalmatia", name: "Lalmatia Block D & Mohammadpur Link", bnName: "লালমাটিয়া", area: "Lalmatia", city: "Dhaka", lat: 23.7560, lon: 90.3675, category: "area", tags: ["lalmatia", "mohammadpur link", "dhanmondi", "block d"] },
  { id: "nikunja-1-2", name: "Nikunja 1 & 2 (Airport Road)", bnName: "নিকুঞ্জ ১ ও ২", area: "Nikunja", city: "Dhaka", lat: 23.8340, lon: 90.4180, category: "area", tags: ["nikunja", "nikunjo", "airport road", "khilkhet link", "nikunja 1", "nikunja 2"] },
  { id: "kuratoli", name: "Kuratoli / Koratoli (Khilkhet)", bnName: "কুড়াতলী / কোরাতলী", area: "Khilkhet", city: "Dhaka", lat: 23.8265, lon: 90.4195, category: "area", tags: ["kuratoli", "koratoli", "kuril link", "khilkhet", "aiub link"] },
  { id: "bashundhara-gate", name: "Bashundhara R/A Main Gate", bnName: "বসুন্ধরা মেইন গেট", area: "Bashundhara", city: "Dhaka", lat: 23.8142, lon: 90.4225, category: "landmark", tags: ["bashundhara", "main gate", "kuril", "nsu link", "iub link"] },
  { id: "demra", name: "Demra Bus Stand & Matuail", bnName: "ডেমরা বাস স্ট্যান্ড", area: "Demra", city: "Dhaka", lat: 23.7070, lon: 90.4685, category: "bus_terminal", tags: ["demra", "matuail", "tongi diversion", "tarabo link"] },

  // ===================== GAZIPUR & TONGI =====================
  { id: "gazipur-chowrasta", name: "Gazipur Chowrasta & Bus Terminal", bnName: "গাজীপুর চৌরাস্তা বাস টার্মিনাল", area: "Chowrasta", city: "Gazipur", lat: 23.9985, lon: 90.3842, category: "bus_terminal", tags: ["gazipur", "chowrasta", "chourasta", "chandana", "joydebpur", "gazipur chowrasta"] },
  { id: "board-bazar", name: "Board Bazar Bus Stop (Gazipur)", bnName: "বোর্ড বাজার বাস স্টপ", area: "Board Bazar", city: "Gazipur", lat: 23.9770, lon: 90.3955, category: "bus_terminal", tags: ["board bazar", "board bazaar", "boardbazar", "bord bazar", "gazipur", "dhaka gazipur highway"] },
  { id: "bypass-gazipur", name: "Gazipur Bypass Road (Joydebpur)", bnName: "গাজীপুর বাইপাস রোড", area: "Joydebpur", city: "Gazipur", lat: 24.0025, lon: 90.3990, category: "bus_terminal", tags: ["bypass", "bypass gazipur", "gazipur bypass", "bypass road", "joydebpur", "gazipur"] },
  { id: "tongi-college-gate", name: "Tongi College Gate Bus Stop", bnName: "টঙ্গী কলেজ গেট বাস স্টপ", area: "Tongi", city: "Gazipur", lat: 23.8940, lon: 90.3980, category: "bus_terminal", tags: ["tongi college", "college gate", "tongi college gate", "collej gate", "college gat", "tongi", "gazipur"] },
  { id: "tongi-bazar", name: "Tongi Bazar & Station Road", bnName: "টঙ্গী বাজার ও স্টেশন রোড", area: "Tongi", city: "Gazipur", lat: 23.8965, lon: 90.4022, category: "bus_terminal", tags: ["tongi", "tongi bazar", "station road", "turag river"] },
  { id: "tongi-bridge", name: "Tongi Bridge (Turag Bridge)", bnName: "টঙ্গী ব্রিজ / তুরাগ ব্রিজ", area: "Tongi", city: "Gazipur", lat: 23.8886, lon: 90.3994, category: "landmark", tags: ["tongi bridge", "turag bridge", "tongi"] },
  { id: "chandana-chowrasta", name: "Chandana Chowrasta (Gazipur)", bnName: "চান্দনা চৌরাস্তা", area: "Chandana", city: "Gazipur", lat: 23.9890, lon: 90.3850, category: "bus_terminal", tags: ["chandana", "chowrasta", "gazipur", "chandana chowrasta", "mymensingh road"] },
  { id: "konabari", name: "Konabari Bus Stand (Gazipur)", bnName: "কোনাবাড়ী বাস স্ট্যান্ড", area: "Konabari", city: "Gazipur", lat: 24.0120, lon: 90.3780, category: "bus_terminal", tags: ["konabari", "gazipur", "national university", "pubail link"] },
  { id: "kaliakoir", name: "Kaliakoir Bus Stand", bnName: "কালিয়াকৈর বাস স্ট্যান্ড", area: "Kaliakoir", city: "Gazipur", lat: 24.0700, lon: 90.2230, category: "bus_terminal", tags: ["kaliakoir", "gazipur", "epz", "hi-tech park"] },

  // ===================== SAVAR =====================
  { id: "savar-bus-stand", name: "Savar Bus Stand & Bazaar", bnName: "সাভার বাস স্ট্যান্ড", area: "Savar", city: "Dhaka", lat: 23.8440, lon: 90.2580, category: "bus_terminal", tags: ["savar", "bazaar", "national monument", "jahangirnagar"] },
  { id: "ashulia-beribadh", name: "Ashulia Beribadh / Fantasy Kingdom", bnName: "আশুলিয়া বেড়িবাঁধ", area: "Ashulia", city: "Dhaka", lat: 23.9010, lon: 90.3255, category: "landmark", tags: ["ashulia", "beribadh", "fantasy kingdom", "savar"] },

  // ===================== CHATTOGRAM =====================
  { id: "gec-circle", name: "GEC Circle / Dampara Bus Stand", bnName: "জিইসি মোড়", area: "GEC", city: "Chattogram", lat: 22.3592, lon: 91.8219, category: "bus_terminal", tags: ["chittagong", "chattogram", "gec", "dampara", "agrabad"] },
  { id: "coxsbazar-kolatoli", name: "Kolatoli Beach Bus Counter (Cox's Bazar)", bnName: "কলাতলী বিচ", area: "Kolatoli", city: "Cox's Bazar", lat: 21.4173, lon: 91.9840, category: "bus_terminal", tags: ["cox's bazar", "coxsbazar", "kolatoli", "kuratoli", "sugandha", "sea beach"] },
];

// ===================== FUZZY SEARCH ENGINE =====================

// Phonetic aliases map for common Bengali transliteration variants
const PHONETIC_ALIASES: [RegExp, string[]][] = [
  [/rajlokkhi|rajlokhi|raj\s*lokkhi/, ["rajlakshmi", "rajlokkhi"]],
  [/board\s*baz(a|aa)r|bord\s*baz/, ["board bazar"]],
  [/bypass/, ["bypass gazipur", "gazipur bypass", "bypass road"]],
  [/tongi\s*coll(ege|ej)|coll(ege|ej)\s*gat/, ["tongi college gate", "college gate"]],
  [/chou(rasta)?|chow(rasta)?/, ["chowrasta", "chourasta"]],
  [/koratoli|kuratoli/, ["kuratoli", "koratoli"]],
  [/mogbazar|moghbaz/, ["moghbazar", "mogbazar"]],
  [/jashim\s*uddin|jasim\s*uddin/, ["jasimuddin", "jashimuddin"]],
  [/karwan\s*baz/, ["kawran bazar", "karwan bazar"]],
  [/kuril|qur(i|e)l/, ["kuril", "biswa road"]],
  [/polashi/, ["palashi"]],
  [/sewra/, ["shewrapara"]],
  [/lab\s*aid/, ["labaid"]],
  [/ibne?\s*sina/, ["ibn sina"]],
];

/**
 * Smart search with multi-word matching, fuzzy phonetic matching, and prefix scoring.
 * Designed to work like Google Maps for Bangladesh transit.
 */
export function searchLocalPlaces(rawQuery: string): CuratedPlace[] {
  const q = rawQuery.trim().toLowerCase().replace(/\s+/g, " ");
  if (!q || q.length < 1) return [];

  // Build query variants (original + phonetic aliases)
  const queryVariants = new Set<string>([q]);
  for (const [pattern, aliases] of PHONETIC_ALIASES) {
    if (pattern.test(q)) {
      aliases.forEach(a => queryVariants.add(a));
    }
  }
  const qArr = Array.from(queryVariants);

  // Split query into individual words for multi-word matching
  const queryWords = q.split(" ").filter(w => w.length > 0);
  const isMultiWord = queryWords.length > 1;

  const scored = BANGLADESH_PLACES.map(place => {
    const nameLower = place.name.toLowerCase();
    const bnNameLower = (place.bnName || "").toLowerCase();
    const areaLower = place.area.toLowerCase();
    const cityLower = place.city.toLowerCase();
    const allTags = place.tags.join(" ");
    const allText = `${nameLower} ${bnNameLower} ${areaLower} ${cityLower} ${allTags}`;

    let score = 0;

    // Multi-word matching: "tongi college" → both "tongi" AND "college" must appear
    if (isMultiWord) {
      const allMatch = queryWords.every(word =>
        allText.includes(word)
      );
      if (allMatch) {
        // Bonus for matching all words
        const nameMatch = queryWords.every(word => nameLower.includes(word));
        if (nameMatch) score = Math.max(score, 95);
        else score = Math.max(score, 65);
      }
    }

    for (const qv of qArr) {
      // Exact name start match
      if (nameLower.startsWith(qv)) {
        score = Math.max(score, 100);
      }
      // Word boundary match in name
      else if (nameLower.split(/[\s(/&,]+/).some(word => word.startsWith(qv))) {
        score = Math.max(score, 85);
      }
      // Substring in name
      else if (nameLower.includes(qv)) {
        score = Math.max(score, 65);
      }

      // Exact tag match (highest tag score)
      if (place.tags.some(t => t === qv)) {
        score = Math.max(score, 75);
      }
      // Tag prefix match
      else if (place.tags.some(t => t.startsWith(qv))) {
        score = Math.max(score, 55);
      }
      // Tag substring (any tag contains the query)
      else if (allTags.includes(qv)) {
        score = Math.max(score, 35);
      }

      // Bengali name match
      if (bnNameLower.includes(qv)) {
        score = Math.max(score, 90);
      }

      // Area match
      if (areaLower.startsWith(qv)) {
        score = Math.max(score, 45);
      } else if (areaLower.includes(qv)) {
        score = Math.max(score, 25);
      }

      // City match
      if (cityLower.startsWith(qv)) {
        score = Math.max(score, 15);
      } else if (cityLower.includes(qv)) {
        score = Math.max(score, 8);
      }
    }

    return { place, score };
  }).filter(item => item.score > 0);

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 12).map(item => item.place);
}
