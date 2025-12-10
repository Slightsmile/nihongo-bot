// N5 Course Module - Enhanced for Beginners
// Combining Minna no Nihongo I, Genki I, and Japanese From Zero content
// Gamified learning with fun examples and interactive prompts

const N5_LESSONS = [
    // 🌟 BEGINNER FRIENDLY START
    {
        id: 0,
        title: "🎌 Welcome! Let's Start Japanese",
        topics: "Hiragana basics, Greetings, Fun facts",
        grammar: [
            "こんにちは (Hello)",
            "ありがとう (Thank you)",
            "はい/いいえ (Yes/No)",
            "すみません (Excuse me)"
        ],
        vocabulary: ["おはよう", "こんにちは", "こんばんは", "さようなら", "ありがとう", "すみません", "はい", "いいえ"],
        description: "🎉 Your first step into Japanese! Learn greetings and basic phrases everyone needs.",
        difficulty: "beginner",
        funFact: "Did you know? Japanese has 3 writing systems: Hiragana (ひらがな), Katakana (カタカナ), and Kanji (漢字)!",
        quickTips: [
            "Start with Hiragana - it's the foundation!",
            "Practice saying 'こんにちは' (konnichiwa) 5 times out loud",
            "Japanese doesn't have spaces between words"
        ],
        practicePrompts: [
            "How do I greet someone in the morning?",
            "What's the difference between ありがとう and ありがとうございます?",
            "Teach me the Hiragana for 'a, i, u, e, o'",
            "Let's practice basic greetings together!"
        ]
    },
    {
        id: 1,
        title: "👋 Lesson 1: Self-Introduction",
        topics: "です、の、か、さん",
        grammar: [
            "わたしは [name] です (I am [name])",
            "N1 は N2 です (N1 is N2)",
            "N1 は N2 じゃありません (N1 is not N2)",
            "N1 の N2 (N2 of N1)",
            "～さん (Mr./Ms./Mrs.)"
        ],
        vocabulary: ["わたし", "あなた", "～さん", "せんせい", "がくせい", "～じん", "かいしゃいん", "なまえ"],
        description: "Introduce yourself like a pro! Learn to say your name, nationality, and what you do.",
        difficulty: "beginner",
        funFact: "In Japan, people usually bow when greeting instead of shaking hands!",
        quickTips: [
            "Always use さん after someone's name (except your own!)",
            "わたし means 'I' - easy to remember!",
            "です makes any sentence polite"
        ],
        practicePrompts: [
            "Help me introduce myself in Japanese",
            "How do I say 'I am a student from America'?",
            "What's the difference between です and だ?",
            "Create a fun self-introduction dialogue for me"
        ]
    },
    {
        id: 2,
        title: "📦 Lesson 2: Things Around Us",
        topics: "これ・それ・あれ、この・その・あの",
        grammar: [
            "これ は [item] です (This is [item])",
            "それ/あれ は N です (That/That over there is N)",
            "この/その/あの N (this/that N)",
            "N1 の N2 (possessive - N2 of N1)",
            "～も (also/too)"
        ],
        vocabulary: ["ほん", "じしょ", "ノート", "ペン", "かばん", "けいたい", "パソコン", "くるま"],
        description: "Point at things and name them! Learn to talk about objects near and far.",
        difficulty: "beginner",
        funFact: "これ (this), それ (that), あれ (that over there) - Japanese has 3 distances!",
        quickTips: [
            "これ = close to you, それ = close to listener, あれ = far from both",
            "この always needs a noun after it",
            "Use も to say 'also' or 'too'"
        ],
        practicePrompts: [
            "How do I say 'This is my book'?",
            "Explain the difference between これ and この",
            "Give me 5 sentences using それ",
            "Let's practice pointing at objects in Japanese!"
        ]
    },
    {
        id: 3,
        title: "📍 Lesson 3: Where is it?",
        topics: "ここ・そこ・あそこ、どこ",
        grammar: [
            "ここ/そこ/あそこ (here/there/over there)",
            "N は place です (N is at place)",
            "どこですか (Where is it?)",
            "N1 の N2 (location relationship)"
        ],
        vocabulary: ["きょうしつ", "トイレ", "レストラン", "えき", "うち", "がっこう", "みせ", "びょういん"],
        description: "Never get lost! Learn to ask and answer 'where' questions.",
        difficulty: "beginner",
        funFact: "Japanese trains are SO punctual, being 1 minute late makes national news!",
        quickTips: [
            "どこ means 'where' - super useful!",
            "ここ, そこ, あそこ follow same pattern as これ, それ, あれ",
            "Add ですか to any statement to make it a question"
        ],
        practicePrompts: [
            "How do I ask 'Where is the bathroom?'",
            "Teach me directions vocabulary",
            "Create a map navigation dialogue",
            "Practice asking where things are"
        ]
    },
    {
        id: 4,
        title: "⏰ Lesson 4: Time & Daily Life",
        topics: "Time, Daily activities",
        grammar: [
            "～じ (o'clock) ～ふん (minutes)",
            "V ます (present/future tense)",
            "N を V (object marker)",
            "～から～まで (from ~ to ~)",
            "いつ (when)"
        ],
        vocabulary: ["おきます", "ねます", "たべます", "いきます", "べんきょうします", "あさ", "ひる", "よる"],
        description: "Tell time and talk about your daily routine like a native!",
        difficulty: "beginner",
        funFact: "In Japan, the day is often divided into あさ (morning), ひる (afternoon), よる (night)",
        quickTips: [
            "Time: 1時 (1 o'clock), 30分 (30 minutes)",
            "ます form is polite - always use with people you just met",
            "から = from, まで = until/to"
        ],
        practicePrompts: [
            "How do I say 'I wake up at 7 o'clock'?",
            "Teach me to count hours and minutes",
            "Help me describe my daily schedule",
            "Quiz me on time expressions!"
        ]
    },
    {
        id: 5,
        title: "🚃 Lesson 5: Let's Go Places!",
        topics: "Movement verbs, Transportation",
        grammar: [
            "place へ/に 行きます (go to place)",
            "place へ/に 来ます (come to place)",
            "place へ/に 帰ります (return to place)",
            "transportation で (by transportation)",
            "person と (with person)"
        ],
        vocabulary: ["いきます", "きます", "かえります", "でんしゃ", "バス", "タクシー", "じてんしゃ", "あるきます"],
        description: "Travel vocabulary! Learn to say where you're going and how you'll get there.",
        difficulty: "beginner",
        funFact: "Tokyo's train system carries 8.7 million people DAILY - it's incredibly efficient!",
        quickTips: [
            "へ and に both mean 'to' for destinations",
            "で shows HOW you travel (by train, by car)",
            "と means 'with someone'"
        ],
        practicePrompts: [
            "How do I say 'I go to school by bus'?",
            "Teach me all transportation words",
            "Create a travel dialogue for me",
            "Practice asking 'How do you get to work?'"
        ]
    },
    {
        id: 6,
        title: "🍜 Lesson 6: Eating & Shopping",
        topics: "Action verbs, を particle",
        grammar: [
            "N を V (direct object marker)",
            "place で V (do V at place)",
            "N をください (please give me N)",
            "V ましょう (let's V)",
            "V ませんか (won't you V?)"
        ],
        vocabulary: ["たべます", "のみます", "かいます", "よみます", "みます", "ききます", "かきます"],
        description: "Order food, shop, and do everyday activities with confidence!",
        difficulty: "beginner",
        funFact: "In Japanese restaurants, saying いただきます before eating shows gratitude!",
        quickTips: [
            "を marks what you're doing (eating sushi, drinking tea)",
            "ください is like saying 'please' when ordering",
            "ましょう = 'let's do something together!'"
        ],
        practicePrompts: [
            "How do I order ramen in Japanese?",
            "Teach me restaurant vocabulary",
            "Practice shopping dialogue with me",
            "What's the difference between を and で?"
        ]
    },
    {
        id: 7,
        title: "Lesson 7: Giving & Receiving",
        topics: "あげます・もらいます・くれます",
        grammar: [
            "N1 は N2 に N3 を あげます (N1 gives N3 to N2)",
            "N1 は N2 に N3 を もらいます (N1 receives N3 from N2)",
            "N1 は N2 に N3 を くれます (N1 gives N3 to me)",
            "Tool/means で (using/with)"
        ],
        vocabulary: ["あげます", "もらいます", "くれます", "おくります", "かします", "おしえます", "ならいます"],
        description: "Learn verbs of giving and receiving, and understand perspective in Japanese."
    },
    {
        id: 8,
        title: "Lesson 8: Adjectives",
        topics: "い-adjectives, な-adjectives",
        grammar: [
            "い-adjective conjugation (affirmative/negative)",
            "な-adjective conjugation",
            "Adjective + です (polite form)",
            "～くて (connecting adjectives)",
            "とても/あまり (very/not very)"
        ],
        vocabulary: ["おおきい", "ちいさい", "あたらしい", "ふるい", "いい", "わるい", "きれい", "しずか"],
        description: "Learn two types of adjectives and how to describe things and people."
    },
    {
        id: 9,
        title: "Lesson 9: Likes & Dislikes",
        topics: "すき・きらい、じょうず・へた",
        grammar: [
            "N が すきです (like N)",
            "N が きらいです (dislike N)",
            "N が じょうずです (good at N)",
            "N が へたです (poor at N)",
            "よく/だいたい/たくさん/すこし (frequency/quantity adverbs)"
        ],
        vocabulary: ["すき", "きらい", "じょうず", "へた", "りょうり", "スポーツ", "おんがく", "うた"],
        description: "Learn to express preferences, abilities, and degrees of proficiency."
    },
    {
        id: 10,
        title: "Lesson 10: Existence Verbs",
        topics: "あります・います、に (location)",
        grammar: [
            "place に N があります (N exists at place - inanimate)",
            "place に N がいます (N exists at place - animate)",
            "N1 と N2 (and - listing items)",
            "Position words (うえ、した、まえ、うしろ、etc.)"
        ],
        vocabulary: ["あります", "います", "うえ", "した", "まえ", "うしろ", "となり", "ちかく", "なか"],
        description: "Learn existence verbs and how to describe where things and people are located."
    },
    {
        id: 11,
        title: "Lesson 11: Quantity & Counters",
        topics: "Counters, quantity expressions",
        grammar: [
            "Number + counter",
            "Common counters (～つ、～人、～枚、～冊、～本、～台)",
            "N は number あります/います",
            "どのくらい/いくつ (how many/how much)"
        ],
        vocabulary: ["ひとつ", "ふたつ", "みっつ", "ひとり", "ふたり", "なんにん", "いくつ", "なんまい"],
        description: "Learn counting systems and various counters for different objects."
    },
    {
        id: 12,
        title: "Lesson 12: Past Tense",
        topics: "ました (past tense)",
        grammar: [
            "V ました (past affirmative)",
            "V ませんでした (past negative)",
            "い-adjective past (～かったです)",
            "な-adjective past (～でした)",
            "Time expressions (きのう、せんしゅう、etc.)"
        ],
        vocabulary: ["きのう", "おととい", "せんしゅう", "せんげつ", "きょねん", "～まえ", "～ぐらい"],
        description: "Learn to talk about past events and completed actions."
    },
    {
        id: 13,
        title: "Lesson 13: Wanting & Desires",
        topics: "ほしい、～たい",
        grammar: [
            "N が ほしいです (want N)",
            "V たいです (want to V)",
            "N を V に 行きます (go to V N)",
            "どこか/なにか (somewhere/something)"
        ],
        vocabulary: ["ほしい", "たい", "のみもの", "たべもの", "プレゼント", "おかね", "じかん", "やすみ"],
        description: "Learn to express wants, desires, and intentions."
    },
    {
        id: 14,
        title: "Lesson 14: Requests & Permissions",
        topics: "～てください、～てもいいです",
        grammar: [
            "V てください (please do V)",
            "V ましょうか (shall I V?)",
            "V て form conjugation",
            "V ています (continuous action)"
        ],
        vocabulary: ["まって", "よんで", "きて", "して", "みせて", "おしえて", "てつだって", "はなして"],
        description: "Learn て-form verbs and how to make requests politely."
    },
    {
        id: 15,
        title: "Lesson 15: Permission & Prohibition",
        topics: "～てもいいです、～てはいけません",
        grammar: [
            "V てもいいです (may V / it's okay to V)",
            "V てはいけません (must not V)",
            "V ています (current state/habitual action)",
            "V ています (wearing/持っている)"
        ],
        vocabulary: ["すわります", "たちます", "つかいます", "とります", "しゃしん", "はいります", "もって"],
        description: "Learn to ask for and give permission, and express prohibition."
    },
    {
        id: 16,
        title: "Lesson 16: Connecting Sentences",
        topics: "～て、～て (sentence connection)",
        grammar: [
            "V1 て、V2 (do V1 and then V2)",
            "Adj1 て、Adj2 (connecting adjectives)",
            "Sequential actions with て-form",
            "から (because/so)"
        ],
        vocabulary: ["おきて", "あらって", "きて", "たべて", "のんで", "かえって", "ねて", "それから"],
        description: "Learn to connect multiple actions and describe sequences of events."
    },
    {
        id: 17,
        title: "Lesson 17: Must & Should",
        topics: "～なければなりません、～なくてもいいです",
        grammar: [
            "V なければなりません (must V)",
            "V なくてもいいです (don't have to V)",
            "Negative form conjugation",
            "Obligations and duties"
        ],
        vocabulary: ["かえします", "だします", "きめます", "しらせます", "つたえます", "れんらくします"],
        description: "Learn to express obligations, requirements, and what's not necessary."
    },
    {
        id: 18,
        title: "Lesson 18: Abilities & Hobbies",
        topics: "できます、の (nominalizer)",
        grammar: [
            "N ができます (can do N)",
            "V dictionary form ことができます (can V)",
            "N の まえに (before N)",
            "N の あとで (after N)",
            "Hobby expressions"
        ],
        vocabulary: ["できます", "あそびます", "およぎます", "うたいます", "ひきます", "しゅみ", "ピアノ"],
        description: "Learn to talk about abilities, hobbies, and what you can or cannot do."
    },
    {
        id: 19,
        title: "Lesson 19: Experience",
        topics: "～たことがあります (have done)",
        grammar: [
            "V たことがあります (have experienced V)",
            "V たことがありません (have never V)",
            "～や～など (and...etc.)",
            "Talking about experiences"
        ],
        vocabulary: ["のぼります", "とまります", "さわります", "けんぶつします", "りょこう", "けいけん"],
        description: "Learn to talk about past experiences and things you have or haven't done."
    },
    {
        id: 20,
        title: "Lesson 20: Plain Form",
        topics: "Plain form (casual speech)",
        grammar: [
            "Verb plain form (present/past, affirmative/negative)",
            "い-adjective plain form",
            "な-adjective plain form",
            "と思います (I think that...)"
        ],
        vocabulary: ["おもいます", "いいます", "はなします", "かんがえます", "わかります", "しります"],
        description: "Learn casual/plain form of verbs and adjectives, and how to express thoughts."
    },
    {
        id: 21,
        title: "Lesson 21: Reasons & Explanations",
        topics: "～と思います、～と言います",
        grammar: [
            "と思います (I think that...)",
            "と言います (say that...)",
            "Plain form in embedded clauses",
            "～でしょう (probably)"
        ],
        vocabulary: ["さがします", "なくします", "おとします", "さいふ", "かぎ", "しらべます", "ちがいます"],
        description: "Learn to report what others say, express thoughts, and make predictions."
    },
    {
        id: 22,
        title: "Lesson 22: Modifying Nouns",
        topics: "Noun modification (relative clauses)",
        grammar: [
            "Plain form + N (modifying nouns)",
            "Verb dictionary form + N",
            "Relative clauses",
            "の (nominalizer in place of noun)"
        ],
        vocabulary: ["きます", "はきます", "かぶります", "かけます", "うまれます", "ぼうし", "めがね", "ズボン"],
        description: "Learn to modify nouns with verbs and adjectives to create complex descriptions."
    },
    {
        id: 23,
        title: "Lesson 23: When & Conditionals",
        topics: "～とき (when)",
        grammar: [
            "V dictionary form + とき (when/while V)",
            "V た + とき (when V-ed)",
            "い-adj + とき",
            "な-adj + とき",
            "Time relationships"
        ],
        vocabulary: ["きります", "つけます", "けします", "あけます", "しめます", "いそぎます", "まちがえます"],
        description: "Learn to express when things happen and describe timing of actions."
    },
    {
        id: 24,
        title: "Lesson 24: Giving & Receiving (Favors)",
        topics: "～てあげます、～てもらいます、～てくれます",
        grammar: [
            "V てあげます (do V for someone)",
            "V てもらいます (have someone do V)",
            "V てくれます (someone does V for me)",
            "Benefactive expressions"
        ],
        vocabulary: ["なおします", "よやくします", "とります", "かたづけます", "だします", "つれていきます"],
        description: "Learn to express giving and receiving favors using て-form verbs."
    },
    {
        id: 25,
        title: "Lesson 25: Conditionals",
        topics: "～たら (if/when)",
        grammar: [
            "V たら (if/when V)",
            "い-adj + かったら",
            "な-adj + だったら",
            "N + だったら",
            "Conditional expressions"
        ],
        vocabulary: ["つづけます", "みつかります", "やめます", "かちます", "まけます", "おわります", "きまります"],
        description: "Learn conditional forms to express 'if' and 'when' in various situations."
    }
];

class CourseModule {
    constructor() {
        this.courseHeader = document.getElementById('courseHeader');
        this.courseContent = document.getElementById('courseContent');
        this.lessonsList = document.getElementById('lessonsList');
        this.currentLesson = null;
        this.completedLessons = this.loadProgress();
        
        this.init();
    }

    init() {
        // Toggle course module
        this.courseHeader.addEventListener('click', () => this.toggleCourse());
        
        // Render all lessons
        this.renderLessons();
        
        // Update progress
        this.updateProgress();
    }

    toggleCourse() {
        this.courseHeader.classList.toggle('collapsed');
        this.courseContent.classList.toggle('collapsed');
    }

    renderLessons() {
        this.lessonsList.innerHTML = '';
        
        N5_LESSONS.forEach(lesson => {
            const lessonItem = this.createLessonElement(lesson);
            this.lessonsList.appendChild(lessonItem);
        });
    }

    createLessonElement(lesson) {
        const isCompleted = this.completedLessons.includes(lesson.id);
        const isActive = this.currentLesson === lesson.id;
        
        const div = document.createElement('div');
        div.className = `lesson-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
        div.dataset.lessonId = lesson.id;
        
        div.innerHTML = `
            <div class="lesson-number">${lesson.id}</div>
            <div class="lesson-info">
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-topics">${lesson.topics}</div>
            </div>
            ${isCompleted ? `
                <div class="lesson-status">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
            ` : ''}
        `;
        
        div.addEventListener('click', () => this.selectLesson(lesson));
        
        return div;
    }

    selectLesson(lesson) {
        this.currentLesson = lesson.id;
        
        // Update UI
        document.querySelectorAll('.lesson-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-lesson-id="${lesson.id}"]`).classList.add('active');
        
        // Load lesson content into chat
        this.loadLessonContent(lesson);
    }

    loadLessonContent(lesson) {
        // Get the NihongoBot instance and trigger lesson content
        if (window.nihongoBot) {
            // Clear welcome screen
            const welcomeScreen = document.getElementById('welcomeScreen');
            if (welcomeScreen && !welcomeScreen.classList.contains('hidden')) {
                welcomeScreen.classList.add('fade-out');
                setTimeout(() => welcomeScreen.classList.add('hidden'), 300);
            }
            
            // Format lesson content as a message
            const lessonContent = this.formatLessonContent(lesson);
            
            // Add as system message
            window.nihongoBot.addMessage('assistant', lessonContent);
            
            // Optionally send to backend for AI interaction
            const prompt = `I want to learn ${lesson.title}. Please teach me the following grammar points and provide examples:\n\n${lesson.grammar.join('\n')}`;
            window.nihongoBot.messageInput.value = prompt;
            // Auto-send or let user review and send
            // window.nihongoBot.sendMessage();
        }
    }

    formatLessonContent(lesson) {
        return `
# ${lesson.title}

📖 **Description:** ${lesson.description}

## 🎯 Topics Covered
${lesson.topics}

## 📝 Grammar Points
${lesson.grammar.map((g, i) => `${i + 1}. ${g}`).join('\n')}

## 📚 Key Vocabulary
${lesson.vocabulary.slice(0, 8).join('、')}${lesson.vocabulary.length > 8 ? '...' : ''}

---

💡 **Ready to practice?** Ask me questions about any grammar point, request examples, or let's do some exercises together!

Try asking:
- "Explain the first grammar point with examples"
- "Give me practice sentences for this lesson"
- "Quiz me on lesson ${lesson.id}"
- "What's the difference between は and が in this lesson?"
        `.trim();
    }

    markLessonComplete(lessonId) {
        if (!this.completedLessons.includes(lessonId)) {
            this.completedLessons.push(lessonId);
            this.saveProgress();
            this.updateProgress();
            this.renderLessons();
        }
    }

    updateProgress() {
        const total = N5_LESSONS.length;
        const completed = this.completedLessons.length;
        const percentage = Math.round((completed / total) * 100);
        
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${completed} of ${total} lessons`;
        }
    }

    loadProgress() {
        const saved = localStorage.getItem('n5_progress');
        return saved ? JSON.parse(saved) : [];
    }

    saveProgress() {
        localStorage.setItem('n5_progress', JSON.stringify(this.completedLessons));
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
            this.completedLessons = [];
            this.currentLesson = null;
            this.saveProgress();
            this.updateProgress();
            this.renderLessons();
        }
    }
}

// Initialize course module when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.courseModule = new CourseModule();
});
