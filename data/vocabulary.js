/**
 * ==========================================================================
 * English Janala — Comprehensive Built-in Vocabulary Dataset
 * ==========================================================================
 * Ensures 100% uninterrupted availability even during external API downtime.
 * Contains 7 structured lessons with accurate Bengali meanings, pronunciations,
 * contextual sentences, and synonyms.
 * ==========================================================================
 */

const DEFAULT_LEVELS = [
    { level_no: 1, title: 'Lesson-1: Foundations & Daily Essentials' },
    { level_no: 2, title: 'Lesson-2: Growth & Positive Actions' },
    { level_no: 3, title: 'Lesson-3: Character & Virtues' },
    { level_no: 4, title: 'Lesson-4: Intermediate Expressions' },
    { level_no: 5, title: 'Lesson-5: Advanced Communication' },
    { level_no: 6, title: 'Lesson-6: Academic & Mastery' },
    { level_no: 7, title: 'Lesson-7: Idioms & Fluency' }
];

const DEFAULT_VOCABULARY = [
    // Lesson 1
    {
        id: 101,
        level_no: 1,
        word: "Eager",
        pronunciation: "ইগার",
        meaning: "আগ্রহী / উৎসুক",
        sentence: "She was eager to start her new English lesson.",
        synonyms: ["enthusiastic", "keen", "excited"]
    },
    {
        id: 102,
        level_no: 1,
        word: "Sincere",
        pronunciation: "সিনসিয়ার",
        meaning: "সৎ / আন্তরিক",
        sentence: "He gave a sincere apology for being late.",
        synonyms: ["honest", "genuine", "truthful"]
    },
    {
        id: 103,
        level_no: 1,
        word: "Apple",
        pronunciation: "অ্যাপল",
        meaning: "আপেল",
        sentence: "An apple a day keeps the doctor away.",
        synonyms: ["fruit", "pome"]
    },
    {
        id: 104,
        level_no: 1,
        word: "Bright",
        pronunciation: "ব্রাইট",
        meaning: "উজ্জ্বল / বুদ্ধিমান",
        sentence: "The sun was bright and the sky was clear.",
        synonyms: ["shining", "clever", "luminous"]
    },
    {
        id: 105,
        level_no: 1,
        word: "Courage",
        pronunciation: "কারেজ",
        meaning: "সাহস",
        sentence: "It takes courage to speak in a foreign language.",
        synonyms: ["bravery", "valor", "boldness"]
    },
    {
        id: 106,
        level_no: 1,
        word: "Dream",
        pronunciation: "ড্রিম",
        meaning: "স্বপ্ন / আশা",
        sentence: "Never give up on your biggest dream.",
        synonyms: ["aspiration", "vision", "goal"]
    },
    {
        id: 107,
        level_no: 1,
        word: "Energy",
        pronunciation: "এনার্জি",
        meaning: "শক্তি / উদ্যম",
        sentence: "Children have an abundance of natural energy.",
        synonyms: ["vigor", "vitality", "power"]
    },
    {
        id: 108,
        level_no: 1,
        word: "Faith",
        pronunciation: "ফেইথ",
        meaning: "বিশ্বাস / আস্থা",
        sentence: "Have faith in your ability to succeed.",
        synonyms: ["belief", "trust", "confidence"]
    },
    {
        id: 109,
        level_no: 1,
        word: "Gentle",
        pronunciation: "জেন্টল",
        meaning: "ভদ্র / শান্ত",
        sentence: "Be gentle when handling delicate objects.",
        synonyms: ["mild", "tender", "calm"]
    },
    {
        id: 110,
        level_no: 1,
        word: "Happy",
        pronunciation: "হ্যাপি",
        meaning: "খুশি / আনন্দিত",
        sentence: "We were very happy to meet our old friends.",
        synonyms: ["cheerful", "joyful", "glad"]
    },
    {
        id: 111,
        level_no: 1,
        word: "Journey",
        pronunciation: "জার্নি",
        meaning: "যাত্রা / ভ্রমণ",
        sentence: "Learning English is a rewarding journey.",
        synonyms: ["trip", "voyage", "travel"]
    },
    {
        id: 112,
        level_no: 1,
        word: "Kind",
        pronunciation: "কাইন্ড",
        meaning: "দয়ালু / সদয়",
        sentence: "Always be kind to everyone you meet.",
        synonyms: ["caring", "generous", "helpful"]
    },

    // Lesson 2
    {
        id: 201,
        level_no: 2,
        word: "Achieve",
        pronunciation: "অ্যাচিভ",
        meaning: "অর্জন করা",
        sentence: "With steady practice, you will achieve fluency.",
        synonyms: ["accomplish", "attain", "reach"]
    },
    {
        id: 202,
        level_no: 2,
        word: "Balance",
        pronunciation: "ব্যালেন্স",
        meaning: "ভারসাম্য",
        sentence: "Maintain a healthy balance between study and rest.",
        synonyms: ["equilibrium", "harmony", "stability"]
    },
    {
        id: 203,
        level_no: 2,
        word: "Create",
        pronunciation: "ক্রিয়েট",
        meaning: "তৈরি করা / সৃষ্টি করা",
        sentence: "Artists create beautiful paintings with colors.",
        synonyms: ["produce", "build", "generate"]
    },
    {
        id: 204,
        level_no: 2,
        word: "Discover",
        pronunciation: "ডিসকাভার",
        meaning: "আবিষ্কার করা",
        sentence: "Scientists discover new facts about the universe.",
        synonyms: ["find", "uncover", "reveal"]
    },
    {
        id: 205,
        level_no: 2,
        word: "Explore",
        pronunciation: "এক্সপ্লোর",
        meaning: "অন্বেষণ করা / ঘুরে দেখা",
        sentence: "We explored the ancient city on foot.",
        synonyms: ["investigate", "examine", "tour"]
    },
    {
        id: 206,
        level_no: 2,
        word: "Focus",
        pronunciation: "ফোকাস",
        meaning: "মনোযোগ দেওয়া",
        sentence: "Focus on understanding the core concept.",
        synonyms: ["concentrate", "center", "aim"]
    },
    {
        id: 207,
        level_no: 2,
        word: "Growth",
        pronunciation: "গ্রোথ",
        meaning: "বৃদ্ধি / উন্নতি",
        sentence: "Personal growth takes patience and persistence.",
        synonyms: ["progress", "development", "expansion"]
    },
    {
        id: 208,
        level_no: 2,
        word: "Inspire",
        pronunciation: "ইন্সপায়ার",
        meaning: "অনুপ্রাণিত করা",
        sentence: "Great leaders inspire people to do their best.",
        synonyms: ["motivate", "encourage", "stimulate"]
    },
    {
        id: 209,
        level_no: 2,
        word: "Joyful",
        pronunciation: "জয়ফুল",
        meaning: "আনন্দময়",
        sentence: "The festival was filled with joyful laughter.",
        synonyms: ["cheerful", "jubilant", "merry"]
    },
    {
        id: 210,
        level_no: 2,
        word: "Listen",
        pronunciation: "লিসেন",
        meaning: "শোনা / মনোযোগ দেওয়া",
        sentence: "Listen carefully to natural native speakers.",
        synonyms: ["hear", "attend", "heed"]
    },

    // Lesson 3
    {
        id: 301,
        level_no: 3,
        word: "Abundant",
        pronunciation: "অ্যাবান্ডান্ট",
        meaning: "প্রচুর / পর্যাপ্ত",
        sentence: "The valley has abundant water resources.",
        synonyms: ["plentiful", "copious", "ample"]
    },
    {
        id: 302,
        level_no: 3,
        word: "Benevolent",
        pronunciation: "বেনেভোলেন্ট",
        meaning: "পরোপকারী / দয়ালু",
        sentence: "The benevolent donor funded the school library.",
        synonyms: ["charitable", "compassionate", "kindhearted"]
    },
    {
        id: 303,
        level_no: 3,
        word: "Candid",
        pronunciation: "ক্যান্ডিড",
        meaning: "অকপট / স্পষ্টভাষী",
        sentence: "She gave a candid review of the new movie.",
        synonyms: ["frank", "honest", "outspoken"]
    },
    {
        id: 304,
        level_no: 3,
        word: "Diligent",
        pronunciation: "ডিলিজেন্ট",
        meaning: "পরিশ্রমী / অধ্যবসায়ী",
        sentence: "Diligent students usually score higher grades.",
        synonyms: ["hardworking", "industrious", "assiduous"]
    },
    {
        id: 305,
        level_no: 3,
        word: "Eloquent",
        pronunciation: "এলোকয়েন্ট",
        meaning: "বাকপটু / সুস্পষ্ট বক্তা",
        sentence: "The president delivered an eloquent speech.",
        synonyms: ["fluent", "articulate", "persuasive"]
    },
    {
        id: 306,
        level_no: 3,
        word: "Frugal",
        pronunciation: "ফ্রুগাল",
        meaning: "মিতব্যয়ী / হিসেবি",
        sentence: "She lives a simple and frugal life.",
        synonyms: ["thrifty", "economical", "sparing"]
    },
    {
        id: 307,
        level_no: 3,
        word: "Generous",
        pronunciation: "জেনারেস",
        meaning: "উদার / দানশীল",
        sentence: "He was very generous with his time and advice.",
        synonyms: ["charitable", "bountiful", "magnanimous"]
    },
    {
        id: 308,
        level_no: 3,
        word: "Humble",
        pronunciation: "হাম্বল",
        meaning: "বিনয়ী / নম্র",
        sentence: "Despite her fame, she remained modest and humble.",
        synonyms: ["modest", "unassuming", "meek"]
    },
    {
        id: 309,
        level_no: 3,
        word: "Ingenious",
        pronunciation: "ইনজিনিয়াস",
        meaning: "প্রতিভাধর / উদ্ভাবনী",
        sentence: "He designed an ingenious solution to the puzzle.",
        synonyms: ["clever", "inventive", "creative"]
    },
    {
        id: 310,
        level_no: 3,
        word: "Resilient",
        pronunciation: "রেসিলিয়েন্ট",
        meaning: "স্থিতিস্থাপক / বাধাবিপত্তি জয় করতে সক্ষম",
        sentence: "Resilient people recover quickly from setbacks.",
        synonyms: ["strong", "tough", "tenacious"]
    },

    // Lesson 4
    {
        id: 401,
        level_no: 4,
        word: "Aesthetic",
        pronunciation: "এসথেটিক",
        meaning: "নান্দনিক / সৌন্দর্যবোধসম্পন্ন",
        sentence: "The modern interior design has a clean aesthetic.",
        synonyms: ["artistic", "tasteful", "stylish"]
    },
    {
        id: 402,
        level_no: 4,
        word: "Capricious",
        pronunciation: "ক্যাপ্রিশাস",
        meaning: "খেয়ালী / পরিবর্তনশীল",
        sentence: "The spring weather in the mountains was capricious.",
        synonyms: ["fickle", "unpredictable", "whimsical"]
    },
    {
        id: 403,
        level_no: 4,
        word: "Ephemeral",
        pronunciation: "এফেমারাল",
        meaning: "ক্ষণস্থায়ী / অল্পকালীন",
        sentence: "Fame can be ephemeral in the digital age.",
        synonyms: ["fleeting", "transient", "short-lived"]
    },
    {
        id: 404,
        level_no: 4,
        word: "Fastidious",
        pronunciation: "ফ্যাস্টিডিয়াস",
        meaning: "খুঁতখুঁতে / অতিসতর্ক",
        sentence: "He is fastidious about keeping his desk spotless.",
        synonyms: ["meticulous", "particular", "demanding"]
    },
    {
        id: 405,
        level_no: 4,
        word: "Gregarious",
        pronunciation: "গ্রেগেরিয়াস",
        meaning: "মিশুক / দলবদ্ধ থাকতে পছন্দ করে এমন",
        sentence: "Dolphins are gregarious creatures who swim in pods.",
        synonyms: ["sociable", "outgoing", "companionable"]
    },
    {
        id: 406,
        level_no: 4,
        word: "Juxtapose",
        pronunciation: "জাক্সটাপোজ",
        meaning: "তুলনার জন্য পাশাপাশি স্থাপন করা",
        sentence: "The museum exhibition juxtaposes ancient and modern art.",
        synonyms: ["compare", "contrast", "collocate"]
    },
    {
        id: 407,
        level_no: 4,
        word: "Languid",
        pronunciation: "ল্যাঙ্গুইড",
        meaning: "অলস / দুর্বল / ধীরগতির",
        sentence: "They spent a languid afternoon resting by the lake.",
        synonyms: ["lethargic", "sluggish", "relaxed"]
    },
    {
        id: 408,
        level_no: 4,
        word: "Nefarious",
        pronunciation: "নেফেরিয়াস",
        meaning: "কুখ্যাত / গর্হিত / জঘন্য",
        sentence: "The detectives thwarted the villain's nefarious plot.",
        synonyms: ["wicked", "evil", "sinister"]
    },

    // Lesson 5
    {
        id: 501,
        level_no: 5,
        word: "Anachronism",
        pronunciation: "অ্যানাক্রোনিজম",
        meaning: "কালবৈষম্য / যুগের সাথে অসঙ্গতি",
        sentence: "A smartphone in a medieval film is a clear anachronism.",
        synonyms: ["misplacement", "archaism"]
    },
    {
        id: 502,
        level_no: 5,
        word: "Bellicose",
        pronunciation: "বেলিকোজ",
        meaning: "যুদ্ধংদেহী / মারমুখী",
        sentence: "The ruler's bellicose rhetoric worried neighboring nations.",
        synonyms: ["hostile", "warlike", "combative"]
    },
    {
        id: 503,
        level_no: 5,
        word: "Deleterious",
        pronunciation: "ডেলিটেরিয়াস",
        meaning: "ক্ষতিকর / হানিকর",
        sentence: "Smoking has serious deleterious effects on health.",
        synonyms: ["harmful", "detrimental", "injurious"]
    },
    {
        id: 504,
        level_no: 5,
        word: "Enervate",
        pronunciation: "এনারভেট",
        meaning: "দুর্বল করা / শক্তিহীন করা",
        sentence: "Extreme humidity can enervate even healthy athletes.",
        synonyms: ["exhaust", "weaken", "drain"]
    },
    {
        id: 505,
        level_no: 5,
        word: "Hubris",
        pronunciation: "হিউব্রিস",
        meaning: "অতিদম্ভ / মাত্রাতিরিক্ত অহংকার",
        sentence: "His tragic downfall was brought about by sheer hubris.",
        synonyms: ["arrogance", "pride", "conceit"]
    },
    {
        id: 506,
        level_no: 5,
        word: "Munificent",
        pronunciation: "মিউনিফিসেন্ট",
        meaning: "অত্যন্ত দানশীল / অকৃপণ",
        sentence: "The hospital received a munificent bequest from a patron.",
        synonyms: ["generous", "lavish", "bountiful"]
    },
    {
        id: 507,
        level_no: 5,
        word: "Ubiquitous",
        pronunciation: "ইউবিকুইটাস",
        meaning: "সর্বব্যাপী / সর্বত্র বিদ্যমান",
        sentence: "Smartphones have become ubiquitous across the modern world.",
        synonyms: ["omnipresent", "universal", "pervasive"]
    },

    // Lesson 6
    {
        id: 601,
        level_no: 6,
        word: "Acumen",
        pronunciation: "অ্যাকিউমেন",
        meaning: "তীক্ষ্ণ বুদ্ধি / বিচক্ষণতা",
        sentence: "Her financial acumen helped the startup scale rapidly.",
        synonyms: ["shrewdness", "insight", "sharpness"]
    },
    {
        id: 602,
        level_no: 6,
        word: "Circumspect",
        pronunciation: "সারকামস্পেক্ট",
        meaning: "সতর্ক / সাবধানী",
        sentence: "Diplomats must be circumspect when drafting agreements.",
        synonyms: ["cautious", "wary", "prudent"]
    },
    {
        id: 603,
        level_no: 6,
        word: "Equanimity",
        pronunciation: "ইকুয়ানিমিটি",
        meaning: "মনের স্থিরতা / আত্মসংযম",
        sentence: "She faced difficult challenges with grace and equanimity.",
        synonyms: ["composure", "calmness", "poise"]
    },
    {
        id: 604,
        level_no: 6,
        word: "Iconoclast",
        pronunciation: "আইকনোক্লাস্ট",
        meaning: "প্রচলিত বিশ্বাস বা রীতির বিরোধী",
        sentence: "The young director was hailed as an innovative iconoclast.",
        synonyms: ["rebel", "nonconformist", "maverick"]
    },
    {
        id: 605,
        level_no: 6,
        word: "Panacea",
        pronunciation: "প্যানাসিয়া",
        meaning: "সর্বব্যাধির মহৌষধ / সকল সমস্যার সমাধান",
        sentence: "Technology alone is not a panacea for social ills.",
        synonyms: ["cure-all", "universal remedy"]
    },
    {
        id: 606,
        level_no: 6,
        word: "Voracious",
        pronunciation: "ভোরেশাস",
        meaning: "পেটুক / অতিমাত্রায় আগ্রহী",
        sentence: "He is a voracious reader who finishes three books a week.",
        synonyms: ["insatiable", "avid", "ravenous"]
    },

    // Lesson 7
    {
        id: 701,
        level_no: 7,
        word: "Serendipity",
        pronunciation: "সেরেন্ডিপিটি",
        meaning: "ভাগ্যক্রমে অপ্রত্যাশিত আনন্দদায়ক কিছু পাওয়া",
        sentence: "Finding his long-lost notebook was pure serendipity.",
        synonyms: ["chance", "good fortune", "fluke"]
    },
    {
        id: 702,
        level_no: 7,
        word: "Epiphany",
        pronunciation: "এপিফেনি",
        meaning: "হঠাৎ অন্তর্জ্ঞান বা সত্য উপলব্ধি",
        sentence: "During his evening walk, he experienced a sudden epiphany.",
        synonyms: ["revelation", "realization", "insight"]
    },
    {
        id: 703,
        level_no: 7,
        word: "Petrichor",
        pronunciation: "পেট্রিকোর",
        meaning: "বৃষ্টির পর ভেজা মাটির মিষ্টি সুবাস",
        sentence: "The pleasant petrichor filled the air after the summer shower.",
        synonyms: ["earthy scent", "rain fragrance"]
    },
    {
        id: 704,
        level_no: 7,
        word: "Solitude",
        pronunciation: "সলিটিউড",
        meaning: "নির্জনে প্রশান্তি / একাকীত্ব",
        sentence: "Writers often seek quiet solitude to finish their novels.",
        synonyms: ["peaceful isolation", "seclusion"]
    },
    {
        id: 705,
        level_no: 7,
        word: "Wanderlust",
        pronunciation: "ওয়ান্ডারলাস্ট",
        meaning: "ভ্রমণপিপাসা / পৃথিবী দেখার তীব্র ইচ্ছা",
        sentence: "Her wanderlust led her to backpack across forty countries.",
        synonyms: ["passion for travel", "restlessness"]
    },
    {
        id: 706,
        level_no: 7,
        word: "Zenith",
        pronunciation: "জেনিথ",
        meaning: "শীর্ষবিন্দু / সাফল্যের চরম সীমা",
        sentence: "At the zenith of his career, he won multiple gold medals.",
        synonyms: ["peak", "pinnacle", "apex", "summit"]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DEFAULT_LEVELS, DEFAULT_VOCABULARY };
}
