/**
 * ==========================================================================
 * English Janala — Comprehensive Built-in Vocabulary Dataset
 * ==========================================================================
 * Ensures 100% uninterrupted availability even during external API downtime.
 * Contains 7 structured lessons with 140 curated words featuring:
 * - Accurate Bengali Meanings & Phonetic Pronunciations
 * - Part of Speech (Noun, Verb, Adjective, Adverb)
 * - English Contextual Sentence & Bengali Translations
 * - Synonyms & Antonyms
 * ==========================================================================
 */

const DEFAULT_LEVELS = [
    {
        "level_no": 1,
        "title": "Lesson-1: Foundations & Daily Essentials"
    },
    {
        "level_no": 2,
        "title": "Lesson-2: Growth & Positive Actions"
    },
    {
        "level_no": 3,
        "title": "Lesson-3: Character & Virtues"
    },
    {
        "level_no": 4,
        "title": "Lesson-4: Intermediate Expressions"
    },
    {
        "level_no": 5,
        "title": "Lesson-5: Advanced Communication"
    },
    {
        "level_no": 6,
        "title": "Lesson-6: Academic & Mastery"
    },
    {
        "level_no": 7,
        "title": "Lesson-7: Idioms & Fluency"
    }
];

const DEFAULT_VOCABULARY = [
    {
        "id": 101,
        "level_no": 1,
        "word": "Eager",
        "part_of_speech": "Adjective",
        "pronunciation": "ইগার",
        "meaning": "আগ্রহী / উৎসুক",
        "sentence": "She was eager to start her new English lesson.",
        "sentence_bn": "তিনি তার নতুন ইংরেজি পাঠ শুরু করতে আগ্রহী ছিলেন।",
        "synonyms": [
            "enthusiastic",
            "keen",
            "excited"
        ],
        "antonyms": [
            "reluctant",
            "unwilling",
            "indifferent"
        ]
    },
    {
        "id": 102,
        "level_no": 1,
        "word": "Sincere",
        "part_of_speech": "Adjective",
        "pronunciation": "সিনসিয়ার",
        "meaning": "সৎ / আন্তরিক",
        "sentence": "He gave a sincere apology for being late.",
        "sentence_bn": "দেরি করার জন্য তিনি আন্তরিক ক্ষমা প্রার্থনা করেন।",
        "synonyms": [
            "honest",
            "genuine",
            "truthful"
        ],
        "antonyms": [
            "dishonest",
            "insincere",
            "hypocritical"
        ]
    },
    {
        "id": 103,
        "level_no": 1,
        "word": "Apple",
        "part_of_speech": "Noun",
        "pronunciation": "অ্যাপল",
        "meaning": "আপেল (একটি পুষ্টিকর ফল)",
        "sentence": "An apple a day keeps the doctor away.",
        "sentence_bn": "প্রতিদিন একটি আপেল রোগবালাই থেকে দূরে রাখে।",
        "synonyms": [
            "fruit",
            "pome"
        ],
        "antonyms": []
    },
    {
        "id": 104,
        "level_no": 1,
        "word": "Bright",
        "part_of_speech": "Adjective",
        "pronunciation": "ব্রাইট",
        "meaning": "উজ্জ্বল / বুদ্ধিমান",
        "sentence": "The sun was bright and the sky was clear.",
        "sentence_bn": "সূর্যটি ছিল উজ্জ্বল এবং আকাশ ছিল পরিষ্কার।",
        "synonyms": [
            "shining",
            "clever",
            "luminous"
        ],
        "antonyms": [
            "dark",
            "dim",
            "dull"
        ]
    },
    {
        "id": 105,
        "level_no": 1,
        "word": "Courage",
        "part_of_speech": "Noun",
        "pronunciation": "কারেজ",
        "meaning": "সাহস / নির্ভীকতা",
        "sentence": "It takes courage to speak in a foreign language.",
        "sentence_bn": "একটি বিদেশি ভাষায় কথা বলতে সাহসের প্রয়োজন হয়।",
        "synonyms": [
            "bravery",
            "valor",
            "boldness"
        ],
        "antonyms": [
            "cowardice",
            "fear",
            "timidity"
        ]
    },
    {
        "id": 106,
        "level_no": 1,
        "word": "Dream",
        "part_of_speech": "Noun",
        "pronunciation": "ড্রিম",
        "meaning": "স্বপ্ন / আশা",
        "sentence": "Never give up on your biggest dream.",
        "sentence_bn": "আপনার জীবনের বড় স্বপ্ন কখনই ছেড়ে দেবেন না।",
        "synonyms": [
            "aspiration",
            "vision",
            "goal"
        ],
        "antonyms": [
            "nightmare",
            "reality"
        ]
    },
    {
        "id": 107,
        "level_no": 1,
        "word": "Energy",
        "part_of_speech": "Noun",
        "pronunciation": "এনার্জি",
        "meaning": "শক্তি / উদ্যম",
        "sentence": "Children have an abundance of natural energy.",
        "sentence_bn": "শিশুদের মধ্যে প্রচুর প্রাকৃতিক উদ্যম থাকে।",
        "synonyms": [
            "vigor",
            "vitality",
            "power"
        ],
        "antonyms": [
            "lethargy",
            "fatigue",
            "exhaustion"
        ]
    },
    {
        "id": 108,
        "level_no": 1,
        "word": "Faith",
        "part_of_speech": "Noun",
        "pronunciation": "ফেইথ",
        "meaning": "বিশ্বাস / আস্থা",
        "sentence": "Have faith in your ability to succeed.",
        "sentence_bn": "সফল হওয়ার জন্য নিজের সামর্থ্যের ওপর বিশ্বাস রাখুন।",
        "synonyms": [
            "belief",
            "trust",
            "confidence"
        ],
        "antonyms": [
            "doubt",
            "distrust",
            "skepticism"
        ]
    },
    {
        "id": 109,
        "level_no": 1,
        "word": "Gentle",
        "part_of_speech": "Adjective",
        "pronunciation": "জেন্টল",
        "meaning": "ভদ্র / শান্ত / কোমল",
        "sentence": "Be gentle when handling delicate objects.",
        "sentence_bn": "নাজুক বস্তু নাড়াচাড়া করার সময় কোমল হোন।",
        "synonyms": [
            "mild",
            "tender",
            "calm"
        ],
        "antonyms": [
            "rough",
            "harsh",
            "violent"
        ]
    },
    {
        "id": 110,
        "level_no": 1,
        "word": "Happy",
        "part_of_speech": "Adjective",
        "pronunciation": "হ্যাপি",
        "meaning": "খুশি / আনন্দিত",
        "sentence": "We were very happy to meet our old friends.",
        "sentence_bn": "পুরনো বন্ধুদের সাথে দেখা করতে পেরে আমরা খুব খুশি হয়েছিলাম।",
        "synonyms": [
            "cheerful",
            "joyful",
            "glad"
        ],
        "antonyms": [
            "sad",
            "unhappy",
            "depressed"
        ]
    },
    {
        "id": 111,
        "level_no": 1,
        "word": "Journey",
        "part_of_speech": "Noun",
        "pronunciation": "জার্নি",
        "meaning": "যাত্রা / ভ্রমণ",
        "sentence": "Learning English is a rewarding journey.",
        "sentence_bn": "ইংরেজি শেখা একটি অত্যন্ত ফলপ্রসূ যাত্রা।",
        "synonyms": [
            "trip",
            "voyage",
            "travel"
        ],
        "antonyms": [
            "destination",
            "arrival"
        ]
    },
    {
        "id": 112,
        "level_no": 1,
        "word": "Kind",
        "part_of_speech": "Adjective",
        "pronunciation": "কাইন্ড",
        "meaning": "দয়ালু / স্নেহশীল",
        "sentence": "Always be kind to everyone you meet.",
        "sentence_bn": "আপনার সাথে দেখা হওয়া সবার প্রতি সর্বদা সদয় হোন।",
        "synonyms": [
            "compassionate",
            "caring",
            "friendly"
        ],
        "antonyms": [
            "cruel",
            "mean",
            "unkind"
        ]
    },
    {
        "id": 113,
        "level_no": 1,
        "word": "Listen",
        "part_of_speech": "Verb",
        "pronunciation": "লিসেন",
        "meaning": "মনোযোগ দিয়ে শোনা",
        "sentence": "Listen carefully to the native speaker's pronunciation.",
        "sentence_bn": "নেটিভ বক্তার উচ্চারণ মনোযোগ দিয়ে শুনুন।",
        "synonyms": [
            "hear",
            "pay attention",
            "attend"
        ],
        "antonyms": [
            "ignore",
            "disregard"
        ]
    },
    {
        "id": 114,
        "level_no": 1,
        "word": "Morning",
        "part_of_speech": "Noun",
        "pronunciation": "মর্নিং",
        "meaning": "সকাল / প্রভাত",
        "sentence": "A fresh morning walk boosts mental health.",
        "sentence_bn": "সকালের সতেজ হাঁটা মানসিক স্বাস্থ্যের উন্নতি ঘটায়।",
        "synonyms": [
            "dawn",
            "daybreak",
            "sunrise"
        ],
        "antonyms": [
            "evening",
            "night",
            "dusk"
        ]
    },
    {
        "id": 115,
        "level_no": 1,
        "word": "Notice",
        "part_of_speech": "Verb",
        "pronunciation": "নোটিস",
        "meaning": "লক্ষ করা / খেয়াল করা",
        "sentence": "Did you notice the changes in the new design?",
        "sentence_bn": "আপনি কি নতুন ডিজাইনের পরিবর্তনগুলো লক্ষ্য করেছেন?",
        "synonyms": [
            "observe",
            "perceive",
            "spot"
        ],
        "antonyms": [
            "overlook",
            "miss",
            "ignore"
        ]
    },
    {
        "id": 116,
        "level_no": 1,
        "word": "Peace",
        "part_of_speech": "Noun",
        "pronunciation": "পিস",
        "meaning": "শান্তি / প্রশান্তি",
        "sentence": "She found inner peace through daily meditation.",
        "sentence_bn": "তিনি প্রতিদিনের ধ্যানের মাধ্যমে মানসিক শান্তি খুঁজে পেয়েছিলেন।",
        "synonyms": [
            "serenity",
            "tranquility",
            "calm"
        ],
        "antonyms": [
            "war",
            "conflict",
            "turmoil"
        ]
    },
    {
        "id": 117,
        "level_no": 1,
        "word": "Quick",
        "part_of_speech": "Adjective",
        "pronunciation": "কুইক",
        "meaning": "দ্রুত / চটপটে",
        "sentence": "She gave a quick response to the question.",
        "sentence_bn": "তিনি প্রশ্নটির একটি দ্রুত উত্তর দিয়েছিলেন।",
        "synonyms": [
            "fast",
            "rapid",
            "swift"
        ],
        "antonyms": [
            "slow",
            "sluggish",
            "delayed"
        ]
    },
    {
        "id": 118,
        "level_no": 1,
        "word": "Simple",
        "part_of_speech": "Adjective",
        "pronunciation": "সিম্পল",
        "meaning": "সহজ / সাধারণ",
        "sentence": "Keep your sentences simple and clear.",
        "sentence_bn": "আপনার বাক্যগুলো সহজ ও পরিষ্কার রাখুন।",
        "synonyms": [
            "easy",
            "plain",
            "straightforward"
        ],
        "antonyms": [
            "complex",
            "complicated",
            "difficult"
        ]
    },
    {
        "id": 119,
        "level_no": 1,
        "word": "Smile",
        "part_of_speech": "Noun",
        "pronunciation": "স্মাইল",
        "meaning": "হাসি / মুচকি হাসি",
        "sentence": "A warm smile makes everyone feel welcome.",
        "sentence_bn": "একটি উষ্ণ হাসি সবাইকে স্বাচ্ছন্দ্য বোধ করায়।",
        "synonyms": [
            "grin",
            "beam"
        ],
        "antonyms": [
            "frown",
            "scowl"
        ]
    },
    {
        "id": 120,
        "level_no": 1,
        "word": "Truth",
        "part_of_speech": "Noun",
        "pronunciation": "ট্রুথ",
        "meaning": "সত্য / বাস্তবতা",
        "sentence": "Always speak the truth, no matter what happens.",
        "sentence_bn": "যা-ই ঘটুক না কেন, সর্বদা সত্য বলুন।",
        "synonyms": [
            "fact",
            "reality",
            "veracity"
        ],
        "antonyms": [
            "lie",
            "falsehood",
            "deceit"
        ]
    },
    {
        "id": 201,
        "level_no": 2,
        "word": "Achieve",
        "part_of_speech": "Verb",
        "pronunciation": "অ্যাচিভ",
        "meaning": "অর্জন করা / সফল হওয়া",
        "sentence": "Work hard consistently to achieve your career goals.",
        "sentence_bn": "আপনার কর্মজীবনের লক্ষ্য অর্জনের জন্য নিয়মিত কঠোর পরিশ্রম করুন।",
        "synonyms": [
            "accomplish",
            "attain",
            "reach"
        ],
        "antonyms": [
            "fail",
            "miss",
            "lose"
        ]
    },
    {
        "id": 202,
        "level_no": 2,
        "word": "Balance",
        "part_of_speech": "Noun",
        "pronunciation": "ব্যালান্স",
        "meaning": "ভারসাম্য / সমতা",
        "sentence": "Maintaining a good balance between work and life is vital.",
        "sentence_bn": "কাজ ও ব্যক্তিগত জীবনের মধ্যে ভালো ভারসাম্য বজায় রাখা অত্যন্ত জরুরি।",
        "synonyms": [
            "equilibrium",
            "harmony",
            "stability"
        ],
        "antonyms": [
            "imbalance",
            "instability"
        ]
    },
    {
        "id": 203,
        "level_no": 2,
        "word": "Create",
        "part_of_speech": "Verb",
        "pronunciation": "ক্রিয়েট",
        "meaning": "তৈরি করা / সৃষ্টি করা",
        "sentence": "Artists create stunning paintings to express feelings.",
        "sentence_bn": "শিল্পীরা অনুভূতি প্রকাশের জন্য অসাধারণ চিত্রকর্ম তৈরি করেন।",
        "synonyms": [
            "produce",
            "generate",
            "build"
        ],
        "antonyms": [
            "destroy",
            "ruin",
            "demolish"
        ]
    },
    {
        "id": 204,
        "level_no": 2,
        "word": "Discover",
        "part_of_speech": "Verb",
        "pronunciation": "ডিসকাভার",
        "meaning": "আবিষ্কার করা / খুঁজে পাওয়া",
        "sentence": "Read books to discover new concepts and words.",
        "sentence_bn": "নতুন ধারণা ও শব্দ আবিষ্কার করতে বই পড়ুন।",
        "synonyms": [
            "find",
            "uncover",
            "reveal"
        ],
        "antonyms": [
            "hide",
            "conceal",
            "overlook"
        ]
    },
    {
        "id": 205,
        "level_no": 2,
        "word": "Explore",
        "part_of_speech": "Verb",
        "pronunciation": "এক্সপ্লোর",
        "meaning": "অন্বেষণ করা / ঘুরে দেখা",
        "sentence": "Let's explore different methods of learning vocabulary.",
        "sentence_bn": "আসুন শব্দভাণ্ডার শেখার বিভিন্ন পদ্ধতি অন্বেষণ করি।",
        "synonyms": [
            "investigate",
            "examine",
            "survey"
        ],
        "antonyms": [
            "ignore",
            "neglect"
        ]
    },
    {
        "id": 206,
        "level_no": 2,
        "word": "Focus",
        "part_of_speech": "Verb",
        "pronunciation": "ফোকাস",
        "meaning": "মনোযোগ দেওয়া / কেন্দ্রবিন্দু",
        "sentence": "Focus on your daily tasks without getting distracted.",
        "sentence_bn": "বিচ্যুত না হয়ে আপনার দৈনন্দিন কাজে মনোযোগ দিন।",
        "synonyms": [
            "concentrate",
            "aim",
            "center"
        ],
        "antonyms": [
            "distract",
            "scatter"
        ]
    },
    {
        "id": 207,
        "level_no": 2,
        "word": "Grow",
        "part_of_speech": "Verb",
        "pronunciation": "গ্রো",
        "meaning": "বৃদ্ধি পাওয়া / উন্নতি করা",
        "sentence": "Your vocabulary will grow with daily reading practice.",
        "sentence_bn": "প্রতিদিন পড়ার অভ্যাসের সাথে আপনার শব্দভাণ্ডার বৃদ্ধি পাবে।",
        "synonyms": [
            "expand",
            "develop",
            "flourish"
        ],
        "antonyms": [
            "shrink",
            "decline",
            "wither"
        ]
    },
    {
        "id": 208,
        "level_no": 2,
        "word": "Helpful",
        "part_of_speech": "Adjective",
        "pronunciation": "হেল্পফুল",
        "meaning": "সহায়ক / উপকারী",
        "sentence": "Her feedback was extremely helpful for my presentation.",
        "sentence_bn": "আমার প্রেজেন্টেশনের জন্য তার মতামতটি অত্যন্ত সহায়ক ছিল।",
        "synonyms": [
            "useful",
            "beneficial",
            "supportive"
        ],
        "antonyms": [
            "unhelpful",
            "useless",
            "harmful"
        ]
    },
    {
        "id": 209,
        "level_no": 2,
        "word": "Inspire",
        "part_of_speech": "Verb",
        "pronunciation": "ইন্সপায়ার",
        "meaning": "অনুপ্রাণিত করা / উৎসাহ দেওয়া",
        "sentence": "Great teachers inspire students to achieve their potential.",
        "sentence_bn": "মহান শিক্ষকরা শিক্ষার্থীদের তাদের সম্ভাবনা অর্জনে অনুপ্রাণিত করেন।",
        "synonyms": [
            "motivate",
            "encourage",
            "stimulate"
        ],
        "antonyms": [
            "discourage",
            "dissuade",
            "demotivate"
        ]
    },
    {
        "id": 210,
        "level_no": 2,
        "word": "Learn",
        "part_of_speech": "Verb",
        "pronunciation": "লার্ন",
        "meaning": "শেখা / জ্ঞান অর্জন করা",
        "sentence": "We learn something new each time we practice.",
        "sentence_bn": "প্রতিবার অনুশীলনের সময় আমরা নতুন কিছু শিখি।",
        "synonyms": [
            "master",
            "acquire",
            "grasp"
        ],
        "antonyms": [
            "forget",
            "unlearn",
            "ignore"
        ]
    },
    {
        "id": 211,
        "level_no": 2,
        "word": "Improve",
        "part_of_speech": "Verb",
        "pronunciation": "ইমপ্রুভ",
        "meaning": "উন্নতি করা / শোধরানো",
        "sentence": "Regular revision will improve your speaking fluency.",
        "sentence_bn": "নিয়মিত পুনরাবৃত্তি আপনার কথা বলার সাবলীলতা উন্নত করবে।",
        "synonyms": [
            "enhance",
            "refine",
            "upgrade"
        ],
        "antonyms": [
            "worsen",
            "deteriorate",
            "damage"
        ]
    },
    {
        "id": 212,
        "level_no": 2,
        "word": "Practice",
        "part_of_speech": "Noun",
        "pronunciation": "প্র্যাকটিস",
        "meaning": "অনুশীলন / চর্চা",
        "sentence": "Practice makes a person confident and proficient.",
        "sentence_bn": "অনুশীলন মানুষকে আত্মবিশ্বাসী ও দক্ষ করে তোলে।",
        "synonyms": [
            "drill",
            "exercise",
            "training"
        ],
        "antonyms": [
            "idleness",
            "neglect"
        ]
    },
    {
        "id": 213,
        "level_no": 2,
        "word": "Protect",
        "part_of_speech": "Verb",
        "pronunciation": "প্রোটেক্ট",
        "meaning": "রক্ষা করা / সুরক্ষা দেওয়া",
        "sentence": "We must protect natural forests and wildlife.",
        "sentence_bn": "আমাদের অবশ্যই প্রাকৃতিক বন ও বন্যপ্রাণী রক্ষা করতে হবে।",
        "synonyms": [
            "guard",
            "defend",
            "shield"
        ],
        "antonyms": [
            "attack",
            "endanger",
            "expose"
        ]
    },
    {
        "id": 214,
        "level_no": 2,
        "word": "Resolve",
        "part_of_speech": "Verb",
        "pronunciation": "রিসল্ভ",
        "meaning": "সমাধান করা / সংকল্প করা",
        "sentence": "They met together to resolve their differences peacefully.",
        "sentence_bn": "তারা তাদের মতভেদ শান্তিপূর্ণভাবে সমাধান করতে একত্রিত হন।",
        "synonyms": [
            "solve",
            "settle",
            "determine"
        ],
        "antonyms": [
            "complicate",
            "worsen",
            "hesitate"
        ]
    },
    {
        "id": 215,
        "level_no": 2,
        "word": "Share",
        "part_of_speech": "Verb",
        "pronunciation": "শেয়ার",
        "meaning": "ভাগাভাগি করা / ছড়িয়ে দেওয়া",
        "sentence": "Share your knowledge generously with your peers.",
        "sentence_bn": "আপনার জ্ঞান সহপাঠীদের সাথে আন্তরিকভাবে ভাগ করুন।",
        "synonyms": [
            "distribute",
            "impart",
            "divide"
        ],
        "antonyms": [
            "withhold",
            "hoard",
            "keep"
        ]
    },
    {
        "id": 216,
        "level_no": 2,
        "word": "Support",
        "part_of_speech": "Verb",
        "pronunciation": "সাপোর্ট",
        "meaning": "সমর্থন করা / সাহায্য করা",
        "sentence": "True friends support each other in difficult moments.",
        "sentence_bn": "প্রকৃত বন্ধুরা কঠিন সময়ে একে অপরকে সমর্থন করে।",
        "synonyms": [
            "assist",
            "back",
            "uphold"
        ],
        "antonyms": [
            "oppose",
            "undermine",
            "hinder"
        ]
    },
    {
        "id": 217,
        "level_no": 2,
        "word": "Understand",
        "part_of_speech": "Verb",
        "pronunciation": "আন্ডারস্ট্যান্ড",
        "meaning": "বোঝা / অনুধাবন করা",
        "sentence": "Take time to understand the underlying grammar rules.",
        "sentence_bn": "মূল ব্যাকরণ নিয়মগুলো বোঝার জন্য সময় নিন।",
        "synonyms": [
            "comprehend",
            "grasp",
            "fathom"
        ],
        "antonyms": [
            "misunderstand",
            "confuse"
        ]
    },
    {
        "id": 218,
        "level_no": 2,
        "word": "Value",
        "part_of_speech": "Noun",
        "pronunciation": "ভ্যালু",
        "meaning": "মূল্য / গুরুত্ব",
        "sentence": "Respect and honesty are principles of great value.",
        "sentence_bn": "শ্রদ্ধা এবং সততা হলো অত্যন্ত মূল্যবান নীতি।",
        "synonyms": [
            "worth",
            "importance",
            "merit"
        ],
        "antonyms": [
            "worthlessness",
            "insignificance"
        ]
    },
    {
        "id": 219,
        "level_no": 2,
        "word": "Victory",
        "part_of_speech": "Noun",
        "pronunciation": "ভিক্টরি",
        "meaning": "বিজয় / সাফল্য",
        "sentence": "Their teamwork led to a decisive victory in the match.",
        "sentence_bn": "তাদের দলগত কাজ ম্যাচে একটি চূড়ান্ত বিজয় বয়ে এনেছিল।",
        "synonyms": [
            "triumph",
            "win",
            "success"
        ],
        "antonyms": [
            "defeat",
            "loss",
            "failure"
        ]
    },
    {
        "id": 220,
        "level_no": 2,
        "word": "Wisdom",
        "part_of_speech": "Noun",
        "pronunciation": "উইজডম",
        "meaning": "প্রজ্ঞা / গভীর জ্ঞান",
        "sentence": "True wisdom comes from experience and reflection.",
        "sentence_bn": "প্রকৃত প্রজ্ঞা আসে অভিজ্ঞতা ও আত্মবিশ্লেষণ থেকে।",
        "synonyms": [
            "insight",
            "sagacity",
            "knowledge"
        ],
        "antonyms": [
            "folly",
            "foolishness",
            "ignorance"
        ]
    },
    {
        "id": 301,
        "level_no": 3,
        "word": "Honesty",
        "part_of_speech": "Noun",
        "pronunciation": "অনেস্টি",
        "meaning": "সততা / সাধুতা",
        "sentence": "Honesty is regarded as the best foundation of character.",
        "sentence_bn": "সততাকে চরিত্রের শ্রেষ্ঠ ভিত্তি হিসেবে বিবেচনা করা হয়।",
        "synonyms": [
            "integrity",
            "truthfulness",
            "probity"
        ],
        "antonyms": [
            "dishonesty",
            "deceit",
            "fraud"
        ]
    },
    {
        "id": 302,
        "level_no": 3,
        "word": "Bravery",
        "part_of_speech": "Noun",
        "pronunciation": "ব্রেভারি",
        "meaning": "বীরত্ব / সাহসিকতা",
        "sentence": "The firefighter was awarded a medal for extraordinary bravery.",
        "sentence_bn": "অসাধারণ সাহসিকতার জন্য দমকলকর্মীকে পদক দেওয়া হয়েছিল।",
        "synonyms": [
            "courage",
            "heroism",
            "fearlessness"
        ],
        "antonyms": [
            "cowardice",
            "fear",
            "timidity"
        ]
    },
    {
        "id": 303,
        "level_no": 3,
        "word": "Compassion",
        "part_of_speech": "Noun",
        "pronunciation": "কম্প্যাশন",
        "meaning": "সহানুভূতি / করুণা",
        "sentence": "Showing compassion toward those in distress brings peace.",
        "sentence_bn": "বিপদগ্রস্ত মানুষের প্রতি সহানুভূতি দেখালে মনে শান্তি আসে।",
        "synonyms": [
            "empathy",
            "sympathy",
            "kindness"
        ],
        "antonyms": [
            "cruelty",
            "indifference",
            "callousness"
        ]
    },
    {
        "id": 304,
        "level_no": 3,
        "word": "Diligence",
        "part_of_speech": "Noun",
        "pronunciation": "ডিলিজেন্স",
        "meaning": "অধ্যবসায় / পরিশ্রম",
        "sentence": "Her diligence in studying earned her the top rank.",
        "sentence_bn": "পড়াশোনায় অধ্যবসায়ের কারণে তিনি প্রথম স্থান অর্জন করেন।",
        "synonyms": [
            "persistence",
            "hard work",
            "assiduity"
        ],
        "antonyms": [
            "laziness",
            "sloth",
            "negligence"
        ]
    },
    {
        "id": 305,
        "level_no": 3,
        "word": "Empathy",
        "part_of_speech": "Noun",
        "pronunciation": "এমপ্যাথি",
        "meaning": "অন্যের অনুভূতি বোঝার ক্ষমতা",
        "sentence": "Empathy helps us connect deeply with fellow human beings.",
        "sentence_bn": "সহমর্মিতা আমাদের অন্য মানুষের সাথে গভীরভাবে মিশতে সাহায্য করে।",
        "synonyms": [
            "understanding",
            "compassion",
            "sensitivity"
        ],
        "antonyms": [
            "apathy",
            "coldness",
            "insensitivity"
        ]
    },
    {
        "id": 306,
        "level_no": 3,
        "word": "Generosity",
        "part_of_speech": "Noun",
        "pronunciation": "জেনারেসিটি",
        "meaning": "উদারতা / দানশীলতা",
        "sentence": "His generosity helped fund education for fifty orphans.",
        "sentence_bn": "তার উদারতা পঞ্চাশজন এতিম শিশুর শিক্ষার খরচ চালাতে সাহায্য করেছিল।",
        "synonyms": [
            "benevolence",
            "bounty",
            "magnanimity"
        ],
        "antonyms": [
            "meanness",
            "greed",
            "selfishness"
        ]
    },
    {
        "id": 307,
        "level_no": 3,
        "word": "Humility",
        "part_of_speech": "Noun",
        "pronunciation": "হিউমিলিটি",
        "meaning": "বিনয় / নম্রতা",
        "sentence": "Despite great fame, he spoke with genuine humility.",
        "sentence_bn": "বিশাল খ্যাতি সত্ত্বেও তিনি খাঁটি বিনয়ের সাথে কথা বলতেন।",
        "synonyms": [
            "modesty",
            "meekness",
            "unpretentiousness"
        ],
        "antonyms": [
            "pride",
            "arrogance",
            "vanity"
        ]
    },
    {
        "id": 308,
        "level_no": 3,
        "word": "Integrity",
        "part_of_speech": "Noun",
        "pronunciation": "ইন্টেগ্রিটি",
        "meaning": "নীতিপরায়ণতা / সততা",
        "sentence": "A leader with integrity always keeps their promises.",
        "sentence_bn": "নীতিবান নেতা সর্বদা তার প্রতিশ্রুতি রক্ষা করেন।",
        "synonyms": [
            "uprightness",
            "probity",
            "honor"
        ],
        "antonyms": [
            "corruption",
            "dishonesty",
            "immorality"
        ]
    },
    {
        "id": 309,
        "level_no": 3,
        "word": "Loyalty",
        "part_of_speech": "Noun",
        "pronunciation": "লয়ালটি",
        "meaning": "আনুগত্য / বিশ্বস্ততা",
        "sentence": "The dog showed unwavering loyalty to its guardian.",
        "sentence_bn": "কুকুরটি তার অভিভাবকের প্রতি অটল আনুগত্য প্রদর্শন করেছিল।",
        "synonyms": [
            "faithfulness",
            "allegiance",
            "fidelity"
        ],
        "antonyms": [
            "disloyalty",
            "treachery",
            "betrayal"
        ]
    },
    {
        "id": 310,
        "level_no": 3,
        "word": "Patience",
        "part_of_speech": "Noun",
        "pronunciation": "পেশেন্স",
        "meaning": "ধৈর্য / সহনশীলতা",
        "sentence": "Learning a new language requires patience and daily practice.",
        "sentence_bn": "নতুন ভাষা শেখার জন্য ধৈর্য এবং নিয়মিত অনুশীলনের প্রয়োজন।",
        "synonyms": [
            "endurance",
            "tolerance",
            "forbearance"
        ],
        "antonyms": [
            "impatience",
            "agitation",
            "intolerance"
        ]
    },
    {
        "id": 311,
        "level_no": 3,
        "word": "Gratitude",
        "part_of_speech": "Noun",
        "pronunciation": "গ্র্যাটিটিউড",
        "meaning": "কৃতজ্ঞতা / ধন্যবাদ বোধ",
        "sentence": "Expressing gratitude brightens someone else's day.",
        "sentence_bn": "কৃতজ্ঞতা প্রকাশ অন্যের দিনটিকে উজ্জ্বল করে তোলে।",
        "synonyms": [
            "thankfulness",
            "appreciation",
            "acknowledgment"
        ],
        "antonyms": [
            "ingratitude",
            "unthankfulness"
        ]
    },
    {
        "id": 312,
        "level_no": 3,
        "word": "Respect",
        "part_of_speech": "Noun",
        "pronunciation": "রেসপেক্ট",
        "meaning": "শ্রদ্ধা / সম্মান",
        "sentence": "Treat seniors and juniors alike with high respect.",
        "sentence_bn": "বয়োজ্যেষ্ঠ এবং কনিষ্ঠ উভয়কেই পরম শ্রদ্ধার সাথে আচরণ করুন।",
        "synonyms": [
            "reverence",
            "esteem",
            "regard"
        ],
        "antonyms": [
            "disrespect",
            "contempt",
            "scorn"
        ]
    },
    {
        "id": 313,
        "level_no": 3,
        "word": "Modesty",
        "part_of_speech": "Noun",
        "pronunciation": "মডেস্টি",
        "meaning": "শালীনতা / নম্রতা",
        "sentence": "She accepted the praise with her characteristic modesty.",
        "sentence_bn": "তিনি তার চিরাচরিত নম্রতার সাথে প্রশংসা গ্রহণ করেছিলেন।",
        "synonyms": [
            "humility",
            "reserve",
            "simplicity"
        ],
        "antonyms": [
            "boastfulness",
            "arrogance",
            "ostentation"
        ]
    },
    {
        "id": 314,
        "level_no": 3,
        "word": "Perseverance",
        "part_of_speech": "Noun",
        "pronunciation": "পার্সিভিয়ারেন্স",
        "meaning": "দৃঢ়সংকল্প / অবিচল থাকা",
        "sentence": "Success in coding is achieved through sheer perseverance.",
        "sentence_bn": "কোডিংয়ে সাফল্য আসে একনিষ্ঠ অবিচলতার মাধ্যমে।",
        "synonyms": [
            "tenacity",
            "persistence",
            "grit"
        ],
        "antonyms": [
            "giving up",
            "irresolution"
        ]
    },
    {
        "id": 315,
        "level_no": 3,
        "word": "Altruism",
        "part_of_speech": "Noun",
        "pronunciation": "আল্ট্রুইজম",
        "meaning": "পরোপকারিতা / নিঃস্বার্থপরতা",
        "sentence": "Her altruism led her to spend weekends volunteering.",
        "sentence_bn": "তার পরোপকারিতা তাকে ছুটির দিনে স্বেচ্ছাসেবী কাজে নিয়োজিত করেছিল।",
        "synonyms": [
            "selflessness",
            "charity",
            "benevolence"
        ],
        "antonyms": [
            "selfishness",
            "egotism"
        ]
    },
    {
        "id": 316,
        "level_no": 3,
        "word": "Courtesy",
        "part_of_speech": "Noun",
        "pronunciation": "কার্টেসি",
        "meaning": "ভদ্রতা / শিষ্টাচার",
        "sentence": "A small act of courtesy can resolve tense situations.",
        "sentence_bn": "সামান্য শিষ্টাচার অনেক উত্তেজনাকর পরিস্থিতি শান্ত করতে পারে।",
        "synonyms": [
            "politeness",
            "civility",
            "etiquette"
        ],
        "antonyms": [
            "rudeness",
            "discourtesy",
            "insolence"
        ]
    },
    {
        "id": 317,
        "level_no": 3,
        "word": "Honorable",
        "part_of_speech": "Adjective",
        "pronunciation": "অনারেবল",
        "meaning": "সম্মানজনক / মর্যাদাশীল",
        "sentence": "It is honorable to admit when you are mistaken.",
        "sentence_bn": "ভুল হলে তা স্বীকার করা একটি সম্মানজনক কাজ।",
        "synonyms": [
            "noble",
            "respectable",
            "praiseworthy"
        ],
        "antonyms": [
            "disgraceful",
            "shameful",
            "dishonorable"
        ]
    },
    {
        "id": 318,
        "level_no": 3,
        "word": "Devotion",
        "part_of_speech": "Noun",
        "pronunciation": "ডিভোশন",
        "meaning": "ভক্তি / একাগ্র উৎসর্গ",
        "sentence": "His lifelong devotion to science inspired young researchers.",
        "sentence_bn": "বিজ্ঞানের প্রতি তার আজীবন একাগ্রতা তরুণ গবেষকদের অনুপ্রাণিত করেছিল।",
        "synonyms": [
            "dedication",
            "commitment",
            "loyalty"
        ],
        "antonyms": [
            "apathy",
            "disloyalty",
            "unfaithfulness"
        ]
    },
    {
        "id": 319,
        "level_no": 3,
        "word": "Tolerance",
        "part_of_speech": "Noun",
        "pronunciation": "টলারেন্স",
        "meaning": "সহনশীলতা / পরমতসহিষ্ণুতা",
        "sentence": "Tolerance of diverse viewpoints is the pillar of democracy.",
        "sentence_bn": "বিভিন্ন মতামতের প্রতি পরমতসহিষ্ণুতা হলো গণতন্ত্রের মূল স্তম্ভ।",
        "synonyms": [
            "forbearance",
            "open-mindedness",
            "acceptance"
        ],
        "antonyms": [
            "intolerance",
            "bigotry",
            "prejudice"
        ]
    },
    {
        "id": 320,
        "level_no": 3,
        "word": "Resilience",
        "part_of_speech": "Noun",
        "pronunciation": "রেজিলিয়েন্স",
        "meaning": "বিপর্যয় কাটিয়ে ঘুরে দাঁড়ানোর ক্ষমতা",
        "sentence": "The villagers showed remarkable resilience after the storm.",
        "sentence_bn": "ঝড়ের পরে গ্রামবাসীরা লক্ষণীয় ঘুরে দাঁড়ানোর ক্ষমতা দেখিয়েছিল।",
        "synonyms": [
            "toughness",
            "adaptability",
            "fortitude"
        ],
        "antonyms": [
            "fragility",
            "vulnerability",
            "weakness"
        ]
    },
    {
        "id": 401,
        "level_no": 4,
        "word": "Articulate",
        "part_of_speech": "Adjective",
        "pronunciation": "আর্টিকুলেট",
        "meaning": "স্পষ্টভাষী / প্রাঞ্জল",
        "sentence": "She gave an articulate and persuasive speech at the conference.",
        "sentence_bn": "তিনি সম্মেলনে একটি প্রাঞ্জল এবং প্ররোচনামূলক বক্তব্য উপস্থাপন করেন।",
        "synonyms": [
            "eloquent",
            "fluent",
            "lucid"
        ],
        "antonyms": [
            "inarticulate",
            "unclear",
            "muffled"
        ]
    },
    {
        "id": 402,
        "level_no": 4,
        "word": "Coherent",
        "part_of_speech": "Adjective",
        "pronunciation": "কোহিরেন্ট",
        "meaning": "সুসংগত / যুক্তিযুক্ত",
        "sentence": "Present your arguments in a clear and coherent structure.",
        "sentence_bn": "আপনার যুক্তিগুলো পরিষ্কার এবং সুসংগত কাঠামোতে উপস্থাপন করুন।",
        "synonyms": [
            "logical",
            "consistent",
            "orderly"
        ],
        "antonyms": [
            "incoherent",
            "disjointed",
            "illogical"
        ]
    },
    {
        "id": 403,
        "level_no": 4,
        "word": "Eloquent",
        "part_of_speech": "Adjective",
        "pronunciation": "এলোকোয়েন্ট",
        "meaning": "বাকপটু / সুললিতভাষী",
        "sentence": "The defense attorney made an eloquent plea for justice.",
        "sentence_bn": "আইনজীবী সুবিচারের জন্য একটি সুললিত ও জোরালো বক্তব্য দেন।",
        "synonyms": [
            "fluent",
            "expressive",
            "persuasive"
        ],
        "antonyms": [
            "hesitant",
            "clumsy",
            "ineloquent"
        ]
    },
    {
        "id": 404,
        "level_no": 4,
        "word": "Lucid",
        "part_of_speech": "Adjective",
        "pronunciation": "লুসিড",
        "meaning": "সহজবোধ্য / স্পষ্ট",
        "sentence": "The textbook offers a remarkably lucid explanation of physics.",
        "sentence_bn": "পাঠ্যবইটি পদার্থবিজ্ঞানের একটি চমৎকার সহজবোধ্য ব্যাখ্যা প্রদান করে।",
        "synonyms": [
            "clear",
            "intelligible",
            "transparent"
        ],
        "antonyms": [
            "confusing",
            "obscure",
            "ambiguous"
        ]
    },
    {
        "id": 405,
        "level_no": 4,
        "word": "Precise",
        "part_of_speech": "Adjective",
        "pronunciation": "প্রিসাইস",
        "meaning": "নির্ভুল / যথাযথ",
        "sentence": "Please give precise measurements when submitting the report.",
        "sentence_bn": "প্রতিবেদন জমা দেওয়ার সময় অনুগ্রহ করে নির্ভুল পরিমাপ দিন।",
        "synonyms": [
            "accurate",
            "exact",
            "correct"
        ],
        "antonyms": [
            "imprecise",
            "vague",
            "inaccurate"
        ]
    },
    {
        "id": 406,
        "level_no": 4,
        "word": "Vivid",
        "part_of_speech": "Adjective",
        "pronunciation": "ভিভিড",
        "meaning": "প্রাণবন্ত / সুস্পষ্ট",
        "sentence": "He painted a vivid mental picture of his mountain trek.",
        "sentence_bn": "তিনি তার পর্বত অভিযানের একটি প্রাণবন্ত চিত্র তুলে ধরেন।",
        "synonyms": [
            "lively",
            "graphic",
            "striking"
        ],
        "antonyms": [
            "dull",
            "faint",
            "vague"
        ]
    },
    {
        "id": 407,
        "level_no": 4,
        "word": "Nuance",
        "part_of_speech": "Noun",
        "pronunciation": "নিউয়ান্স",
        "meaning": "সূক্ষ্ম পার্থক্য / বৈচিত্র্য",
        "sentence": "A skilled translator grasps every subtle nuance of words.",
        "sentence_bn": "একজন দক্ষ অনুবাদক শব্দের প্রতিটি সূক্ষ্ম পার্থক্য ধরতে পারেন।",
        "synonyms": [
            "subtlety",
            "shade",
            "refinement"
        ],
        "antonyms": [
            "crudeness",
            "obviousness"
        ]
    },
    {
        "id": 408,
        "level_no": 4,
        "word": "Pragmatic",
        "part_of_speech": "Adjective",
        "pronunciation": "প্র্যাগম্যাটিক",
        "meaning": "বাস্তবধর্মী / বাস্তবমুখী",
        "sentence": "We need a pragmatic approach to tackle this budget deficit.",
        "sentence_bn": "এই বাজেট ঘাটতি মোকাবেলায় আমাদের একটি বাস্তবমুখী পন্থা প্রয়োজন।",
        "synonyms": [
            "practical",
            "sensible",
            "realistic"
        ],
        "antonyms": [
            "idealistic",
            "impractical",
            "unrealistic"
        ]
    },
    {
        "id": 409,
        "level_no": 4,
        "word": "Ponder",
        "part_of_speech": "Verb",
        "pronunciation": "পন্ডার",
        "meaning": "গভীরভাবে চিন্তা করা",
        "sentence": "He sat quietly to ponder the important career decision.",
        "sentence_bn": "গুরুত্বপূর্ণ ক্যারিয়ার সিদ্ধান্ত নিয়ে তিনি নীরবে গভীরভাবে ভাবলেন।",
        "synonyms": [
            "contemplate",
            "meditate",
            "reflect"
        ],
        "antonyms": [
            "ignore",
            "dismiss"
        ]
    },
    {
        "id": 410,
        "level_no": 4,
        "word": "Inevitable",
        "part_of_speech": "Adjective",
        "pronunciation": "ইনেভিটেবল",
        "meaning": "অনিবার্য / যা এড়ানো যায় না",
        "sentence": "Change is an inevitable part of human history and life.",
        "sentence_bn": "পরিবর্তন হলো মানব ইতিহাস ও জীবনের এক অনিবার্য অংশ।",
        "synonyms": [
            "unavoidable",
            "inescapable",
            "certain"
        ],
        "antonyms": [
            "avoidable",
            "preventable",
            "uncertain"
        ]
    },
    {
        "id": 411,
        "level_no": 4,
        "word": "Subtle",
        "part_of_speech": "Adjective",
        "pronunciation": "সাট্ল",
        "meaning": "সূক্ষ্ম / মৃদু",
        "sentence": "There was a subtle difference between the two color shades.",
        "sentence_bn": "দুটি রঙের শেডের মধ্যে একটি অত্যন্ত সূক্ষ্ম পার্থক্য ছিল।",
        "synonyms": [
            "delicate",
            "fine",
            "understated"
        ],
        "antonyms": [
            "blatant",
            "harsh",
            "obvious"
        ]
    },
    {
        "id": 412,
        "level_no": 4,
        "word": "Versatile",
        "part_of_speech": "Adjective",
        "pronunciation": "ভার্সেটাইল",
        "meaning": "বহুমুখী প্রতিভাধর / সর্বতোমুখী",
        "sentence": "She is a versatile actress capable of drama and comedy.",
        "sentence_bn": "তিনি নাটক ও কমেডি উভয় ক্ষেত্রে পারদর্শী একজন বহুমুখী অভিনেত্রী।",
        "synonyms": [
            "adaptable",
            "flexible",
            "all-around"
        ],
        "antonyms": [
            "inflexible",
            "limited",
            "rigid"
        ]
    },
    {
        "id": 413,
        "level_no": 4,
        "word": "Ambiguous",
        "part_of_speech": "Adjective",
        "pronunciation": "অ্যাম্বিগুয়াস",
        "meaning": "দ্ব্যর্থবোধক / অস্পষ্ট",
        "sentence": "The wording in the agreement was ambiguous and confusing.",
        "sentence_bn": "চুক্তির শব্দচয়ন ছিল দ্ব্যর্থবোধক ও বিভ্রান্তিকর।",
        "synonyms": [
            "unclear",
            "equivocal",
            "vague"
        ],
        "antonyms": [
            "clear",
            "explicit",
            "unambiguous"
        ]
    },
    {
        "id": 414,
        "level_no": 4,
        "word": "Pivotal",
        "part_of_speech": "Adjective",
        "pronunciation": "পিভোটাল",
        "meaning": "অত্যন্ত গুরুত্বপূর্ণ / কেন্দ্রীয়",
        "sentence": "His discovery played a pivotal role in modern medicine.",
        "sentence_bn": "তার আবিষ্কার আধুনিক চিকিৎসাবিজ্ঞানে এক অত্যন্ত গুরুত্বপূর্ণ ভূমিকা রেখেছিল।",
        "synonyms": [
            "crucial",
            "vital",
            "central"
        ],
        "antonyms": [
            "minor",
            "trivial",
            "insignificant"
        ]
    },
    {
        "id": 415,
        "level_no": 4,
        "word": "Comprehensive",
        "part_of_speech": "Adjective",
        "pronunciation": "কম্প্রিহেন্সিভ",
        "meaning": "ব্যাপক / পূর্ণাঙ্গ",
        "sentence": "The course provides a comprehensive guide to web development.",
        "sentence_bn": "কোর্সটি ওয়েব ডেভেলপমেন্টের একটি পূর্ণাঙ্গ নির্দেশিকা প্রদান করে।",
        "synonyms": [
            "exhaustive",
            "inclusive",
            "thorough"
        ],
        "antonyms": [
            "limited",
            "partial",
            "incomplete"
        ]
    },
    {
        "id": 416,
        "level_no": 4,
        "word": "Concur",
        "part_of_speech": "Verb",
        "pronunciation": "কনকার",
        "meaning": "একমত হওয়া / সম্মতি প্রকাশ করা",
        "sentence": "All board members concur with the proposed educational strategy.",
        "sentence_bn": "বোর্ডের সকল সদস্য প্রস্তাবিত শিক্ষা কৌশলের সাথে একমত পোষণ করেন।",
        "synonyms": [
            "agree",
            "coincide",
            "assent"
        ],
        "antonyms": [
            "disagree",
            "dissent",
            "differ"
        ]
    },
    {
        "id": 417,
        "level_no": 4,
        "word": "Facilitate",
        "part_of_speech": "Verb",
        "pronunciation": "ফ্যাসিলিটেট",
        "meaning": "সহজতর করা / সুবিধা দেওয়া",
        "sentence": "Modern software tools facilitate seamless global collaboration.",
        "sentence_bn": "আধুনিক সফটওয়্যার টুলস বিশ্বব্যাপী নিরবচ্ছিন্ন সহযোগিতাকে সহজতর করে।",
        "synonyms": [
            "ease",
            "expedite",
            "assist"
        ],
        "antonyms": [
            "hinder",
            "impede",
            "obstruct"
        ]
    },
    {
        "id": 418,
        "level_no": 4,
        "word": "Plausible",
        "part_of_speech": "Adjective",
        "pronunciation": "প্লসিবল",
        "meaning": "বিশ্বাসযোগ্য / সম্ভাব্য",
        "sentence": "He presented a plausible explanation for his absence.",
        "sentence_bn": "তিনি তার অনুপস্থিতির একটি বিশ্বাসযোগ্য ব্যাখ্যা উপস্থাপন করেছিলেন।",
        "synonyms": [
            "credible",
            "believable",
            "reasonable"
        ],
        "antonyms": [
            "implausible",
            "unbelievable",
            "doubtful"
        ]
    },
    {
        "id": 419,
        "level_no": 4,
        "word": "Scrutiny",
        "part_of_speech": "Noun",
        "pronunciation": "স্ক্রুটিনি",
        "meaning": "সূক্ষ্ম ও নিবিড় পরীক্ষা",
        "sentence": "The financial documents came under close government scrutiny.",
        "sentence_bn": "আর্থিক নথিপত্রগুলো সরকারের নিবিড় পরীক্ষার আওতায় এসেছিল।",
        "synonyms": [
            "examination",
            "inspection",
            "audit"
        ],
        "antonyms": [
            "glance",
            "neglect"
        ]
    },
    {
        "id": 420,
        "level_no": 4,
        "word": "Synthesize",
        "part_of_speech": "Verb",
        "pronunciation": "সিন্থেসাইজ",
        "meaning": "সমন্বয় করা / একত্রিত করে নতুন রূপ দেওয়া",
        "sentence": "Students must synthesize information from multiple research papers.",
        "sentence_bn": "শিক্ষার্থীদের একাধিক গবেষণাপত্রের তথ্যের সমন্বয় করতে হবে।",
        "synonyms": [
            "combine",
            "integrate",
            "merge"
        ],
        "antonyms": [
            "separate",
            "dissect",
            "divide"
        ]
    },
    {
        "id": 501,
        "level_no": 5,
        "word": "Cogent",
        "part_of_speech": "Adjective",
        "pronunciation": "কোজেন্ট",
        "meaning": "অকাট্য / জোরালো যুক্তিপূর্ণ",
        "sentence": "She offered a cogent argument that won over the committee.",
        "sentence_bn": "তিনি এমন এক অকাট্য যুক্তি তুলে ধরেন যা কমিটির সবাইকে সম্মত করে।",
        "synonyms": [
            "compelling",
            "convincing",
            "forceful"
        ],
        "antonyms": [
            "weak",
            "unconvincing",
            "ineffective"
        ]
    },
    {
        "id": 502,
        "level_no": 5,
        "word": "Disparate",
        "part_of_speech": "Adjective",
        "pronunciation": "ডিসপ্যারেট",
        "meaning": "ভিন্নধর্মী / সম্পূর্ণ অসদৃশ",
        "sentence": "The team brought together experts from disparate fields.",
        "sentence_bn": "দলটি বিভিন্ন ভিন্নধর্মী বিষয়ের বিশেষজ্ঞদের একত্রিত করেছিল।",
        "synonyms": [
            "divergent",
            "contrasting",
            "distinct"
        ],
        "antonyms": [
            "similar",
            "identical",
            "uniform"
        ]
    },
    {
        "id": 503,
        "level_no": 5,
        "word": "Equivocal",
        "part_of_speech": "Adjective",
        "pronunciation": "ইকুইভোকাল",
        "meaning": "সন্দেহজনক / দ্ব্যর্থক",
        "sentence": "The spokesperson gave an equivocal response to journalists.",
        "sentence_bn": "মুখপাত্র সাংবাদিকদের এক দ্ব্যর্থক ও অস্পষ্ট উত্তর দিয়েছিলেন।",
        "synonyms": [
            "ambiguous",
            "evasive",
            "cryptic"
        ],
        "antonyms": [
            "unequivocal",
            "clear",
            "direct"
        ]
    },
    {
        "id": 504,
        "level_no": 5,
        "word": "Incisive",
        "part_of_speech": "Adjective",
        "pronunciation": "ইনসাইসিভ",
        "meaning": "তীক্ষ্ণ / ভেদী বিশ্লেষণক্ষম",
        "sentence": "Her incisive analysis revealed the exact root cause of the bug.",
        "sentence_bn": "তার তীক্ষ্ণ বিশ্লেষণ ত্রুটির মূল কারণ সঠিকভাবে উন্মোচন করেছিল।",
        "synonyms": [
            "penetrating",
            "sharp",
            "acute"
        ],
        "antonyms": [
            "vague",
            "shallow",
            "dull"
        ]
    },
    {
        "id": 505,
        "level_no": 5,
        "word": "Juxtapose",
        "part_of_speech": "Verb",
        "pronunciation": "জাক্সটাপোজ",
        "meaning": "তুলনার জন্য পাশাপাশি স্থাপন করা",
        "sentence": "The museum juxtaposes classical paintings with modern art.",
        "sentence_bn": "জাদুঘরটি ধ্রুপদী চিত্রকর্মের পাশাপাশি আধুনিক শিল্পকর্মকে উপস্থাপন করেছে।",
        "synonyms": [
            "compare",
            "contrast",
            "collocate"
        ],
        "antonyms": [
            "separate",
            "isolate"
        ]
    },
    {
        "id": 506,
        "level_no": 5,
        "word": "Paradigm",
        "part_of_speech": "Noun",
        "pronunciation": "প্যারাডাইম",
        "meaning": "আদর্শ কাঠামো / দৃষ্টান্ত",
        "sentence": "Artificial Intelligence has ushered in a new paradigm in tech.",
        "sentence_bn": "কৃত্রিম বুদ্ধিমত্তা প্রযুক্তিতে এক নতুন দৃষ্টিকোণ ও কাঠামোর সূচনা করেছে।",
        "synonyms": [
            "model",
            "archetype",
            "framework"
        ],
        "antonyms": [
            "anomaly",
            "exception"
        ]
    },
    {
        "id": 507,
        "level_no": 5,
        "word": "Rhetoric",
        "part_of_speech": "Noun",
        "pronunciation": "রেটরিক",
        "meaning": "অলংকারপূর্ণ বক্তব্য / বক্তৃতাশিল্প",
        "sentence": "Voters look beyond flashy rhetoric to judge actual policies.",
        "sentence_bn": "ভোটাররা চটকদার বক্তব্যের বাইরে গিয়ে আসল নীতি পর্যালোচনা করেন।",
        "synonyms": [
            "oratory",
            "eloquence",
            "persuasion"
        ],
        "antonyms": [
            "inarticulateness"
        ]
    },
    {
        "id": 508,
        "level_no": 5,
        "word": "Eloquent",
        "part_of_speech": "Adjective",
        "pronunciation": "এলোকয়েন্ট",
        "meaning": "ভাবপূর্ণ ও প্রাঞ্জল",
        "sentence": "The author provided an eloquent defense of free speech.",
        "sentence_bn": "লেখক বাকস্বাধীনতার পক্ষে এক প্রাঞ্জল ও জোরালো যুক্তি তুলে ধরেন।",
        "synonyms": [
            "expressive",
            "persuasive",
            "poetic"
        ],
        "antonyms": [
            "awkward",
            "uncommunicative"
        ]
    },
    {
        "id": 509,
        "level_no": 5,
        "word": "Taciturn",
        "part_of_speech": "Adjective",
        "pronunciation": "ট্যাসিটার্ন",
        "meaning": "অল্পভাষী / মিতভাষী",
        "sentence": "The engineer was usually taciturn but opened up in meetings.",
        "sentence_bn": "প্রকৌশলী সাধারণত অল্পভাষী হলেও মিটিংয়ে প্রাণবন্ত কথা বলতেন।",
        "synonyms": [
            "reticent",
            "quiet",
            "uncommunicative"
        ],
        "antonyms": [
            "loquacious",
            "talkative",
            "garrulous"
        ]
    },
    {
        "id": 510,
        "level_no": 5,
        "word": "Vindicate",
        "part_of_speech": "Verb",
        "pronunciation": "ভিন্ডিকেট",
        "meaning": "অভিযোগ থেকে নির্দোষ প্রমাণ করা / যথার্থতা প্রমাণ করা",
        "sentence": "New evidence was presented to vindicate the accused scientist.",
        "sentence_bn": "অভিযুক্ত বিজ্ঞানীকে নির্দোষ প্রমাণ করতে নতুন প্রমাণ উপস্থাপন করা হয়েছিল।",
        "synonyms": [
            "exonerate",
            "justify",
            "absolve"
        ],
        "antonyms": [
            "convict",
            "blame",
            "incriminate"
        ]
    },
    {
        "id": 511,
        "level_no": 5,
        "word": "Alacrity",
        "part_of_speech": "Noun",
        "pronunciation": "অ্যালাক্রিটি",
        "meaning": "উৎফুল্ল তৎপরতা / চটপটে আগ্রহ",
        "sentence": "The eager intern accepted the challenging assignment with alacrity.",
        "sentence_bn": "আগ্রহী ইন্টার্ন সানন্দে ও চটপটে তৎপরতার সাথে কঠিন কাজটি গ্রহণ করলেন।",
        "synonyms": [
            "eagerness",
            "readiness",
            "briskness"
        ],
        "antonyms": [
            "reluctance",
            "sluggishness",
            "apathy"
        ]
    },
    {
        "id": 512,
        "level_no": 5,
        "word": "Catalyst",
        "part_of_speech": "Noun",
        "pronunciation": "ক্যাটালিস্ট",
        "meaning": "অনুঘটক / পরিবর্তনের উদ্দীপক",
        "sentence": "The mobile internet was a key catalyst for digital banking.",
        "sentence_bn": "মোবাইল ইন্টারনেট ডিজিটাল ব্যাংকিংয়ের জন্য এক প্রধান অনুঘটক ছিল।",
        "synonyms": [
            "stimulus",
            "spark",
            "promoter"
        ],
        "antonyms": [
            "inhibitor",
            "deterrent"
        ]
    },
    {
        "id": 513,
        "level_no": 5,
        "word": "Disseminate",
        "part_of_speech": "Verb",
        "pronunciation": "ডিসেমিনেট",
        "meaning": "ব্যাপকভাবে ছড়িয়ে দেওয়া / প্রচার করা",
        "sentence": "Health workers aim to disseminate crucial vaccine awareness.",
        "sentence_bn": "স্বাস্থ্যকর্মীরা ভ্যাকসিনের সচেতনতা ব্যাপকভাবে ছড়িয়ে দেওয়ার লক্ষ্য রাখেন।",
        "synonyms": [
            "broadcast",
            "circulate",
            "distribute"
        ],
        "antonyms": [
            "suppress",
            "collect",
            "withhold"
        ]
    },
    {
        "id": 514,
        "level_no": 5,
        "word": "Exemplary",
        "part_of_speech": "Adjective",
        "pronunciation": "এক্সেমপ্লারি",
        "meaning": "অনুকরণীয় / দৃষ্টান্তমূলক",
        "sentence": "Her exemplary leadership steered the startup through crisis.",
        "sentence_bn": "তার অনুকরণীয় নেতৃত্ব স্টার্টআপটিকে সংকটের মধ্য দিয়ে এগিয়ে নিয়ে যায়।",
        "synonyms": [
            "ideal",
            "model",
            "commendable"
        ],
        "antonyms": [
            "deplorable",
            "unworthy",
            "poor"
        ]
    },
    {
        "id": 515,
        "level_no": 5,
        "word": "Immutable",
        "part_of_speech": "Adjective",
        "pronunciation": "ইমিউটেবল",
        "meaning": "অপরিবর্তনীয় / চিরস্থায়ী",
        "sentence": "The laws of nature remain immutable across millennia.",
        "sentence_bn": "প্রকৃতির নিয়মাবলি সহস্রাব্দ ধরে অপরিবর্তনীয় রয়ে গেছে।",
        "synonyms": [
            "unchangeable",
            "constant",
            "fixed"
        ],
        "antonyms": [
            "mutable",
            "variable",
            "changeable"
        ]
    },
    {
        "id": 516,
        "level_no": 5,
        "word": "Meticulous",
        "part_of_speech": "Adjective",
        "pronunciation": "মেটিকুলাস",
        "meaning": "অতি সতর্ক / পুঙ্খানুপুঙ্খ",
        "sentence": "The architect made meticulous measurements before construction.",
        "sentence_bn": "স্থপতি নির্মাণের পূর্বে পুঙ্খানুপুঙ্খ পরিমাপ গ্রহণ করেছিলেন।",
        "synonyms": [
            "diligent",
            "precise",
            "thorough"
        ],
        "antonyms": [
            "careless",
            "sloppy",
            "slapdash"
        ]
    },
    {
        "id": 517,
        "level_no": 5,
        "word": "Pervasive",
        "part_of_speech": "Adjective",
        "pronunciation": "পারভেসিভ",
        "meaning": "সর্বব্যাপী / চতুর্দিকে বিস্তৃত",
        "sentence": "Smartphones have achieved a pervasive presence in daily life.",
        "sentence_bn": "স্মার্টফোন দৈনন্দিন জীবনে এক সর্বব্যাপী উপস্থিতি লাভ করেছে।",
        "synonyms": [
            "ubiquitous",
            "omnipresent",
            "widespread"
        ],
        "antonyms": [
            "rare",
            "isolated",
            "scarce"
        ]
    },
    {
        "id": 518,
        "level_no": 5,
        "word": "Resilient",
        "part_of_speech": "Adjective",
        "pronunciation": "রেজিলিয়েন্ট",
        "meaning": "সহনশীল / দ্রুত ঘুরে দাঁড়াতে সক্ষম",
        "sentence": "The economy showed that it is remarkably resilient to shocks.",
        "sentence_bn": "অর্থনীতি প্রমাণ করেছে যে এটি যেকোনো ধাক্কায় দ্রুত ঘুরে দাঁড়াতে সক্ষম।",
        "synonyms": [
            "durable",
            "tough",
            "rebounding"
        ],
        "antonyms": [
            "fragile",
            "vulnerable"
        ]
    },
    {
        "id": 519,
        "level_no": 5,
        "word": "Substantiate",
        "part_of_speech": "Verb",
        "pronunciation": "সাবস্ট্যানশিয়েট",
        "meaning": "প্রমাণ দিয়ে প্রতিষ্ঠা করা / সমর্থন করা",
        "sentence": "You must provide documented evidence to substantiate the claim.",
        "sentence_bn": "দাবিটি প্রমাণ করতে আপনাকে নথিপত্র সহযোগে তথ্য উপস্থাপন করতে হবে।",
        "synonyms": [
            "verify",
            "validate",
            "corroborate"
        ],
        "antonyms": [
            "disprove",
            "refute",
            "debunk"
        ]
    },
    {
        "id": 520,
        "level_no": 5,
        "word": "Tenacious",
        "part_of_speech": "Adjective",
        "pronunciation": "টেনেশাস",
        "meaning": "নাছোড়বান্দা / দৃঢ়প্রতিজ্ঞ",
        "sentence": "Her tenacious pursuit of the truth exposed the corruption.",
        "sentence_bn": "সত্য উদঘাটনে তার নাছোড়বান্দা প্রচেষ্টা দুর্নীতিকে উন্মোচন করেছিল।",
        "synonyms": [
            "persistent",
            "determined",
            "resolute"
        ],
        "antonyms": [
            "yielding",
            "weak",
            "wavering"
        ]
    },
    {
        "id": 601,
        "level_no": 6,
        "word": "Acumen",
        "part_of_speech": "Noun",
        "pronunciation": "অ্যাকিউমেন",
        "meaning": "সূক্ষ্ম বিচারবুদ্ধি / বিচক্ষণতা",
        "sentence": "His sharp financial acumen made him a successful entrepreneur.",
        "sentence_bn": "তার প্রখর আর্থিক বিচক্ষণতা তাকে একজন সফল উদ্যোক্তা করে তুলেছিল।",
        "synonyms": [
            "shrewdness",
            "keenness",
            "wit"
        ],
        "antonyms": [
            "foolishness",
            "dullness",
            "ignorance"
        ]
    },
    {
        "id": 602,
        "level_no": 6,
        "word": "Ephemeral",
        "part_of_speech": "Adjective",
        "pronunciation": "ইফেমারাল",
        "meaning": "ক্ষণস্থায়ী / স্বল্পকালীন",
        "sentence": "Social media trends are often fleeting and ephemeral.",
        "sentence_bn": "সোশ্যাল মিডিয়ার ট্রেন্ডগুলো প্রায়শই ক্ষণস্থায়ী ও স্বল্পমেয়াদি হয়।",
        "synonyms": [
            "transient",
            "fleeting",
            "short-lived"
        ],
        "antonyms": [
            "eternal",
            "permanent",
            "enduring"
        ]
    },
    {
        "id": 603,
        "level_no": 6,
        "word": "Fastidious",
        "part_of_speech": "Adjective",
        "pronunciation": "ফ্যাসটিডিয়াস",
        "meaning": "খুঁতখুঁতে / অত্যন্ত পরিপাটি",
        "sentence": "The senior editor was fastidious about grammar and punctuation.",
        "sentence_bn": "প্রধান সম্পাদক ব্যাকরণ ও যতিচিহ্ন নিয়ে অত্যন্ত খুঁতখুঁতে ছিলেন।",
        "synonyms": [
            "meticulous",
            "exacting",
            "finicky"
        ],
        "antonyms": [
            "careless",
            "lax",
            "easygoing"
        ]
    },
    {
        "id": 604,
        "level_no": 6,
        "word": "Gregarious",
        "part_of_speech": "Adjective",
        "pronunciation": "গ্রেগেরিয়াস",
        "meaning": "মিশুক / সমাজপ্রিয়",
        "sentence": "As a gregarious person, she thrives in bustling group gatherings.",
        "sentence_bn": "মিশুক স্বভাবের হওয়ায় তিনি জনাকীর্ণ আসরে খুব আনন্দ পান।",
        "synonyms": [
            "sociable",
            "outgoing",
            "companionable"
        ],
        "antonyms": [
            "introverted",
            "reclusive",
            "solitary"
        ]
    },
    {
        "id": 605,
        "level_no": 6,
        "word": "Ubiquitous",
        "part_of_speech": "Adjective",
        "pronunciation": "ইউবিকুইটাস",
        "meaning": "সর্বত্র বিদ্যমান / সর্বত্র দৃষ্ট",
        "sentence": "Internet connectivity has become ubiquitous across urban cities.",
        "sentence_bn": "শহরাঞ্চলে ইন্টারনেট সংযোগ এখন সর্বত্র বিদ্যমান হয়ে উঠেছে।",
        "synonyms": [
            "omnipresent",
            "pervasive",
            "universal"
        ],
        "antonyms": [
            "rare",
            "scarce",
            "uncommon"
        ]
    },
    {
        "id": 606,
        "level_no": 6,
        "word": "Voracious",
        "part_of_speech": "Adjective",
        "pronunciation": "ভোরেশাস",
        "meaning": "অত্যন্ত আগ্রহী / পেটুক",
        "sentence": "He is a voracious reader who finishes three dense books a week.",
        "sentence_bn": "তিনি একজন দারুণ বইপড়ুয়া যিনি সপ্তাহে তিনটি গুরুগম্ভীর বই শেষ করেন।",
        "synonyms": [
            "insatiable",
            "avid",
            "ravenous"
        ],
        "antonyms": [
            "indifferent",
            "apathetic"
        ]
    },
    {
        "id": 607,
        "level_no": 6,
        "word": "Anachronism",
        "part_of_speech": "Noun",
        "pronunciation": "অ্যানাক্রোনিজম",
        "meaning": "কালবৈষম্য / যুগের সাথে বেমানান বিষয়",
        "sentence": "Using a typewriter in a modern tech office felt like an anachronism.",
        "sentence_bn": "আধুনিক টেক অফিসে টাইপরাইটার ব্যবহার করা এক যুগের সাথে বেমানান ঘটনা।",
        "synonyms": [
            "misplacement",
            "archaism"
        ],
        "antonyms": []
    },
    {
        "id": 608,
        "level_no": 6,
        "word": "Benevolent",
        "part_of_speech": "Adjective",
        "pronunciation": "বেনেভোলেন্ট",
        "meaning": "দয়ালু / হিতৈষী",
        "sentence": "The benevolent donor contributed anonymously to the hospital.",
        "sentence_bn": "হিতৈষী দাতা হাসপাতালে পরিচয় গোপন রেখে আর্থিক অনুদান দিয়েছিলেন।",
        "synonyms": [
            "charitable",
            "kind-hearted",
            "humane"
        ],
        "antonyms": [
            "malevolent",
            "spiteful",
            "unkind"
        ]
    },
    {
        "id": 609,
        "level_no": 6,
        "word": "Capitulate",
        "part_of_speech": "Verb",
        "pronunciation": "ক্যাপিচুলেট",
        "meaning": "আত্মসমর্পণ করা / নতি স্বীকার করা",
        "sentence": "Under sustained public pressure, the government had to capitulate.",
        "sentence_bn": "জনগণের ক্রমাগত চাপের মুখে সরকারকে নতি স্বীকার করতে হয়েছিল।",
        "synonyms": [
            "surrender",
            "yield",
            "concede"
        ],
        "antonyms": [
            "resist",
            "fight",
            "conquer"
        ]
    },
    {
        "id": 610,
        "level_no": 6,
        "word": "Dichotomy",
        "part_of_speech": "Noun",
        "pronunciation": "ডাইকোটমি",
        "meaning": "দ্বিবিভাজন / পরস্পরবিরোধী দুই ভাগ",
        "sentence": "The paper explores the dichotomy between theory and practice.",
        "sentence_bn": "প্রবন্ধটি তত্ত্ব ও বাস্তব প্রয়োগের মধ্যবর্তী দ্বিবিভাজন অন্বেষণ করে।",
        "synonyms": [
            "division",
            "split",
            "duality"
        ],
        "antonyms": [
            "unity",
            "agreement",
            "harmony"
        ]
    },
    {
        "id": 611,
        "level_no": 6,
        "word": "Enervate",
        "part_of_speech": "Verb",
        "pronunciation": "এনার্ভেট",
        "meaning": "দুর্বল করা / শক্তিহীন করা",
        "sentence": "The scorching summer heat enervated the marathon runners.",
        "sentence_bn": "গ্রীষ্মের তীব্র দাবদাহ ম্যারাথন দৌড়বিদদের ভীষণ ক্লান্ত ও দুর্বল করে দিয়েছিল।",
        "synonyms": [
            "exhaust",
            "drain",
            "weaken"
        ],
        "antonyms": [
            "energize",
            "invigorate",
            "strengthen"
        ]
    },
    {
        "id": 612,
        "level_no": 6,
        "word": "Fortuitous",
        "part_of_speech": "Adjective",
        "pronunciation": "ফরচুইটাস",
        "meaning": "আকস্মিক সৌভাগ্যজনক",
        "sentence": "Their fortuitous meeting at the airport launched a billion-dollar venture.",
        "sentence_bn": "বিমানবন্দরে তাদের আকস্মিক সৌভাগ্যজনক সাক্ষাতে এক বিলিয়ন ডলারের উদ্যোগের জন্ম হয়।",
        "synonyms": [
            "lucky",
            "serendipitous",
            "chance"
        ],
        "antonyms": [
            "deliberate",
            "intentional",
            "unfortunate"
        ]
    },
    {
        "id": 613,
        "level_no": 6,
        "word": "Harangue",
        "part_of_speech": "Noun",
        "pronunciation": "হার্যাং",
        "meaning": "আক্রমণাত্মক ও দীর্ঘ বক্তৃতা",
        "sentence": "The angry manager delivered a harsh harangue to the tardy staff.",
        "sentence_bn": "ক্রুদ্ধ ম্যানেজার দেরিতে আসা কর্মচারীদের এক দীর্ঘ ও কড়া বক্তৃতা শোনালেন।",
        "synonyms": [
            "tirade",
            "diatribe",
            "lecture"
        ],
        "antonyms": [
            "praise",
            "compliment"
        ]
    },
    {
        "id": 614,
        "level_no": 6,
        "word": "Juxtaposition",
        "part_of_speech": "Noun",
        "pronunciation": "জাক্সটাপজিশন",
        "meaning": "তুলনামূলক সন্নিবেশ / পাশাপাশি অবস্থান",
        "sentence": "The juxtaposition of rich and poor neighborhoods shocked tourists.",
        "sentence_bn": "ধনী ও দরিদ্র পাড়ার পাশাপাশি অবস্থান পর্যটকদের স্তব্ধ করে দিয়েছিল।",
        "synonyms": [
            "contrast",
            "comparison",
            "adjacency"
        ],
        "antonyms": [
            "remoteness",
            "separation"
        ]
    },
    {
        "id": 615,
        "level_no": 6,
        "word": "Laconic",
        "part_of_speech": "Adjective",
        "pronunciation": "লাকনিক",
        "meaning": "অল্পকথায় গভীর ভাব প্রকাশক / মিতভাষী",
        "sentence": "His laconic reply summed up the entire argument in three words.",
        "sentence_bn": "তার সংক্ষিপ্ত ও মোক্ষম উত্তরটি মাত্র তিন শব্দে পুরো যুক্তি বুঝিয়ে দিল।",
        "synonyms": [
            "concise",
            "terse",
            "brief"
        ],
        "antonyms": [
            "wordy",
            "verbose",
            "rambling"
        ]
    },
    {
        "id": 616,
        "level_no": 6,
        "word": "Magnanimous",
        "part_of_speech": "Adjective",
        "pronunciation": "ম্যাগন্যানিমাস",
        "meaning": "মহানুভব / উদারচেতা",
        "sentence": "He was magnanimous in victory and praised his opponent warmly.",
        "sentence_bn": "বিজয়ের পর তিনি মহানুভবতা দেখান এবং প্রতিপক্ষের ভূয়সী প্রশংসা করেন।",
        "synonyms": [
            "generous",
            "noble",
            "forgiving"
        ],
        "antonyms": [
            "petty",
            "vindictive",
            "mean"
        ]
    },
    {
        "id": 617,
        "level_no": 6,
        "word": "Nonchalant",
        "part_of_speech": "Adjective",
        "pronunciation": "ননশালান্ট",
        "meaning": "উদাসীন / নিরুদ্বেগ",
        "sentence": "He maintained a nonchalant attitude despite the tense examination.",
        "sentence_bn": "কঠিন পরীক্ষা হওয়া সত্ত্বেও তিনি এক শান্ত ও নিরুদ্বেগ মনোভাব বজায় রেখেছিলেন।",
        "synonyms": [
            "calm",
            "composed",
            "unconcerned"
        ],
        "antonyms": [
            "anxious",
            "worried",
            "concerned"
        ]
    },
    {
        "id": 618,
        "level_no": 6,
        "word": "Ostentatious",
        "part_of_speech": "Adjective",
        "pronunciation": "অস্টেনটেশাস",
        "meaning": "জাকজমকপূর্ণ / লোকদেখানো",
        "sentence": "They criticized the ostentatious display of wealth at the gala.",
        "sentence_bn": "তারা অনুষ্ঠানে লোকদেখানো অতিরিক্ত ধনসম্পদ প্রদর্শনের সমালোচনা করেছিলেন।",
        "synonyms": [
            "showy",
            "flamboyant",
            "pretentious"
        ],
        "antonyms": [
            "modest",
            "understated",
            "humble"
        ]
    },
    {
        "id": 619,
        "level_no": 6,
        "word": "Panacea",
        "part_of_speech": "Noun",
        "pronunciation": "প্যানাসিয়া",
        "meaning": "সর্বরোগহর মহৌষধ / সকল সমস্যার সমাধান",
        "sentence": "Technology is powerful, but it is not a panacea for all societal ills.",
        "sentence_bn": "প্রযুক্তি শক্তিশালী, তবে তা সমাজের সকল সমস্যার একমাত্র মহৌষধ নয়।",
        "synonyms": [
            "cure-all",
            "remedy",
            "elixir"
        ],
        "antonyms": [
            "poison",
            "toxin"
        ]
    },
    {
        "id": 620,
        "level_no": 6,
        "word": "Quixotic",
        "part_of_speech": "Adjective",
        "pronunciation": "কুইক্সটিক",
        "meaning": "কল্পনাবিলাসী / অবাস্তব আদর্শবাদী",
        "sentence": "Embarking on a solo rowboat voyage was a quixotic adventure.",
        "sentence_bn": "একাকী দাঁড়টানা নৌকায় বিশ্বভ্রমণ ছিল এক অবাস্তব কল্পনাবিলাসী অভিযান।",
        "synonyms": [
            "idealistic",
            "impractical",
            "romantic"
        ],
        "antonyms": [
            "realistic",
            "practical",
            "pragmatic"
        ]
    },
    {
        "id": 701,
        "level_no": 7,
        "word": "Serendipity",
        "part_of_speech": "Noun",
        "pronunciation": "সেরেন্ডিপিটি",
        "meaning": "ভাগ্যক্রমে অপ্রত্যাশিত আনন্দদায়ক কিছু পাওয়া",
        "sentence": "Finding his long-lost notebook was pure serendipity.",
        "sentence_bn": "তার হারিয়ে যাওয়া নোটবইটি খুঁজে পাওয়া ছিল এক পরম অপ্রত্যাশিত সৌভাগ্য।",
        "synonyms": [
            "chance",
            "good fortune",
            "fluke"
        ],
        "antonyms": [
            "misfortune",
            "bad luck"
        ]
    },
    {
        "id": 702,
        "level_no": 7,
        "word": "Epiphany",
        "part_of_speech": "Noun",
        "pronunciation": "এপিফেনি",
        "meaning": "হঠাৎ অন্তর্জ্ঞান বা সত্য উপলব্ধি",
        "sentence": "During his evening walk, he experienced a sudden epiphany.",
        "sentence_bn": "সান্ধ্যকালীন হাঁটার সময় তিনি হঠাৎ এক গভীর সত্য উপলব্ধি করেছিলেন।",
        "synonyms": [
            "revelation",
            "realization",
            "insight"
        ],
        "antonyms": [
            "confusion",
            "blindness"
        ]
    },
    {
        "id": 703,
        "level_no": 7,
        "word": "Petrichor",
        "part_of_speech": "Noun",
        "pronunciation": "পেট্রিকোর",
        "meaning": "বৃষ্টির পর ভেজা মাটির মিষ্টি সুবাস",
        "sentence": "The pleasant petrichor filled the air after the summer shower.",
        "sentence_bn": "গ্রীষ্মের বৃষ্টির পর বাতাসে ভেজা মাটির এক মিষ্টি সুবাস ছড়িয়ে পড়েছিল।",
        "synonyms": [
            "earthy scent",
            "rain fragrance"
        ],
        "antonyms": []
    },
    {
        "id": 704,
        "level_no": 7,
        "word": "Solitude",
        "part_of_speech": "Noun",
        "pronunciation": "সলিটিউড",
        "meaning": "নির্জনে প্রশান্তি / শান্ত একাকীত্ব",
        "sentence": "Writers often seek quiet solitude to finish their novels.",
        "sentence_bn": "লেখকেরা প্রায়শই তাদের উপন্যাস সম্পন্ন করতে নির্জন প্রশান্তি খোঁজেন।",
        "synonyms": [
            "peaceful isolation",
            "seclusion",
            "privacy"
        ],
        "antonyms": [
            "crowd",
            "clutter",
            "noise"
        ]
    },
    {
        "id": 705,
        "level_no": 7,
        "word": "Wanderlust",
        "part_of_speech": "Noun",
        "pronunciation": "ওয়ান্ডারলাস্ট",
        "meaning": "ভ্রমণপিপাসা / পৃথিবী দেখার তীব্র ইচ্ছা",
        "sentence": "Her wanderlust led her to backpack across forty countries.",
        "sentence_bn": "তার প্রবল ভ্রমণপিপাসা তাকে চল্লিশটি দেশে ঘুরিয়ে নিয়েছিল।",
        "synonyms": [
            "passion for travel",
            "restlessness",
            "adventurism"
        ],
        "antonyms": [
            "homesickness"
        ]
    },
    {
        "id": 706,
        "level_no": 7,
        "word": "Zenith",
        "part_of_speech": "Noun",
        "pronunciation": "জেনিথ",
        "meaning": "শীর্ষবিন্দু / সাফল্যের চরম সীমা",
        "sentence": "At the zenith of his career, he won multiple gold medals.",
        "sentence_bn": "কর্মজীবনের সর্বোচ্চ শীর্ষে তিনি একাধিক স্বর্ণপদক জিতেছিলেন।",
        "synonyms": [
            "peak",
            "pinnacle",
            "apex",
            "summit"
        ],
        "antonyms": [
            "nadir",
            "bottom",
            "low point"
        ]
    },
    {
        "id": 707,
        "level_no": 7,
        "word": "Euphoria",
        "part_of_speech": "Noun",
        "pronunciation": "ইউফোরিয়া",
        "meaning": "পরম আনন্দ / চরম উল্লাস",
        "sentence": "The team erupted in sheer euphoria when the final whistle blew.",
        "sentence_bn": "চূড়ান্ত বাঁশি বাজার সাথে সাথে পুরো দল চরম উল্লাসে ফেটে পড়ল।",
        "synonyms": [
            "ecstasy",
            "jubilation",
            "elation"
        ],
        "antonyms": [
            "depression",
            "misery",
            "sorrow"
        ]
    },
    {
        "id": 708,
        "level_no": 7,
        "word": "Halcyon",
        "part_of_speech": "Adjective",
        "pronunciation": "হ্যালসিয়ন",
        "meaning": "শান্তিময় ও আনন্দঘন সোনালী দিন",
        "sentence": "He fondly recalled the halcyon days of his college youth.",
        "sentence_bn": "তিনি আনন্দের সাথে তার কলেজ জীবনের সোনালী ও শান্তিময় দিনগুলো স্মরণ করলেন।",
        "synonyms": [
            "peaceful",
            "golden",
            "idyllic"
        ],
        "antonyms": [
            "turbulent",
            "stormy",
            "chaotic"
        ]
    },
    {
        "id": 709,
        "level_no": 7,
        "word": "Luminescence",
        "part_of_speech": "Noun",
        "pronunciation": "লুমিনেসেন্স",
        "meaning": "উজ্জ্বল প্রভা / মৃদু আলো বিকিরণ",
        "sentence": "The fireflies illuminated the dark garden with soft luminescence.",
        "sentence_bn": "জোনাকিগুলো নরম আলো বিকিরণ করে অন্ধকার বাগানটিকে আলোকিত করেছিল।",
        "synonyms": [
            "radiance",
            "glow",
            "gleam"
        ],
        "antonyms": [
            "darkness",
            "gloom"
        ]
    },
    {
        "id": 710,
        "level_no": 7,
        "word": "Mellifluous",
        "part_of_speech": "Adjective",
        "pronunciation": "মেলিফ্লুয়াস",
        "meaning": "সুললিত ও মিষ্টি শ্রুতিমধুর কণ্ঠ",
        "sentence": "The singer had a mellifluous voice that enchanted the entire room.",
        "sentence_bn": "গায়কের মিষ্টি ও সুললিত কণ্ঠ পুরো মিলনায়তনকে মুগ্ধ করেছিল।",
        "synonyms": [
            "melodious",
            "dulcet",
            "honeyed"
        ],
        "antonyms": [
            "cacophonous",
            "grating",
            "harsh"
        ]
    },
    {
        "id": 711,
        "level_no": 7,
        "word": "Nefarious",
        "part_of_speech": "Adjective",
        "pronunciation": "নেফেরিয়াস",
        "meaning": "কুখ্যাত / ঘৃণ্য ও অপরাধমূলক",
        "sentence": "The cyber police foiled the hackers' nefarious data theft scheme.",
        "sentence_bn": "সাইবার পুলিশ হ্যাকারদের ঘৃণ্য তথ্য চুরির চক্রান্ত ব্যর্থ করে দেয়।",
        "synonyms": [
            "wicked",
            "villainous",
            "evil"
        ],
        "antonyms": [
            "noble",
            "virtuous",
            "righteous"
        ]
    },
    {
        "id": 712,
        "level_no": 7,
        "word": "Oblivion",
        "part_of_speech": "Noun",
        "pronunciation": "অব্লিভিয়ন",
        "meaning": "বিস্মৃতি / বিস্মরণ",
        "sentence": "Many forgotten inventions faded quietly into historical oblivion.",
        "sentence_bn": "অনেক বিস্মৃত আবিষ্কার নীরবে ইতিহাসের বিস্মৃতির অতলে তলিয়ে গেছে।",
        "synonyms": [
            "forgetfulness",
            "obscurity",
            "nothingness"
        ],
        "antonyms": [
            "fame",
            "celebrity",
            "remembrance"
        ]
    },
    {
        "id": 713,
        "level_no": 7,
        "word": "Quintessential",
        "part_of_speech": "Adjective",
        "pronunciation": "কুইন্টেসেন্শিয়াল",
        "meaning": "সর্বোৎকৃষ্ট রূপ / বিশিষ্ট উদাহরণ",
        "sentence": "A cup of hot tea on a rainy morning is the quintessential Bengali joy.",
        "sentence_bn": "বৃষ্টিভেজা সকালে এক কাপ গরম চা হলো খাঁটি বাঙালির এক অবিচ্ছেদ্য আনন্দ।",
        "synonyms": [
            "typical",
            "archetypal",
            "exemplary"
        ],
        "antonyms": [
            "untypical",
            "unrepresentative"
        ]
    },
    {
        "id": 714,
        "level_no": 7,
        "word": "Redolent",
        "part_of_speech": "Adjective",
        "pronunciation": "রেডোলেন্ট",
        "meaning": "সুগন্ধযুক্ত / স্মৃতি জাগানিয়া",
        "sentence": "The old kitchen was warmly redolent of freshly baked cardamom buns.",
        "sentence_bn": "পুরনো রান্নাঘরটি তাজা এলাচি বানটির মিষ্টি সুবাসে ভরে ছিল।",
        "synonyms": [
            "fragrant",
            "aromatic",
            "evocative"
        ],
        "antonyms": [
            "malodorous",
            "foul"
        ]
    },
    {
        "id": 715,
        "level_no": 7,
        "word": "Sycophant",
        "part_of_speech": "Noun",
        "pronunciation": "সিকোফ্যান্ট",
        "meaning": "চাটুকার / তোষামোদকারী",
        "sentence": "The emperor surrounded himself with sycophants who praised his every word.",
        "sentence_bn": "সম্রাট নিজেকে এমন তোষামোদকারী দিয়ে ঘিরে রেখেছিলেন যারা সব কথায় স্তুতি করত।",
        "synonyms": [
            "flatterer",
            "yes-man",
            "parasite"
        ],
        "antonyms": [
            "critic",
            "detractor"
        ]
    },
    {
        "id": 716,
        "level_no": 7,
        "word": "Trepidation",
        "part_of_speech": "Noun",
        "pronunciation": "ট্রেপিডেশন",
        "meaning": "ভয়ভীতি / বুক ধড়ফড়ানি",
        "sentence": "With noticeable trepidation, he walked onto the stage to give his address.",
        "sentence_bn": "বেশ কিছুটা দ্বিধা ও বুক ধড়ফড়ানির সাথে তিনি মঞ্চে বক্তব্য দিতে উঠলেন।",
        "synonyms": [
            "apprehension",
            "dread",
            "nervousness"
        ],
        "antonyms": [
            "calm",
            "composure",
            "confidence"
        ]
    },
    {
        "id": 717,
        "level_no": 7,
        "word": "Ubiquity",
        "part_of_speech": "Noun",
        "pronunciation": "ইউবিকুইটি",
        "meaning": "সর্বত্র বিস্তৃতি / সার্বজনীন উপস্থিতি",
        "sentence": "The ubiquity of smartphones reshaped how society communicates.",
        "sentence_bn": "স্মার্টফোনের সার্বজনীন উপস্থিতি সমাজের যোগাযোগ ব্যবস্থার রূপ বদলে দিয়েছে।",
        "synonyms": [
            "omnipresence",
            "pervasiveness",
            "universality"
        ],
        "antonyms": [
            "rarity",
            "scarcity"
        ]
    },
    {
        "id": 718,
        "level_no": 7,
        "word": "Verisimilitude",
        "part_of_speech": "Noun",
        "pronunciation": "ভেরিসিমিলিটিউড",
        "meaning": "বাস্তবতার সাদৃশ্য / বিশ্বাসযোগ্যতা",
        "sentence": "The historical drama achieved extraordinary verisimilitude in its sets.",
        "sentence_bn": "ঐতিহাসিক নাটকটি তার সেট নির্মাণে অসাধারণ বাস্তবসম্মত বিশ্বাসযোগ্যতা অর্জন করেছিল।",
        "synonyms": [
            "realism",
            "plausibility",
            "authenticity"
        ],
        "antonyms": [
            "falseness",
            "unreality"
        ]
    },
    {
        "id": 719,
        "level_no": 7,
        "word": "Whimsical",
        "part_of_speech": "Adjective",
        "pronunciation": "হুইমজিক্যাল",
        "meaning": "খেয়ালী / অদ্ভুত আনন্দময়",
        "sentence": "The children's book was filled with colorful, whimsical illustrations.",
        "sentence_bn": "ছোটদের বইটি রঙিন ও খেয়ালী চমৎকার চিত্রে ভরপুর ছিল।",
        "synonyms": [
            "fanciful",
            "playful",
            "eccentric"
        ],
        "antonyms": [
            "serious",
            "practical",
            "grave"
        ]
    },
    {
        "id": 720,
        "level_no": 7,
        "word": "Zephyr",
        "part_of_speech": "Noun",
        "pronunciation": "জেফির",
        "meaning": "মৃদু মন্দ বসন্তের বাতাস",
        "sentence": "A gentle evening zephyr cooled down the sun-warmed riverbank.",
        "sentence_bn": "সন্ধ্যার এক মৃদু মন্দ বাতাস রোদে তপ্ত নদীর তীরকে শীতল করে দিয়েছিল।",
        "synonyms": [
            "breeze",
            "gentle wind",
            "draft"
        ],
        "antonyms": [
            "gale",
            "storm",
            "tempest"
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DEFAULT_LEVELS, DEFAULT_VOCABULARY };
}
