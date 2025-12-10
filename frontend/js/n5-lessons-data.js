// N5 Course Module - Enhanced MEGA VERSION for Absolute Beginners! 🎌
// Combining: Minna no Nihongo I + Genki I + Japanese From Zero + Fun Interactive Content
// Updated: December 2025

const N5_LESSONS = [
    // 🌟 START HERE - Absolute Beginner
    {
        id: 0,
        title: "🎌 START: Welcome to Japanese!",
        topics: "Greetings, Basic phrases",
        difficulty: "absolute-beginner",
        estimatedTime: "15 mins",
        grammar: [
            "こんにちは (konnichiwa) - Hello",
            "ありがとう (arigatou) - Thank you",
            "すみません (sumimasen) - Excuse me",
            "はい (hai) - Yes / いいえ (iie) - No"
        ],
        vocabulary: ["おはよう (morning)", "こんにちは (afternoon)", "こんばんは (evening)", "さようなら (goodbye)", "ありがとう", "すみません", "はい", "いいえ", "おやすみ (goodnight)"],
        description: "🎉 Your exciting journey starts here! Learn the most essential Japanese phrases in just 15 minutes.",
        funFact: "🎎 Did you know? Bowing is the Japanese handshake! A deeper bow shows more respect.",
        quickTips: [
            "👉 Say こんにちは (kon-nee-chee-wa) anytime after 10 AM",
            "👉 ありがとう is casual, add ございます for super polite",
            "👉 Practice out loud - your mouth needs to learn too!"
        ],
        practicePrompts: [
            "Teach me how to greet someone at different times of day",
            "What's the difference between ありがとう and ありがとうございます?",
            "Let's have a basic greeting conversation!",
            "Show me how to introduce myself simply"
        ],
        emoji: "🎌"
    },
    
    {
        id: 1,
        title: "👋 Lesson 1: Nice to Meet You!",
        topics: "Self-introduction, です",
        difficulty: "beginner",
        estimatedTime: "30 mins",
        grammar: [
            "わたしは [name] です - I am [name]",
            "N1 は N2 です - N1 is N2",
            "N じゃありません - N is not",
            "[country]じん - nationality",
            "～さん - Mr./Ms. (never for yourself!)"
        ],
        vocabulary: ["わたし (I)", "あなた (you)", "～さん", "せんせい (teacher)", "がくせい (student)", "アメリカじん", "なまえ (name)", "かいしゃいん (office worker)"],
        description: "Master self-introductions! Say your name, country, and job like a pro in Japanese.",
        funFact: "🏯 In Japan, family names come FIRST! Yamada Taro = Mr. Taro Yamada in English.",
        quickTips: [
            "✨ です = is (makes everything polite!)",
            "✨ Never call yourself さん (that's for others)",
            "✨ わたしは _____ です (fill in the blank!)"
        ],
        practicePrompts: [
            "Help me create my personal introduction in Japanese",
            "How do I ask someone's name politely?",
            "Explain the particle は in simple terms",
            "Let's role-play meeting someone for the first time!"
        ],
        emoji: "👋"
    },

    {
        id: 2,
        title: "📦 Lesson 2: What's This?",
        topics: "これ・それ・あれ",
        difficulty: "beginner",
        estimatedTime: "25 mins",
        grammar: [
            "これ は N です - This is N",
            "それ/あれ は何ですか - What is that?",
            "この/その/あの N - this/that N",
            "N1 の N2 - N2 of N1 (possession)",
            "～も - also/too"
        ],
        vocabulary: ["ほん (book)", "ペン (pen)", "ノート (notebook)", "かばん (bag)", "けいたい (phone)", "パソコン (computer)", "くるま (car)", "とけい (watch/clock)"],
        description: "Point and identify! Learn to talk about objects around you.",
        funFact: "📱 Japanese uses LOTS of English words (katakana)! ノート = notebook, ペン = pen",
        quickTips: [
            "👆 これ (close to you), それ (close to them), あれ (far from both)",
            "👆 この needs a noun: この ほん (this book)",
            "👆 何ですか = What is it?"
        ],
        practicePrompts: [
            "Teach me to describe objects on my desk",
            "What's the difference between これ and この?",
            "Create a fun dialogue about shopping",
            "Quiz me on pointing words!"
        ],
        emoji: "📦"
    },

    {
        id: 3,
        title: "📍 Lesson 3: Where Are You?",
        topics: "Location words, どこ",
        difficulty: "beginner",
        estimatedTime: "25 mins",
        grammar: [
            "N は place です - N is at place",
            "ここ/そこ/あそこ - here/there/over there",
            "どこですか - Where is it?",
            "N の place - place of N"
        ],
        vocabulary: ["トイレ (toilet)", "きょうしつ (classroom)", "うち (home)", "がっこう (school)", "えき (station)", "びょういん (hospital)", "レストラン", "コンビニ"],
        description: "Never get lost! Ask and answer 'where' questions with confidence.",
        funFact: "🚻 Japanese toilets are high-tech! Many have heated seats and music features!",
        quickTips: [
            "🗺️ どこ = where (your new best friend)",
            "🗺️ ここ/そこ/あそこ = same pattern as これ/それ/あれ",
            "🗺️ です turns statements into polite sentences"
        ],
        practicePrompts: [
            "How do I ask 'Where is the bathroom?'",
            "Teach me all location vocabulary",
            "Let's practice giving directions!",
            "Create a map navigation scenario"
        ],
        emoji: "📍"
    },

    {
        id: 4,
        title: "⏰ Lesson 4: What Time Is It?",
        topics: "Time, Daily routine verbs",
        difficulty: "beginner",
        estimatedTime: "35 mins",
        grammar: [
            "～じ - o'clock (1じ, 2じ...)",
            "～ふん/～ぷん - minutes",
            "V ます - polite verb form",
            "～から～まで - from...to...",
            "いつ - when"
        ],
        vocabulary: ["おきます (wake up)", "ねます (sleep)", "たべます (eat)", "いきます (go)", "べんきょうします (study)", "あさ (morning)", "ひる (noon)", "よる (night)", "まいにち (everyday)"],
        description: "Tell time and describe your daily schedule like a native speaker!",
        funFact: "⏱️ Japan has punctuality down to a science! Trains arrive within 18 seconds of schedule on average.",
        quickTips: [
            "🕐 1時 = 1 o'clock, 30分 = 30 minutes",
            "🕐 ます makes verbs polite (たべます = eat politely)",
            "🕐 から = from, まで = until/to"
        ],
        practicePrompts: [
            "Help me describe my morning routine",
            "How do I say specific times in Japanese?",
            "Teach me to ask 'What time...?' questions",
            "Let's create a daily schedule together!"
        ],
        emoji: "⏰"
    },

    {
        id: 5,
        title: "🚃 Lesson 5: Let's Go!",
        topics: "Movement, Transportation",
        difficulty: "beginner",
        estimatedTime: "30 mins",
        grammar: [
            "place に/へ いきます - go to place",
            "place に/へ きます - come to place",
            "place に/へ かえります - return to place",
            "transportation で - by (bus, train, etc.)",
            "person と - with person"
        ],
        vocabulary: ["いきます (go)", "きます (come)", "かえります (return)", "でんしゃ (train)", "バス (bus)", "タクシー", "じてんしゃ (bicycle)", "あるきます (walk)", "ひこうき (airplane)"],
        description: "Travel talk! Say where you're going and how you'll get there.",
        funFact: "🚅 The Shinkansen (bullet train) reaches 320 km/h and has NEVER had a fatal accident!",
        quickTips: [
            "🚆 に and へ both mean 'to' (slight difference, don't worry!)",
            "🚆 で tells HOW you travel",
            "🚆 と means 'together with someone'"
        ],
        practicePrompts: [
            "How do I say 'I go to Tokyo by train'?",
            "Teach me all transportation words",
            "Create a travel planning dialogue",
            "Practice asking how someone commutes"
        ],
        emoji: "🚃"
    },

    {
        id: 6,
        title: "🍜 Lesson 6: Let's Eat!",
        topics: "Action verbs, を particle",
        difficulty: "beginner",
        estimatedTime: "30 mins",
        grammar: [
            "N を V - do V to N (object marker)",
            "place で V - do V at place",
            "N をください - Please give me N",
            "V ましょう - Let's V!",
            "V ませんか - Won't you V? (invitation)"
        ],
        vocabulary: ["たべます (eat)", "のみます (drink)", "かいます (buy)", "よみます (read)", "みます (watch/see)", "ききます (listen)", "かきます (write)", "はなします (speak)"],
        description: "Food, shopping, and daily actions! Order like a local.",
        funFact: "🍱 Say いただきます (itadakimasu) before eating - it means 'I humbly receive this meal'!",
        quickTips: [
            "🍽️ を marks the object (I eat WHAT?)",
            "🍽️ で marks the place (I eat WHERE?)",
            "🍽️ ください = 'please' for ordering"
        ],
        practicePrompts: [
            "How do I order ramen at a restaurant?",
            "Teach me food and drink vocabulary",
            "Create a shopping conversation",
            "Explain the difference between を, で, and に"
        ],
        emoji: "🍜"
    },

    {
        id: 7,
        title: "🎁 Lesson 7: Giving & Getting",
        topics: "あげます・もらいます・くれます",
        difficulty: "intermediate",
        estimatedTime: "35 mins",
        grammar: [
            "N1は N2に N3を あげます - N1 gives N3 to N2",
            "N1は N2に N3を もらいます - N1 receives N3 from N2",
            "N1は N2に N3を くれます - N1 gives N3 to me",
            "で - using/with (tool)"
        ],
        vocabulary: ["あげます (give)", "もらいます (receive)", "くれます (give to me)", "プレゼント (present)", "はな (flower)", "てがみ (letter)", "おしえます (teach)", "ならいます (learn)"],
        description: "Gift giving culture! Master perspective in giving and receiving.",
        funFact: "🎁 In Japan, how you wrap a gift is as important as the gift itself!",
        quickTips: [
            "💝 あげます = I give to others",
            "💝 もらいます = I receive from others",
            "💝 くれます = Someone gives TO ME"
        ],
        practicePrompts: [
            "Explain giving and receiving with examples",
            "How do I say 'I received a gift from my friend'?",
            "Create a birthday present scenario",
            "Why are there 3 different 'give' verbs?"
        ],
        emoji: "🎁"
    },

    {
        id: 8,
        title: "🎨 Lesson 8: Describing Things",
        topics: "い-adjectives, な-adjectives",
        difficulty: "intermediate",
        estimatedTime: "40 mins",
        grammar: [
            "い-adjective + です - polite form",
            "い-adj negative: ～くないです",
            "な-adjective + です",
            "な-adj negative: ～じゃありません",
            "～くて - connecting adjectives"
        ],
        vocabulary: ["おおきい (big)", "ちいさい (small)", "たかい (tall/expensive)", "やすい (cheap)", "あたらしい (new)", "ふるい (old)", "きれい (beautiful)", "しずか (quiet)", "げんき (healthy/energetic)"],
        description: "Add color to your Japanese! Describe everything around you.",
        funFact: "🌸 The word きれい means both 'pretty' AND 'clean' - Japanese values cleanliness!",
        quickTips: [
            "🎨 い-adjectives end in い (おおきい, ちいさい)",
            "🎨 な-adjectives need な before nouns",
            "🎨 いい (good) is irregular - watch out!"
        ],
        practicePrompts: [
            "Teach me to describe my room",
            "What's the difference between い and な adjectives?",
            "Give me practice sentences with adjectives",
            "How do I make adjectives negative?"
        ],
        emoji: "🎨"
    },

    {
        id: 9,
        title: "❤️ Lesson 9: Likes & Abilities",
        topics: "すき・きらい, できます",
        difficulty: "intermediate",
        estimatedTime: "30 mins",
        grammar: [
            "N が すきです - like N",
            "N が きらいです - dislike N",
            "N が じょうずです - good at N",
            "N が へたです - poor at N",
            "よく/ときどき/あまり/ぜんぜん - frequency adverbs"
        ],
        vocabulary: ["すき (like)", "きらい (dislike)", "だいすき (love)", "だいきらい (hate)", "りょうり (cooking)", "スポーツ", "おんがく (music)", "えいが (movie)", "アニメ"],
        description: "Express your personality! Talk about what you love and what you're good at.",
        funFact: "🎌 Saying 'I love you' directly is rare in Japanese - they show it through actions!",
        quickTips: [
            "💖 が marks the object of emotion (not を!)",
            "💖 だい adds intensity: だいすき = really love!",
            "💖 あまり + negative = not very much"
        ],
        practicePrompts: [
            "Help me talk about my hobbies",
            "How do I express strong likes and dislikes?",
            "Teach me to say what I'm good and bad at",
            "Create a conversation about favorite things"
        ],
        emoji: "❤️"
    },

    {
        id: 10,
        title: "📍 Lesson 10: There Is/Are",
        topics: "あります・います, Position words",
        difficulty: "intermediate",
        estimatedTime: "35 mins",
        grammar: [
            "place に N があります - N exists at place (things)",
            "place に N がいます - N exists at place (living)",
            "N1 と N2 - N1 and N2",
            "Position: うえ/した/まえ/うしろ/となり/なか"
        ],
        vocabulary: ["あります (exists-thing)", "います (exists-living)", "うえ (top)", "した (bottom)", "まえ (front)", "うしろ (back)", "となり (next to)", "ちかく (near)", "なか (inside)", "そと (outside)"],
        description: "Describe where things and people are! Master position words.",
        funFact: "🏠 Japanese rooms traditionally have tatami mats - people sit on the floor!",
        quickTips: [
            "📦 あります for things (books, phones)",
            "👤 います for living things (people, animals)",
            "📦 に marks the location"
        ],
        practicePrompts: [
            "How do I describe what's in my room?",
            "Teach me all position/location words",
            "Explain the difference between あります and います",
            "Let's describe a picture together!"
        ],
        emoji: "📍"
    },

    {
        id: 11,
        title: "🔢 Lesson 11: How Many?",
        topics: "Counters, Quantity",
        difficulty: "intermediate",
        estimatedTime: "45 mins",
        grammar: [
            "Number + counter",
            "～つ (general counter: 1-10)",
            "～人 (people counter)",
            "～枚 (flat things)", 
            "～本 (long things)",
            "～冊 (books)",
            "いくつ/なんにん - how many"
        ],
        vocabulary: ["ひとつ (1)", "ふたつ (2)", "みっつ (3)", "ひとり (1 person)", "ふたり (2 people)", "さんにん (3 people)", "いくつ", "なん"],
        description: "Count everything! Learn Japanese counter words.",
        funFact: "🔢 Japanese has 500+ counters! But don't worry, you'll use about 20 regularly.",
        quickTips: [
            "🔢 ～つ is easiest: ひとつ, ふたつ...",
            "🔢 People are special: ひとり, ふたり, さんにん...",
            "🔢 Different counters for different shapes!"
        ],
        practicePrompts: [
            "Teach me to count from 1-10 in Japanese",
            "How do I count people vs objects?",
            "Explain the most common counter words",
            "Quiz me on counting different items!"
        ],
        emoji: "🔢"
    },

    {
        id: 12,
        title: "📅 Lesson 12: Past Tense",
        topics: "ました, Past forms",
        difficulty: "intermediate",
        estimatedTime: "35 mins",
        grammar: [
            "V ました - did V (past affirmative)",
            "V ませんでした - didn't do V (past negative)",
            "い-adj ～かったです - was adj",
            "な-adj ～でした - was adj",
            "Time: きのう/せんしゅう/せんげつ/きょねん"
        ],
        vocabulary: ["きのう (yesterday)", "おととい (day before yesterday)", "せんしゅう (last week)", "せんげつ (last month)", "きょねん (last year)", "～まえ (~ ago)"],
        description: "Talk about the past! What did you do yesterday?",
        funFact: "📆 Japanese weekdays are numbered! 月曜日 (Monday) = Moon day, 火曜日 (Tuesday) = Fire day!",
        quickTips: [
            "📜 ます → ました (just add た!)",
            "📜 いい → よかった (irregular!)",
            "📜 Past + time word = perfect combo"
        ],
        practicePrompts: [
            "Help me talk about my weekend",
            "How do I make verbs past tense?",
            "Teach me to say 'I went' vs 'I didn't go'",
            "Create a diary entry in past tense"
        ],
        emoji: "📅"
    },

    {
        id: 13,
        title: "💭 Lesson 13: I Want...!",
        topics: "ほしい, ～たい",
        difficulty: "intermediate",
        estimatedTime: "30 mins",
        grammar: [
            "N が ほしいです - want N (thing)",
            "V たいです - want to V (action)",
            "N を V に いきます - go to V N",
            "どこかへ/なにか - somewhere/something"
        ],
        vocabulary: ["ほしい (want)", "たい (want to)", "のみもの (drink)", "たべもの (food)", "やすみ (rest/holiday)", "おかね (money)", "じかん (time)", "ともだち (friend)"],
        description: "Express your desires! Say what you want and want to do.",
        funFact: "🗾 Many Japanese people have a 'bucket list' called やりたいことリスト!",
        quickTips: [
            "✨ ほしい for things (I want a car)",
            "✨ たい for actions (I want to go)",
            "✨ たい attaches to verb stem"
        ],
        practicePrompts: [
            "How do I say 'I want to go to Japan'?",
            "Teach me to express different wants",
            "What's the difference between ほしい and たい?",
            "Help me make a wish list in Japanese!"
        ],
        emoji: "💭"
    },

    {
        id: 14,
        title: "🙏 Lesson 14: Requests & Doing Things",
        topics: "て-form, ～てください",
        difficulty: "intermediate",
        estimatedTime: "45 mins",
        grammar: [
            "V て-form (te-form conjugation)",
            "V てください - please do V",
            "V ています - currently doing V",
            "V ましょうか - shall I V?"
        ],
        vocabulary: ["まって (wait)", "みて (look)", "きて (come)", "して (do)", "かいて (write)", "よんで (read)", "たべて (eat)", "のんで (drink)"],
        description: "Make polite requests! The famous て-form begins here.",
        funFact: "🙏 Japanese has 5+ levels of politeness - すみませんが is a polite way to start requests!",
        quickTips: [
            "🔄 て-form is SUPER important - many uses!",
            "🔄 ください makes it 'please do~'",
            "🔄 ています = doing right now OR habitual"
        ],
        practicePrompts: [
            "Teach me how to conjugate て-form",
            "How do I make polite requests?",
            "Give me て-form practice sentences",
            "Explain all the uses of て-form"
        ],
        emoji: "🙏"
    },

    {
        id: 15,
        title: "✅ Lesson 15: Can I? / Don't!",
        topics: "Permission & Prohibition",
        difficulty: "intermediate",
        estimatedTime: "35 mins",
        grammar: [
            "V てもいいです - may V / it's okay to V",
            "V てはいけません - must not V / don't V!",
            "V ています - wearing, holding (state)",
            "V てもいいですか - May I V?"
        ],
        vocabulary: ["すわります (sit)", "はいります (enter)", "とります (take)", "つかいます (use)", "しゃしん (photo)", "タバコ", "けいたい (phone)"],
        description: "Ask permission and understand rules. Essential for daily life!",
        funFact: "📸 In Japan, you can't take photos in many temples and museums - look for 撮影禁止 signs!",
        quickTips: [
            "✅ てもいい = permission (OK to do)",
            "❌ てはいけません = prohibition (NOT OK!)",
            "✅ Always ask てもいいですか when unsure"
        ],
        practicePrompts: [
            "How do I ask 'Can I use this?'",
            "Teach me common permissions and prohibitions",
            "Explain Japanese social rules",
            "Create a museum visit scenario"
        ],
        emoji: "✅"
    },

    {
        id: 16,
        title: "➡️ Lesson 16: And Then...",
        topics: "て-form connections",
        difficulty: "intermediate",
        estimatedTime: "35 mins",
        grammar: [
            "V1て、V2 - do V1 and then V2",
            "Adj1て、Adj2 - connecting adjectives",
            "Sequential actions with て",
            "から - because/so (reason)"
        ],
        vocabulary: ["おきて (wake up and)", "あらって (wash and)", "たべて (eat and)", "いって (go and)", "かえって (return and)", "それから (and then)", "まえに (before)", "あとで (after)"],
        description: "Connect actions smoothly! Tell stories and describe sequences.",
        funFact: "🎬 Anime often uses て-form for action sequences: 飛んで、走って、戦って! (fly, run, fight!)",
        quickTips: [
            "⚡ て connects actions in order",
            "⚡ Great for recipes and instructions!",
            "⚡ から gives reasons (～から)"
        ],
        practicePrompts: [
            "Help me describe my morning routine with て-form",
            "How do I connect multiple actions?",
            "Teach me to give step-by-step instructions",
            "Create a recipe in Japanese!"
        ],
        emoji: "➡️"
    },

    {
        id: 17,
        title: "❗ Lesson 17: You Must!",
        topics: "Obligation & Necessity",
        difficulty: "intermediate",
        estimatedTime: "40 mins",
        grammar: [
            "V なければなりません - must V / have to V",
            "V なくてもいいです - don't have to V",
            "Negative form conjugation",
            "V ないで - without doing V"
        ],
        vocabulary: ["かえします (return)", "だします (submit)", "きめます (decide)", "れんらくします (contact)", "そうじします (clean)", "せんたくします (laundry)"],
        description: "Express must-dos and obligations. What you have to do!",
        funFact: "📝 Japanese schools have 当番 (touban) - assigned classroom duties that rotate!",
        quickTips: [
            "‼️ なければならない = must do (strong)",
            "‼️ なくてもいい = don't have to",
            "‼️ Start with negative form, add ければならない"
        ],
        practicePrompts: [
            "How do I say 'I must study'?",
            "Teach me to express obligations",
            "What's the difference between must and should?",
            "Help me talk about my responsibilities"
        ],
        emoji: "❗"
    },

    {
        id: 18,
        title: "🎯 Lesson 18: I Can Do It!",
        topics: "Abilities & Possibilities",
        difficulty: "intermediate",
        estimatedTime: "35 mins",
        grammar: [
            "N ができます - can do N",
            "V (dictionary) ことができます - can V / able to V",
            "N のまえに - before N",
            "N のあとで - after N"
        ],
        vocabulary: ["できます (can do)", "およぎます (swim)", "うたいます (sing)", "ひきます (play instrument)", "はなします (speak)", "かきます (write)", "しゅみ (hobby)", "とくい (good at)"],
        description: "Talk about your abilities! What can you do?",
        funFact: "🎸 Many Japanese people learn piano as children - it's one of the most popular hobbies!",
        quickTips: [
            "💪 できます = can do / is possible",
            "💪 ことができます = more formal ability",
            "💪 Use for skills and capabilities"
        ],
        practicePrompts: [
            "How do I talk about my skills?",
            "Teach me to say what I can and can't do",
            "Explain abilities vs possibilities",
            "Help me create a skills profile!"
        ],
        emoji: "🎯"
    },

    {
        id: 19,
        title: "📸 Lesson 19: Have You Ever...?",
        topics: "Experience",
        difficulty: "intermediate",
        estimatedTime: "30 mins",
        grammar: [
            "V たことがあります - have experienced V",
            "V たことがありません - have never V",
            "～や～など - and...etc. (non-exhaustive list)",
            "いちど/にど - once/twice"
        ],
        vocabulary: ["のぼります (climb)", "とまります (stay)", "さわります (touch)", "けんぶつします (sightseeing)", "りょこう (travel)", "けいけん (experience)"],
        description: "Share your life experiences! Have you been to...? Have you tried...?",
        funFact: "🗻 50% of Japanese people have never climbed Mt. Fuji - it's more for tourists!",
        quickTips: [
            "🌍 たことがある = have done before",
            "🌍 Perfect for travel stories!",
            "🌍 Add いちど (once) for frequency"
        ],
        practicePrompts: [
            "How do I share my travel experiences?",
            "Teach me to ask 'Have you ever...?'",
            "Help me talk about unique experiences",
            "Create a travel conversation!"
        ],
        emoji: "📸"
    },

    {
        id: 20,
        title: "💬 Lesson 20: Casual Talk",
        topics: "Plain/Dictionary form",
        difficulty: "advanced",
        estimatedTime: "45 mins",
        grammar: [
            "Plain form (casual speech)",
            "Verb dictionary form",
            "Plain past/present/negative",
            "と思います - I think that...",
            "When to use casual vs polite"
        ],
        vocabulary: ["おもいます (think)", "いいます (say)", "わかります (understand)", "しります (know)", "はなします (speak)", "かんがえます (think about)"],
        description: "Level up! Learn casual Japanese for friends and family.",
        funFact: "👥 Japanese friends switch from です・ます to plain form when they get close!",
        quickTips: [
            "🗣️ Plain form = casual/dictionary form",
            "🗣️ Use with close friends, never with strangers!",
            "🗣️ と思います uses plain form"
        ],
        practicePrompts: [
            "When do I use casual Japanese?",
            "Teach me plain form conjugations",
            "How do I express my opinions?",
            "Compare polite vs casual speech"
        ],
        emoji: "💬"
    },

    {
        id: 21,
        title: "🗨️ Lesson 21: I Think / They Say",
        topics: "と思います・と言います",
        difficulty: "advanced",
        estimatedTime: "40 mins",
        grammar: [
            "plain form + と思います - I think that...",
            "plain form + と言います - say that...",
            "～でしょう - probably/I guess",
            "Reporting speech"
        ],
        vocabulary: ["おもいます (think)", "いいます (say)", "しんじます (believe)", "きこえます (can hear)", "みえます (can see)", "うわさ (rumor)"],
        description: "Express thoughts and report what others say. Adult conversations!",
        funFact: "🗣️ Japanese often says ～と思います to soften statements and sound less direct!",
        quickTips: [
            "💭 と marks quoted speech/thought",
            "💭 Always plain form before と",
            "💭 でしょう adds uncertainty"
        ],
        practicePrompts: [
            "How do I express my opinions politely?",
            "Teach me to report what someone said",
            "Explain Japanese indirect communication",
            "Practice giving predictions!"
        ],
        emoji: "🗨️"
    },

    {
        id: 22,
        title: "🔗 Lesson 22: The Book That I Read",
        topics: "Noun modification/Relative clauses",
        difficulty: "advanced",
        estimatedTime: "45 mins",
        grammar: [
            "Plain form + noun (modifying nouns)",
            "Relative clauses",
            "V dictionary form + noun",
            "の (nominalizer - replaces noun)"
        ],
        vocabulary: ["きます (wear-top)", "はきます (wear-bottom)", "かぶります (wear-head)", "かけます (wear-face)", "うまれます (be born)", "そだちます (grow up)"],
        description: "Make complex descriptions! 'The person who...' 'The place where...'",
        funFact: "👔 Japanese has different verbs for wearing different clothes: きる (shirt), はく (pants), かぶる (hat)!",
        quickTips: [
            "🔗 Plain form directly modifies nouns",
            "🔗 No 'who' or 'which' word needed!",
            "🔗 の can replace obvious nouns"
        ],
        practicePrompts: [
            "How do I say 'the person who is eating'?",
            "Teach me to create complex descriptions",
            "Explain Japanese relative clauses",
            "Practice modifying nouns!"
        ],
        emoji: "🔗"
    },

    {
        id: 23,
        title: "⏱️ Lesson 23: When I...",
        topics: "とき (when/while)",
        difficulty: "advanced",
        estimatedTime: "40 mins",
        grammar: [
            "V dictionary form + とき - when/while V",
            "V た + とき - when V-ed",
            "い-adj + とき",
            "な-adj な + とき",
            "Time relationships and context"
        ],
        vocabulary: ["とき (time/when)", "つけます (turn on)", "けします (turn off)", "あけます (open)", "しめます (close)", "いそぎます (hurry)", "まちがえます (make mistake)"],
        description: "Express timing precisely! When things happen in relation to each other.",
        funFact: "🕐 Japanese has many time expressions: うちに (while), あいだに (during), ながら (while doing)!",
        quickTips: [
            "⏰ とき = when/at the time",
            "⏰ Dictionary form = before/habitual",
            "⏰ Past form = after completion"
        ],
        practicePrompts: [
            "How do I say 'When I go to Japan...'?",
            "Teach me timing expressions",
            "Explain dictionary vs past + とき",
            "Create conditional time sentences!"
        ],
        emoji: "⏱️"
    },

    {
        id: 24,
        title: "🤝 Lesson 24: Do It For Me!",
        topics: "Giving/Receiving favors (て-form)",
        difficulty: "advanced",
        estimatedTime: "45 mins",
        grammar: [
            "V てあげます - do V for someone",
            "V てもらいます - have someone do V for me",
            "V てくれます - someone does V for me",
            "Benefactive expressions with て-form"
        ],
        vocabulary: ["てつだいます (help)", "なおします (fix)", "よやくします (reserve)", "とります (take photo)", "かたづけます (tidy up)", "おくります (send)", "つれていきます (take someone)"],
        description: "Favors and kindness! Express doing things for others and receiving help.",
        funFact: "🎁 Japanese people often say 'すみません' (sorry) when receiving help - acknowledging the burden!",
        quickTips: [
            "💝 てあげる = I do for you",
            "💝 てもらう = You do for me",
            "💝 てくれる = You do for me (emphasizes my benefit)"
        ],
        practicePrompts: [
            "How do I ask someone to help me?",
            "Teach me to express doing favors",
            "Explain the 3 benefactive verbs",
            "Create help-asking scenarios!"
        ],
        emoji: "🤝"
    },

    {
        id: 25,
        title: "🔮 Lesson 25: If/When That Happens...",
        topics: "たら conditional",
        difficulty: "advanced",
        estimatedTime: "45 mins",
        grammar: [
            "V たら - if/when V",
            "い-adj + かったら - if adj",
            "な-adj + だったら - if adj",
            "N + だったら - if N",
            "Conditional and hypothetical situations"
        ],
        vocabulary: ["つづけます (continue)", "みつかります (be found)", "やめます (quit)", "かちます (win)", "まけます (lose)", "おわります (finish)", "きまります (be decided)"],
        description: "Master conditionals! Talk about possibilities, hypotheticals, and plans.",
        funFact: "🌸 'もし桜が咲いたら...' (If the cherry blossoms bloom...) - Japanese love conditional predictions!",
        quickTips: [
            "🔮 たら = if/when (most versatile!)",
            "🔮 Can be real or hypothetical",
            "🔮 Often used with requests"
        ],
        practicePrompts: [
            "How do I say 'If it rains, I'll stay home'?",
            "Teach me conditional sentences",
            "Explain たら vs と vs ば",
            "Practice making plans with conditionals!"
        ],
        emoji: "🔮"
    },

    // 🎉 BONUS LESSONS - Culture & Practical Japanese
    {
        id: 26,
        title: "🍣 BONUS: Restaurant Japanese",
        topics: "Ordering, Restaurant phrases",
        difficulty: "beginner",
        estimatedTime: "30 mins",
        grammar: [
            "～をください - Please give me ~",
            "～にします - I'll have/choose ~",
            "おすすめは何ですか - What do you recommend?",
            "おいしい/まずい - delicious/bad tasting"
        ],
        vocabulary: ["メニュー (menu)", "ちゅうもん (order)", "おすすめ (recommendation)", "ラーメン", "すし", "てんぷら", "おちゃ (tea)", "みず (water)", "おかんじょう (bill)"],
        description: "🎌 Eat like a local! Master restaurant Japanese from entering to paying.",
        funFact: "🍜 In Japan, slurping noodles is polite - it shows the food is delicious!",
        quickTips: [
            "🍱 Say いらっしゃいませ when entering (staff greets you)",
            "🍱 Point at menu and say これをください",
            "🍱 Say ごちそうさまでした after eating"
        ],
        practicePrompts: [
            "Teach me a complete restaurant conversation",
            "How do I ask for recommendations?",
            "What phrases do I need to know?",
            "Practice ordering different foods!"
        ],
        emoji: "🍣"
    },

    {
        id: 27,
        title: "🏪 BONUS: Shopping & Numbers",
        topics: "Shopping phrases, Prices",
        difficulty: "beginner",
        estimatedTime: "30 mins",
        grammar: [
            "いくらですか - How much is it?",
            "～えん - yen",
            "もっと - more",
            "これ/それ/あれ in shopping context"
        ],
        vocabulary: ["かいます (buy)", "たかい (expensive)", "やすい (cheap)", "セール (sale)", "レジ (register)", "ふくろ (bag)", "ポイントカード (point card)"],
        description: "🛍️ Shop with confidence! Prices, bargaining, and shopping culture.",
        funFact: "🎌 Japan has amazing 100-yen stores (百均) - like dollar stores but better quality!",
        quickTips: [
            "💴 Numbers: 100円 (hyaku-en), 1000円 (sen-en)",
            "💴 No tipping in Japan!",
            "💴 Say レシートください for receipt"
        ],
        practicePrompts: [
            "Teach me to ask prices",
            "How do I bargain (if possible)?",
            "Practice clothing shopping!",
            "Explain Japanese shopping customs"
        ],
        emoji: "🏪"
    },

    {
        id: 28,
        title: "🚇 BONUS: Train & Travel",
        topics: "Transportation, Asking directions",
        difficulty: "beginner",
        estimatedTime: "35 mins",
        grammar: [
            "～へどうやっていきますか - How do I get to ~?",
            "～までどのぐらいかかりますか - How long to ~?",
            "まっすぐ/みぎ/ひだり - straight/right/left",
            "のりかえ - transfer"
        ],
        vocabulary: ["えき (station)", "ホーム (platform)", "でんしゃ (train)", "きっぷ (ticket)", "IC カード", "のりかえ (transfer)", "ろせん (line)", "しゅうてん (last stop)"],
        description: "🚄 Navigate Japan! Trains, subways, and getting around.",
        funFact: "🚄 Japanese trains are so punctual, the average delay is only 18 seconds!",
        quickTips: [
            "🗺️ IC cards (Suica/Pasmo) work everywhere!",
            "🗺️ Train lines have colors and numbers",
            "🗺️ Google Maps works great in Japan"
        ],
        practicePrompts: [
            "How do I buy a train ticket?",
            "Teach me to ask for directions",
            "Explain the train system",
            "Practice navigation scenarios!"
        ],
        emoji: "🚇"
    }
];

// Difficulty color coding
const DIFFICULTY_COLORS = {
    'absolute-beginner': '#10b981',
    'beginner': '#3b82f6',
    'intermediate': '#f59e0b',
    'advanced': '#ef4444'
};

// Export for use in CourseModule class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { N5_LESSONS, DIFFICULTY_COLORS };
}
