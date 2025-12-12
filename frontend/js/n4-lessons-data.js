// N4 Course Module - Comprehensive JLPT N4 Journey

const N4_LESSONS = [
    {
        id: 401,
        displayNumber: "N4-01",
        order: 1,
        section: "🔁 Foundation Refresh",
        sectionOrder: 1,
        sectionDescription: "Reset your foundation so every new N4 structure feels natural and stable.",
        title: "Polite & Plain Mode Reset",
        emoji: "🔁",
        description: "Refresh polite/plain conversions, core particles, and て-form flow before diving into new grammar.",
        topics: "Polite ↔ plain conversions, 〜ている states, permission and rules, counter usage",
        difficulty: "beginner",
        estimatedTime: "45 minutes",
        grammar: [
            "丁寧形↔普通形の変換と活用チェック",
            "〜ている for ongoing actions, habits, and resulting states",
            "〜てもいい / 〜てはいけない to handle permission and rules",
            "Particle refresher: は vs が, を, に, で, へ nuance",
            "Counting with 人・本・枚・回 and other core counters",
            "Question endings 〜の / 〜か for casual vs polite inquiries"
        ],
        vocabulary: [
            "復習 (ふくしゅう) - review",
            "丁寧 (ていねい) - polite",
            "普通形 (ふつうけい) - plain form",
            "許可 (きょか) - permission",
            "禁止 (きんし) - prohibition",
            "習慣 (しゅうかん) - habit",
            "最近 (さいきん) - recently",
            "報告 (ほうこく) - report",
            "準備 (じゅんび) - preparation",
            "改善 (かいぜん) - improvement",
            "成長 (せいちょう) - growth",
            "継続 (けいぞく) - continuation"
        ],
        kanjiFocus: [
            "丁寧 (ていねい) - polite",
            "復習 (ふくしゅう) - review",
            "習慣 (しゅうかん) - habit",
            "準備 (じゅんび) - preparation"
        ],
        quickTips: [
            "• Shadow short dialogs twice: first in polite style, then convert everything into plain form aloud.",
            "• Narrate your daily routine using 〜ている to confirm you can describe states vs actions naturally."
        ],
        practicePrompts: [
            "Convert three polite workplace sentences into plain form and explain the nuance shift.",
            "Ask for permission using 〜てもいいですか in two different contexts.",
            "Describe a habit using 〜ている and include an appropriate counter."
        ],
        funFact: "Plain-form endings dominate dictionaries, manga, and casual speech, so flexibility between styles unlocks native content faster."
    },
    {
        id: 402,
        displayNumber: "N4-02",
        order: 2,
        section: "🔁 Foundation Refresh",
        sectionOrder: 1,
        title: "Particle Power-Up",
        emoji: "🎯",
        description: "Strengthen particle nuance so your intermediate sentences stay precise and natural.",
        topics: "Contrastive は vs が, に vs で, directional へ, deadline particles まで / までに",
        difficulty: "beginner",
        estimatedTime: "40 minutes",
        grammar: [
            "Contrast は vs が for topic vs focus emphasis",
            "Object marker を with movement verbs (道を歩く, 橋を渡る)",
            "Location に vs で advanced nuance for existence vs action",
            "Directional particle へ to show gentle direction or destination",
            "Deadlines with まで and までに",
            "Double particle patterns such as には / では for contrast"
        ],
        vocabulary: [
            "目的 (もくてき) - purpose",
            "割合 (わりあい) - ratio",
            "範囲 (はんい) - range",
            "現象 (げんしょう) - phenomenon",
            "結果 (けっか) - result",
            "原因 (げんいん) - cause",
            "途中 (とちゅう) - on the way",
            "周辺 (しゅうへん) - surrounding area",
            "順番 (じゅんばん) - order/sequence",
            "制限 (せいげん) - restriction",
            "例外 (れいがい) - exception",
            "状況 (じょうきょう) - situation"
        ],
        kanjiFocus: [
            "目的 (もくてき) - purpose",
            "範囲 (はんい) - range",
            "結果 (けっか) - result",
            "状況 (じょうきょう) - situation"
        ],
        quickTips: [
            "• Shadow NHK Easy clips and mark every は / が switch—ask yourself why the focus changed.",
            "• Build a particle comparison chart using に, へ, で with real sentences from study resources."
        ],
        practicePrompts: [
            "Explain the nuance between 東京に住んでいる and 東京で働いている.",
            "Create a deadline sentence using までに for an assignment.",
            "Write a mini dialogue that uses では to contrast two weekend plans."
        ],
        funFact: "You will hear には in news openings to highlight contrast, so training your ear for double particles pays off quickly."
    },
    {
        id: 403,
        displayNumber: "N4-03",
        order: 3,
        section: "🧱 Core Grammar Pillars",
        sectionOrder: 2,
        sectionDescription: "Master the essential N4 grammar blocks that appear in every JLPT section.",
        title: "Explaining Reasons Clearly",
        emoji: "🧱",
        description: "Learn the nuance differences between 〜から, 〜ので, 〜ために, and 〜し to give smooth explanations.",
        topics: "Cause and effect connectors, polite vs casual reasons, purpose statements",
        difficulty: "intermediate",
        estimatedTime: "50 minutes",
        grammar: [
            "〜ので polite reason emphasizing natural cause",
            "〜から casual reason expressing personal judgment",
            "〜ために for purpose versus cause depending on context",
            "〜し to stack multiple reasons or qualities",
            "〜て (reason) for sequential causal links",
            "〜のおかげで / 〜せいで to show positive vs negative outcomes"
        ],
        vocabulary: [
            "理由 (りゆう) - reason",
            "原因 (げんいん) - cause",
            "結果 (けっか) - result",
            "目的 (もくてき) - purpose",
            "事情 (じじょう) - circumstances",
            "状況 (じょうきょう) - situation",
            "影響 (えいきょう) - influence",
            "改善 (かいぜん) - improvement",
            "解決 (かいけつ) - resolution",
            "準備 (じゅんび) - preparation",
            "予防 (よぼう) - prevention",
            "期待 (きたい) - expectation"
        ],
        kanjiFocus: [
            "原因 (げんいん) - cause",
            "結果 (けっか) - result",
            "事情 (じじょう) - circumstances",
            "影響 (えいきょう) - influence"
        ],
        quickTips: [
            "• Pair each reason connector with a sample sentence from a JLPT workbook and mark whether it sounds formal or casual.",
            "• Transform purpose sentences into reason sentences to feel the nuance shift between 〜ために (purpose) and 〜から (cause)."
        ],
        practicePrompts: [
            "Explain why you chose Japanese using both 〜から and 〜ので.",
            "Give two reasons for a company policy using 〜し to stack explanations.",
            "Describe a negative outcome using 〜せいで, then rewrite it with 〜おかげで for a positive twist."
        ],
        funFact: "Customer service scripts prefer 〜ので because it sounds softer and less direct than 〜から."
    },
    {
        id: 404,
        displayNumber: "N4-04",
        order: 4,
        section: "🧱 Core Grammar Pillars",
        sectionOrder: 2,
        title: "Advice & Expectations Toolkit",
        emoji: "🩺",
        description: "Deliver advice, express duty, and predict outcomes with natural confidence.",
        topics: "Giving advice, expectations, strong beliefs, habit decisions",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "〜たほうがいい / 〜ないほうがいい for advice",
            "〜べきだ to express duty or responsibility",
            "〜はずだ when evidence supports an expectation",
            "〜に違いない for strong conviction",
            "〜ことにする / 〜ことにした to highlight personal decisions",
            "〜ことにしている for established habits"
        ],
        vocabulary: [
            "助言 (じょげん) - advice",
            "期待 (きたい) - expectation",
            "義務 (ぎむ) - duty",
            "習慣 (しゅうかん) - habit",
            "必要 (ひつよう) - necessity",
            "健康 (けんこう) - health",
            "規則 (きそく) - rule",
            "連絡 (れんらく) - contact",
            "配慮 (はいりょ) - consideration",
            "心配 (しんぱい) - worry",
            "自信 (じしん) - confidence",
            "継続 (けいぞく) - continuation"
        ],
        kanjiFocus: [
            "義務 (ぎむ) - duty",
            "配慮 (はいりょ) - consideration",
            "継続 (けいぞく) - continuation",
            "期待 (きたい) - expectation"
        ],
        quickTips: [
            "• Give yourself two lifestyle tips daily using 〜たほうがいい to keep the pattern active.",
            "• Listen for 〜はず in dramas when characters predict outcomes, and note what evidence they cite."
        ],
        practicePrompts: [
            "Advise a friend about study habits using 〜たほうがいい and 〜ないほうがいい.",
            "Write a sentence expressing strong belief using 〜に違いない about tomorrow’s weather.",
            "Describe a company rule with 〜べきだ and explain why."
        ],
        funFact: "Because 〜べきだ can sound forceful, coworkers often soften it to 〜ほうがいいですよ in real offices."
    },
    {
        id: 405,
        displayNumber: "N4-05",
        order: 5,
        section: "🧱 Core Grammar Pillars",
        sectionOrder: 2,
        title: "Decisions & Intentions in Motion",
        emoji: "🗂️",
        description: "Express resolutions, habits, and indirect instructions like a pro.",
        topics: "Making decisions, establishing habits, indirect commands",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "〜ことにする for personal decisions",
            "〜ことにしている to show continuing habits",
            "〜ことになる when decisions are made externally",
            "〜ようにする for conscious effort",
            "〜ように言う / 言われる for indirect commands",
            "〜ようにお願いする to make polite requests"
        ],
        vocabulary: [
            "決定 (けってい) - decision",
            "努力 (どりょく) - effort",
            "習慣 (しゅうかん) - habit",
            "計画 (けいかく) - plan",
            "継続 (けいぞく) - continuation",
            "改善 (かいぜん) - improvement",
            "依頼 (いらい) - request",
            "指示 (しじ) - instruction",
            "準備 (じゅんび) - preparation",
            "実行 (じっこう) - execution",
            "達成 (たっせい) - achievement",
            "調整 (ちょうせい) - adjustment"
        ],
        kanjiFocus: [
            "決定 (けってい) - decision",
            "努力 (どりょく) - effort",
            "依頼 (いらい) - request",
            "達成 (たっせい) - achievement"
        ],
        quickTips: [
            "• Build a habit log where you alternate 〜ことにする and 〜ことにしている sentences for each goal.",
            "• Rewrite direct commands from textbooks into 〜ように言われた to practice polite workplace reporting."
        ],
        practicePrompts: [
            "Describe a resolution you made this year using 〜ことにした.",
            "Explain a team rule decided by management using 〜ことになっています.",
            "Ask a junior colleague politely using 〜ようにしてください."
        ],
        funFact: "Japanese companies often announce policy shifts with 〜ことになりました, signaling the decision came from higher management."
    },
    {
        id: 406,
        displayNumber: "N4-06",
        order: 6,
        section: "🧱 Core Grammar Pillars",
        sectionOrder: 2,
        title: "Observations & Appearances",
        emoji: "👀",
        description: "Judge similarities, impressions, and hearsay with the right nuance.",
        topics: "Similarity, appearance, hearsay markers",
        difficulty: "intermediate",
        estimatedTime: "40 minutes",
        grammar: [
            "〜ようだ for objective observation",
            "〜みたいだ for casual comparisons",
            "〜らしい to report hearsay based on sources",
            "〜そうだ (hearsay) vs 〜そうな (appearance)",
            "〜ように見える to describe perceived change",
            "Combining observation expressions with adjectives and nouns"
        ],
        vocabulary: [
            "様子 (ようす) - appearance",
            "雰囲気 (ふんいき) - atmosphere",
            "印象 (いんしょう) - impression",
            "推測 (すいそく) - guess",
            "証拠 (しょうこ) - evidence",
            "外見 (がいけん) - outward look",
            "噂 (うわさ) - rumor",
            "情報 (じょうほう) - information",
            "自信 (じしん) - confidence",
            "落ち着く (おちつく) - to calm down",
            "明るい (あかるい) - cheerful",
            "静か (しずか) - quiet"
        ],
        kanjiFocus: [
            "様子 (ようす) - appearance",
            "印象 (いんしょう) - impression",
            "噂 (うわさ) - rumor",
            "情報 (じょうほう) - information"
        ],
        quickTips: [
            "• Compare two people using all four expressions (〜ようだ, 〜みたいだ, 〜らしい, 〜そうだ) and notice subtle differences.",
            "• When reading reviews, highlight which sentences are direct facts vs hearsay markers like 〜そうです."
        ],
        practicePrompts: [
            "Describe a coworker’s mood using 〜そうだ and 〜ようだ.",
            "Report a rumor you heard with 〜らしい and explain the source.",
            "Write two sentences comparing cities using 〜みたいだ for casual speech."
        ],
        funFact: "Because 〜みたいだ started as a colloquial pattern, textbooks still flag it as casual; business Japanese prefers 〜ようだ."
    },
    {
        id: 407,
        displayNumber: "N4-07",
        order: 7,
        section: "🧱 Core Grammar Pillars",
        sectionOrder: 2,
        title: "Ease, Tendency & Subtle Feelings",
        emoji: "🌦️",
        description: "Describe ease, awkwardness, and subtle tendencies with natural expressions.",
        topics: "Ease vs difficulty, slight conditions, behavioral tendencies",
        difficulty: "intermediate",
        estimatedTime: "40 minutes",
        grammar: [
            "〜やすい / 〜にくい to describe ease or difficulty",
            "〜づらい for awkward or uncomfortable actions",
            "〜がち showing negative tendencies",
            "〜ぎみ to express slight condition",
            "〜っぽい casual tendency or characteristic",
            "Comparing nuance between 〜ぎみ and 〜っぽい"
        ],
        vocabulary: [
            "体調 (たいちょう) - physical condition",
            "傾向 (けいこう) - tendency",
            "疲労 (ひろう) - fatigue",
            "緊張 (きんちょう) - nervousness",
            "集中 (しゅうちゅう) - concentration",
            "効率 (こうりつ) - efficiency",
            "面倒 (めんどう) - troublesome",
            "慎重 (しんちょう) - careful",
            "怠け者 (なまけもの) - lazy person",
            "依存 (いぞん) - dependence",
            "誘惑 (ゆうわく) - temptation",
            "改善 (かいぜん) - improvement"
        ],
        kanjiFocus: [
            "傾向 (けいこう) - tendency",
            "効率 (こうりつ) - efficiency",
            "緊張 (きんちょう) - nervousness",
            "疲労 (ひろう) - fatigue"
        ],
        quickTips: [
            "• Pair 〜やすい / 〜にくい with verbs from your work or hobbies to make memorable phrases.",
            "• Track your mood for a week using 〜ぎみ or 〜っぽい sentences to feel nuance differences."
        ],
        practicePrompts: [
            "Describe a device that is easy to use with 〜やすい and explain why.",
            "Write about days when you tend to feel tired using 〜がち.",
            "Make a cautionary sentence about a slight cold using 〜気味."
        ],
        funFact: "In polite speech, 〜づらい is often replaced with 〜にくい, but you will still hear 〜づらい in customer complaints."
    },
    {
        id: 408,
        displayNumber: "N4-08",
        order: 8,
        section: "🧱 Core Grammar Pillars",
        sectionOrder: 2,
        title: "Degrees, Limits & Minimalism",
        emoji: "⚖️",
        description: "Talk about excess, scarcity, and nothing-but situations with precision.",
        topics: "Excessive amounts, minimal amounts, limited actions",
        difficulty: "intermediate",
        estimatedTime: "40 minutes",
        grammar: [
            "〜すぎる to express excess",
            "〜だけ / 〜しか〜ない for limiting quantities",
            "〜ばかり describing “nothing but”",
            "〜ばかりいる for repetitive actions",
            "〜っきり indicating something happens only once",
            "Using 〜ほど to compare degrees"
        ],
        vocabulary: [
            "過労 (かろう) - overwork",
            "節約 (せつやく) - saving",
            "最低 (さいてい) - minimum",
            "十分 (じゅうぶん) - enough",
            "大量 (たいりょう) - large quantity",
            "不足 (ふそく) - shortage",
            "調整 (ちょうせい) - adjustment",
            "節度 (せつど) - moderation",
            "偏る (かたよる) - to lean / be biased",
            "均等 (きんとう) - balance",
            "充電 (じゅうでん) - recharge",
            "余裕 (よゆう) - spare time"
        ],
        kanjiFocus: [
            "過 (か) - excess",
            "不足 (ふそく) - shortage",
            "節約 (せつやく) - saving",
            "偏 (かた) - bias"
        ],
        quickTips: [
            "• Record your study time each day using 〜すぎて to identify areas you overdo.",
            "• Contrast 〜だけ and 〜しか〜ない by rewriting the same sentence both ways."
        ],
        practicePrompts: [
            "Complain about working too much using 〜すぎる and suggest a fix.",
            "Use 〜しか〜ない to emphasize a limited resource during exam prep.",
            "Describe a hobby you do all the time using 〜ばかりいる."
        ],
        funFact: "When native speakers want to be dramatic, they stack 〜ばかり and 〜すぎて together: 食べてばかりで太りすぎてしまった."
    },
    {
        id: 409,
        displayNumber: "N4-09",
        order: 9,
        section: "🚀 Verb Mastery Lab",
        sectionOrder: 3,
        sectionDescription: "Gain control over potential, passive, and causative forms to express ability, obligation, and emotion.",
        title: "Potential Forms Deep Dive",
        emoji: "🚀",
        description: "Express ability and possibility accurately across polite and casual contexts.",
        topics: "Potential forms, 〜ことができる, ability nuances",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "Ichidan potential endings 〜られる",
            "Godan potential endings 〜える",
            "Irregular potentials (する→できる, 来る→こられる)",
            "〜ことができる vs potential form nuance",
            "Potential of compound verbs and set phrases",
            "Sight vs possibility differences (見える vs 見られる)"
        ],
        vocabulary: [
            "能力 (のうりょく) - ability",
            "可能 (かのう) - possible",
            "許可 (きょか) - permission",
            "条件 (じょうけん) - condition",
            "成功 (せいこう) - success",
            "挑戦 (ちょうせん) - challenge",
            "達成 (たっせい) - achievement",
            "経験 (けいけん) - experience",
            "余裕 (よゆう) - margin",
            "改善 (かいぜん) - improvement",
            "制限 (せいげん) - limit",
            "保障 (ほしょう) - guarantee"
        ],
        kanjiFocus: [
            "可能 (かのう) - possible",
            "挑戦 (ちょうせん) - challenge",
            "成功 (せいこう) - success",
            "保障 (ほしょう) - guarantee"
        ],
        quickTips: [
            "• Drill potential forms with irregular verbs until they feel instant.",
            "• Write pairs of sentences using both 〜ことができる (formal) and potential forms (casual) for the same verb."
        ],
        practicePrompts: [
            "Explain something you can now do thanks to study using 〜られる.",
            "Use 〜ことができる to describe an opportunity at school or work.",
            "Describe a skill you still cannot do using 〜られない and explain why."
        ],
        funFact: "Business emails lean on 〜ことができます because it sounds more formal than the pure potential form."
    },
    {
        id: 410,
        displayNumber: "N4-10",
        order: 10,
        section: "🚀 Verb Mastery Lab",
        sectionOrder: 3,
        title: "Passive Voice Nuance",
        emoji: "🎧",
        description: "Control passive forms to highlight affected people, politeness, and frustration.",
        topics: "Passive conjugation, adversative passive, respectful passive",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "Basic passive formation for ichidan and godan verbs",
            "Adversative passive (友だちに車を壊された)",
            "Passive for invitations and respect (先生に呼ばれた)",
            "Passive to soften statements or report facts",
            "Passive constructions frequently used in news",
            "Passive verbs in set phrases (注意される, 説明される)"
        ],
        vocabulary: [
            "迷惑 (めいわく) - nuisance",
            "被害 (ひがい) - damage",
            "影響 (えいきょう) - influence",
            "評価 (ひょうか) - evaluation",
            "指摘 (してき) - pointing out",
            "批判 (ひはん) - criticism",
            "招待 (しょうたい) - invitation",
            "経験 (けいけん) - experience",
            "伝統 (でんとう) - tradition",
            "注意 (ちゅうい) - warning",
            "感動 (かんどう) - being moved",
            "叱る (しかる) - to scold"
        ],
        kanjiFocus: [
            "被害 (ひがい) - damage",
            "迷惑 (めいわく) - nuisance",
            "指摘 (してき) - pointing out",
            "批判 (ひはん) - criticism"
        ],
        quickTips: [
            "• Decide whether a passive sentence is neutral or negative by checking the verb and subject.",
            "• Rewrite active sentences from news articles into passive to observe focus shifts."
        ],
        practicePrompts: [
            "Complain about being scolded unfairly using the adversative passive.",
            "Describe being invited to a seminar using 〜に誘われた.",
            "Turn an active sentence into passive to emphasize the affected person."
        ],
        funFact: "Japanese uses passive voice to sound modest or indirect, so you will see it heavily in news and formal reports."
    },
    {
        id: 411,
        displayNumber: "N4-11",
        order: 11,
        section: "🚀 Verb Mastery Lab",
        sectionOrder: 3,
        title: "Causative Control Strategies",
        emoji: "🎛️",
        description: "Use causative forms to express making, letting, and asking with nuance.",
        topics: "Causative formation, permission, polite requests",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "Causative formation 〜せる / 〜させる for ichidan and godan verbs",
            "Short vs long forms (読ませる vs 読まさせる)",
            "〜させてください polite request to let me do",
            "〜させてもらう to express receiving permission",
            "Using causative with organizational rules (会社は社員に残業させる)",
            "Common causative collocations (手伝わせる, 学ばせる)"
        ],
        vocabulary: [
            "指導 (しどう) - guidance",
            "許可 (きょか) - permission",
            "強制 (きょうせい) - coercion",
            "参加 (さんか) - participation",
            "挑戦 (ちょうせん) - challenge",
            "体験 (たいけん) - experience",
            "依頼 (いらい) - request",
            "交渉 (こうしょう) - negotiation",
            "同意 (どうい) - consent",
            "改善 (かいぜん) - improvement",
            "確認 (かくにん) - confirmation",
            "責任 (せきにん) - responsibility"
        ],
        kanjiFocus: [
            "指導 (しどう) - guidance",
            "強制 (きょうせい) - coercion",
            "交渉 (こうしょう) - negotiation",
            "責任 (せきにん) - responsibility"
        ],
        quickTips: [
            "• Drill causative endings with tongue twisters to avoid mixing 〜せる and 〜させる.",
            "• Practice polite workplace lines using 〜させていただきます when volunteering to help."
        ],
        practicePrompts: [
            "Ask your supervisor to let you join a project using 〜させてください.",
            "Write about parents making a child study using the causative form.",
            "Explain something you were allowed to do using 〜させてもらいました."
        ],
        funFact: "Formal speeches often use 〜させていただきます to sound humble before making announcements."
    },
    {
        id: 412,
        displayNumber: "N4-12",
        order: 12,
        section: "🚀 Verb Mastery Lab",
        sectionOrder: 3,
        title: "Causative-Passive & Emotional Responses",
        emoji: "🌀",
        description: "Show frustration, obligation, and gratitude with causative-passive combinations.",
        topics: "〜させられる, obligation expressions, gratitude",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "Causative-passive formation 〜させられる",
            "Colloquial contractions (行かされる vs 行かせられる)",
            "Emotion verbs plus causative-passive (泣かされる, 笑わされる)",
            "〜させてもらえる to express gratitude for being allowed",
            "Combining 〜させられる with 〜ことになる to show obligation",
            "Common phrases like 待たされる, 手伝わされる"
        ],
        vocabulary: [
            "我慢 (がまん) - patience",
            "負担 (ふたん) - burden",
            "義務 (ぎむ) - duty",
            "残業 (ざんぎょう) - overtime",
            "感謝 (かんしゃ) - gratitude",
            "強調 (きょうちょう) - emphasis",
            "責任 (せきにん) - responsibility",
            "承認 (しょうにん) - approval",
            "拒否 (きょひ) - refusal",
            "作業 (さぎょう) - task",
            "効率 (こうりつ) - efficiency",
            "調子 (ちょうし) - condition"
        ],
        kanjiFocus: [
            "負担 (ふたん) - burden",
            "義務 (ぎむ) - duty",
            "残業 (ざんぎょう) - overtime",
            "感謝 (かんしゃ) - gratitude"
        ],
        quickTips: [
            "• Create two-column notes showing the emotional difference between causative and causative-passive sentences.",
            "• Listen for 〜させられて in dramas when characters complain, then mimic their intonation."
        ],
        practicePrompts: [
            "Describe being forced to redo homework with 〜させられる.",
            "Express gratitude for being allowed to speak using 〜させてもらってありがとうございます.",
            "Explain a company rule that makes employees stay late using 〜ことになっていて…させられる."
        ],
        funFact: "Young people often shorten 〜させられる to 〜さされる in conversation, especially with 行かされる."
    },
    {
        id: 413,
        displayNumber: "N4-13",
        order: 13,
        section: "🚀 Verb Mastery Lab",
        sectionOrder: 3,
        title: "Transitivity Twins & 〜てしまう Nuance",
        emoji: "♻️",
        description: "Use transitive/intransitive pairs and 〜てしまう to describe results and regrets.",
        topics: "Transitivity pairs, result states, completion vs regret",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "Common transitive/intransitive pairs (開ける/開く, 集める/集まる, 落とす/落ちる)",
            "〜てある to show a result state",
            "〜てしまう for completion or regret",
            "Emotion-rich 〜てしまった with adverbs",
            "〜たところだ for timing (just finished, about to)",
            "〜まま to leave something as-is"
        ],
        vocabulary: [
            "故障 (こしょう) - breakdown",
            "準備 (じゅんび) - preparation",
            "片付ける (かたづける) - to tidy up",
            "集まる (あつまる) - to gather",
            "残る (のこる) - to remain",
            "落ちる (おちる) - to fall",
            "倒す (たおす) - to knock over",
            "進む (すすむ) - to advance",
            "決める (きめる) - to decide",
            "決まる (きまる) - to be decided",
            "落とす (おとす) - to drop",
            "増える (ふえる) - to increase"
        ],
        kanjiFocus: [
            "残 (のこ) - remain",
            "準備 (じゅんび) - preparation",
            "故障 (こしょう) - breakdown",
            "決 (けつ) - decide"
        ],
        quickTips: [
            "• Create flashcards pairing each transitive verb with its intransitive twin and note who/what performs the action.",
            "• Practice both feelings of 〜てしまった: relief vs regret, depending on the context you add."
        ],
        practicePrompts: [
            "Describe cleaning your room and the result using 〜てある.",
            "Confess an accident using 〜てしまった and include the emotion.",
            "Explain what just happened using 〜たところだ."
        ],
        funFact: "Native speakers often shorten 〜てしまう to 〜ちゃう / 〜じゃう in casual speech, so recognise both forms in listening exercises."
    },
    {
        id: 414,
        displayNumber: "N4-14",
        order: 14,
        section: "🤝 Nuance & Interaction",
        sectionOrder: 4,
        sectionDescription: "Handle social nuance by mastering give/receive patterns, polite favors, and interpersonal language.",
        title: "Giving & Receiving Actions",
        emoji: "🤝",
        description: "Balance politeness and warmth with the 〜てあげる family of expressions.",
        topics: "Giving help, receiving favors, humble vs honorific forms",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "〜てあげる to offer help",
            "〜てくれる to receive benefit",
            "〜てもらう to ask for help",
            "〜させてあげる to let someone do something",
            "Honorific requests 〜ていただく / 〜ていただけますか",
            "Casual vs polite shifts with the give/receive trio"
        ],
        vocabulary: [
            "恩 (おん) - favor owed",
            "感謝 (かんしゃ) - gratitude",
            "援助 (えんじょ) - assistance",
            "頼む (たのむ) - to request",
            "遠慮 (えんりょ) - reserve",
            "気持ち (きもち) - feeling",
            "親切 (しんせつ) - kindness",
            "協力 (きょうりょく) - cooperation",
            "支援 (しえん) - support",
            "依頼 (いらい) - request",
            "承知 (しょうち) - consent",
            "手伝う (てつだう) - to help"
        ],
        kanjiFocus: [
            "恩 (おん) - favor",
            "援助 (えんじょ) - assistance",
            "協力 (きょうりょく) - cooperation",
            "感謝 (かんしゃ) - gratitude"
        ],
        quickTips: [
            "• Practice retelling favors with proper direction: 私は友だちに手伝ってもらった vs 友だちが手伝ってくれた.",
            "• In polite emails, swap 〜てくれる for 〜ていただけると助かります to sound professional."
        ],
        practicePrompts: [
            "Politely ask a senior coworker for help using 〜ていただけますか.",
            "Describe helping a sibling using 〜てあげた.",
            "Explain a time you received help using 〜てもらって助かった."
        ],
        funFact: "In service Japanese, staff use 〜ていただく for themselves to stay humble toward customers."
    },
    {
        id: 415,
        displayNumber: "N4-15",
        order: 15,
        section: "🤝 Nuance & Interaction",
        sectionOrder: 4,
        title: "Making Requests & Suggestions",
        emoji: "📩",
        description: "Move between casual, polite, and honorific requests with confidence.",
        topics: "Request language ladder, invitations, gentle suggestions",
        difficulty: "intermediate",
        estimatedTime: "40 minutes",
        grammar: [
            "〜てくれませんか polite requests",
            "〜てもらえませんか softer polite requests",
            "〜ていただけませんか honorific requests",
            "〜てくれない？ casual requests",
            "〜たらどうですか gentle suggestions",
            "〜ませんか invitations"
        ],
        vocabulary: [
            "お願い (おねがい) - favor",
            "提案 (ていあん) - proposal",
            "相談 (そうだん) - consultation",
            "許可 (きょか) - permission",
            "提携 (ていけい) - collaboration",
            "配慮 (はいりょ) - consideration",
            "検討 (けんとう) - consideration",
            "承諾 (しょうだく) - approval",
            "遠慮 (えんりょ) - restraint",
            "案内 (あんない) - guidance",
            "手続き (てつづき) - procedure",
            "協力 (きょうりょく) - cooperation"
        ],
        kanjiFocus: [
            "提案 (ていあん) - proposal",
            "相談 (そうだん) - consultation",
            "承諾 (しょうだく) - approval",
            "検討 (けんとう) - consideration"
        ],
        quickTips: [
            "• Create a politeness ladder from 〜てくれる？ to 〜ていただけませんか and convert the same request through each level.",
            "• Record yourself inviting someone with 〜ませんか, then soften it to 〜たらどうですか for advice tone."
        ],
        practicePrompts: [
            "Write an email line requesting documents using 〜ていただけませんか.",
            "Suggest a study method using 〜たらどうですか.",
            "Invite a friend to practice Japanese using 〜ませんか."
        ],
        funFact: "Customer support scripts often end with 〜ていただけますでしょうか to sound ultra polite (even if it looks long)."
    },
    {
        id: 416,
        displayNumber: "N4-16",
        order: 16,
        section: "🤝 Nuance & Interaction",
        sectionOrder: 4,
        title: "Experiences & Frequency Patterns",
        emoji: "📆",
        description: "Share experiences, rare events, and recurring situations naturally.",
        topics: "Experience expressions, frequency adverbs, rarity",
        difficulty: "intermediate",
        estimatedTime: "40 minutes",
        grammar: [
            "〜たことがある to share experiences",
            "〜ことがある / 〜ことはある for occasional events",
            "〜ことがない / 滅多に〜ない to express rarity",
            "〜ことが多い / 〜ことが少ない for frequency",
            "Pairing frequency expressions with time adverbs",
            "Using 〜以来 / 〜以外と to expand context"
        ],
        vocabulary: [
            "経験 (けいけん) - experience",
            "頻度 (ひんど) - frequency",
            "偶然 (ぐうぜん) - coincidence",
            "習慣 (しゅうかん) - habit",
            "例外 (れいがい) - exception",
            "一度 (いちど) - once",
            "滅多に (めったに) - rarely",
            "普段 (ふだん) - usually",
            "時々 (ときどき) - sometimes",
            "年中 (ねんじゅう) - all year",
            "久しぶり (ひさしぶり) - after a long time",
            "継続 (けいぞく) - continuation"
        ],
        kanjiFocus: [
            "経験 (けいけん) - experience",
            "頻度 (ひんど) - frequency",
            "偶然 (ぐうぜん) - coincidence",
            "習慣 (しゅうかん) - habit"
        ],
        quickTips: [
            "• Track your studies in a journal using 〜ことがある / 〜ことが多い to make the grammar personal.",
            "• When reading blogs, underline 〜たことがある to see how writers share experiences."
        ],
        practicePrompts: [
            "Talk about a travel experience using 〜たことがある and add detail.",
            "Mention something you rarely do using 〜ことがない or 滅多に〜ない.",
            "Describe a common team situation using 〜ことが多い."
        ],
        funFact: "滅多に〜ない literally means 'not often at all,' so pairing it with 〜ことがない intensifies the rarity."
    },
    {
        id: 417,
        displayNumber: "N4-17",
        order: 17,
        section: "🤝 Nuance & Interaction",
        sectionOrder: 4,
        title: "Opinions, Guesses & Feelings",
        emoji: "💭",
        description: "Express opinions, predictions, and intuition with confidence.",
        topics: "Opinion markers, probability, possibility",
        difficulty: "intermediate",
        estimatedTime: "40 minutes",
        grammar: [
            "〜と思う basic opinion marker",
            "〜と思っている continuing thoughts",
            "〜気がする intuitive feelings",
            "〜でしょう / 〜だろう for probability",
            "〜かもしれない for possibility",
            "Pairing 〜ように感じる with adjectives"
        ],
        vocabulary: [
            "感想 (かんそう) - impression",
            "予想 (よそう) - prediction",
            "直感 (ちょっかん) - intuition",
            "確信 (かくしん) - conviction",
            "可能性 (かのうせい) - possibility",
            "安心 (あんしん) - relief",
            "不安 (ふあん) - anxiety",
            "疑問 (ぎもん) - doubt",
            "納得 (なっとく) - understanding",
            "期待 (きたい) - expectation",
            "判断 (はんだん) - judgement",
            "根拠 (こんきょ) - basis"
        ],
        kanjiFocus: [
            "感想 (かんそう) - impression",
            "予想 (よそう) - prediction",
            "確信 (かくしん) - conviction",
            "可能性 (かのうせい) - possibility"
        ],
        quickTips: [
            "• Listen to weather forecasts and note when でしょう vs かもしれません appear—they show confidence levels.",
            "• Write journal entries using 〜気がする to capture intuition; compare them later to see if you were right."
        ],
        practicePrompts: [
            "State an opinion about study methods using 〜と思う.",
            "Make a prediction about JLPT scores using 〜でしょう.",
            "Express a small worry using 〜かもしれない and offer a reason."
        ],
        funFact: "Because 〜と思います can soften statements, news anchors often use it even when reporting facts to sound humble."
    },
    {
        id: 418,
        displayNumber: "N4-18",
        order: 18,
        section: "🧩 Complex Sentences & Connectors",
        sectionOrder: 5,
        sectionDescription: "Upgrade your sentence linking skills with conditionals, time clauses, and relative clauses.",
        title: "Conditional Maze: 〜たら / 〜ば / 〜と / 〜なら",
        emoji: "🧩",
        description: "Choose the right conditional for advice, natural results, and assumptions.",
        topics: "Four major conditionals and their nuance",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "〜たら versatile conditional for real situations",
            "〜ば for hypothetical or general conditions",
            "〜と showing automatic results",
            "〜なら offering conditions based on context",
            "Set phrases like 〜たらどうですか / 〜ばいいのに",
            "Combining conditionals with commands and requests"
        ],
        vocabulary: [
            "条件 (じょうけん) - condition",
            "仮定 (かてい) - supposition",
            "結果 (けっか) - result",
            "場合 (ばあい) - case",
            "予防 (よぼう) - prevention",
            "緊急 (きんきゅう) - emergency",
            "順番 (じゅんばん) - order",
            "提案 (ていあん) - proposal",
            "注意 (ちゅうい) - caution",
            "計画 (けいかく) - plan",
            "変化 (へんか) - change",
            "例 (れい) - example"
        ],
        kanjiFocus: [
            "条件 (じょうけん) - condition",
            "仮定 (かてい) - supposition",
            "場合 (ばあい) - case",
            "結果 (けっか) - result"
        ],
        quickTips: [
            "• Color-code conditional sentences in reading passages to see which form native writers prefer.",
            "• Convert one scenario into all four conditionals to feel nuance shifts." 
        ],
        practicePrompts: [
            "Give advice about sleeping early using the 〜ば form.",
            "Create an automatic-result sentence with 〜と using 危ない.",
            "Offer help with 〜なら to indicate availability."
        ],
        funFact: "Because 〜と sounds automatic, pairing it with commands is ungrammatical—watch for this in exam traps."
    },
    {
        id: 419,
        displayNumber: "N4-19",
        order: 19,
        section: "🧩 Complex Sentences & Connectors",
        sectionOrder: 5,
        title: "Time Linking: 〜てから / 〜あいだ / 〜うちに",
        emoji: "⏳",
        description: "Sequence actions and highlight time windows with natural flow.",
        topics: "Sequencing, simultaneous actions, time frames",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "〜てから for sequential order",
            "〜間 (あいだ) indicating entire time span",
            "〜間に highlighting a moment within a span",
            "〜うちに before the state changes",
            "〜ところ (just before/during/after)",
            "〜ながら for simultaneous actions"
        ],
        vocabulary: [
            "期間 (きかん) - period",
            "瞬間 (しゅんかん) - moment",
            "手順 (てじゅん) - procedure",
            "途中 (とちゅう) - on the way",
            "前半 (ぜんはん) - first half",
            "後半 (こうはん) - latter half",
            "余裕 (よゆう) - spare time",
            "終了 (しゅうりょう) - completion",
            "持続 (じぞく) - persistence",
            "短期 (たんき) - short term",
            "長期 (ちょうき) - long term",
            "未完成 (みかんせい) - incomplete"
        ],
        kanjiFocus: [
            "期間 (きかん) - period",
            "瞬間 (しゅんかん) - moment",
            "途中 (とちゅう) - en route",
            "持続 (じぞく) - continuation"
        ],
        quickTips: [
            "• Timeline your daily routine labeling each segment with 〜てから, 〜間, and 〜うちに.",
            "• Practice 〜うちに with verbs that change state quickly (冷める, 忘れる) to build natural collocations."
        ],
        practicePrompts: [
            "Describe your morning steps using 〜てから.",
            "Talk about what you usually do while commuting using 〜間に or 〜ながら.",
            "Warn someone to finish something before it changes using 〜うちに."
        ],
        funFact: "Because 〜うちに implies a changing state, pairing it with static verbs usually sounds odd—watch for tricky JLPT questions."
    },
    {
        id: 420,
        displayNumber: "N4-20",
        order: 20,
        section: "🧩 Complex Sentences & Connectors",
        sectionOrder: 5,
        title: "Relative Clauses & Nominalizers",
        emoji: "🧾",
        description: "Build longer sentences by stacking clauses and turning actions into nouns.",
        topics: "Relative clauses, 〜の / 〜こと nominalizers, 〜のに",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "Relative clauses modifying nouns (読んでいる本)",
            "〜という to define or quote",
            "〜の and 〜こと as nominalizers",
            "〜のに to show contrast or unexpected result",
            "〜わけ to state reasons or conclusions",
            "Stacking clauses for concise explanations"
        ],
        vocabulary: [
            "説明 (せつめい) - explanation",
            "理由 (りゆう) - reason",
            "状況 (じょうきょう) - situation",
            "内容 (ないよう) - content",
            "方法 (ほうほう) - method",
            "背景 (はいけい) - background",
            "結論 (けつろん) - conclusion",
            "証明 (しょうめい) - proof",
            "詳細 (しょうさい) - details",
            "課題 (かだい) - issue",
            "資料 (しりょう) - materials",
            "判断 (はんだん) - judgement"
        ],
        kanjiFocus: [
            "内容 (ないよう) - content",
            "背景 (はいけい) - background",
            "結論 (けつろん) - conclusion",
            "資料 (しりょう) - materials"
        ],
        quickTips: [
            "• Rewrite English relative clauses into Japanese noun+clause order to train your brain to think backwards.",
            "• Practice switching between 〜の and 〜こと to match casual and formal contexts."
        ],
        practicePrompts: [
            "Describe a book you are reading using a relative clause.",
            "Explain a rule that, despite being simple, is hard to follow using 〜のに.",
            "Define a new term using 〜という〜."
        ],
        funFact: "In formal writing, 〜ことがある is preferred over 〜のがある, but manga dialogue happily uses 〜の."
    },
    {
        id: 421,
        displayNumber: "N4-21",
        order: 21,
        section: "🧩 Complex Sentences & Connectors",
        sectionOrder: 5,
        title: "Negative Hooks: 〜ずに / 〜ないで / 〜なくて",
        emoji: "🚫",
        description: "Describe what did not happen and why, while sounding natural and precise.",
        topics: "Negative connectors, reasons, double negatives",
        difficulty: "intermediate",
        estimatedTime: "40 minutes",
        grammar: [
            "〜ないで / 〜ずに to express doing something without another action",
            "〜なくて to give reasons for negative outcomes",
            "〜ないことはない to indicate possibility despite negativity",
            "〜ないまま leaving something undone",
            "〜ないと for obligations/negative warnings",
            "Set expressions like 〜ずにすむ and 〜ざるを得ない"
        ],
        vocabulary: [
            "省略 (しょうりゃく) - omission",
            "忘却 (ぼうきゃく) - forgetting",
            "怠る (おこたる) - to neglect",
            "禁止 (きんし) - prohibition",
            "未満 (みまん) - less than",
            "保留 (ほりゅう) - on hold",
            "未定 (みてい) - undecided",
            "欠席 (けっせき) - absence",
            "未経験 (みけいけん) - no experience",
            "中止 (ちゅうし) - cancellation",
            "無駄 (むだ) - waste",
            "防止 (ぼうし) - prevention"
        ],
        kanjiFocus: [
            "省略 (しょうりゃく) - omission",
            "欠席 (けっせき) - absence",
            "防止 (ぼうし) - prevention",
            "中止 (ちゅうし) - cancellation"
        ],
        quickTips: [
            "• Contrast 〜ないで vs 〜なくて by writing pairs of sentences for the same scenario.",
            "• Notice how 〜ずに sounds formal—try switching it into emails to sound polished."
        ],
        practicePrompts: [
            "Apologize for leaving home without bringing something using 〜ないで.",
            "Explain a negative result using 〜なくて and describe the feeling.",
            "Express that something is not impossible using 〜ないことはない."
        ],
        funFact: "The ず-form comes from classical Japanese, so you still see 〜ずに in set phrases like 迷わずに."
    },
    {
        id: 422,
        displayNumber: "N4-22",
        order: 22,
        section: "📗 Kanji & Vocabulary Power-Ups",
        sectionOrder: 6,
        sectionDescription: "Expand the kanji and vocabulary frequency lists that dominate N4 reading passages.",
        title: "Kanji Cluster: Work & Study Life",
        emoji: "🏢",
        description: "Master the workplace and school kanji that appear in emails, notices, and exam passages.",
        topics: "Workplace kanji, school terminology, schedule language",
        difficulty: "intermediate",
        estimatedTime: "50 minutes",
        grammar: [
            "Key kanji readings: 仕・事・働・残",
            "Compound verbs such as 残業する / 連絡する",
            "N4 sentence patterns using office vocabulary",
            "Common prefixes/suffixes: 部・課・係",
            "Honorific and humble verbs that pair with office kanji (伺う, 参る)",
            "Using 〜中 to indicate status (会議中, 勉強中)"
        ],
        vocabulary: [
            "会社 (かいしゃ) - company",
            "部署 (ぶしょ) - department",
            "課長 (かちょう) - section chief",
            "会議 (かいぎ) - meeting",
            "資料 (しりょう) - materials",
            "締切 (しめきり) - deadline",
            "連絡 (れんらく) - contact",
            "報告 (ほうこく) - report",
            "残業 (ざんぎょう) - overtime",
            "出張 (しゅっちょう) - business trip",
            "出席 (しゅっせき) - attendance",
            "欠席 (けっせき) - absence"
        ],
        kanjiFocus: [
            "働 (はたら) - to work",
            "連 (れん) - connect",
            "続 (ぞく) - continue",
            "課 (か) - section"
        ],
        quickTips: [
            "• Label your real calendar in Japanese using kanji like 会議, 休暇, 締切.",
            "• Build a mnemonic deck linking workplace verbs with their kanji radicals."
        ],
        practicePrompts: [
            "Create a weekly schedule sentence using three work kanji.",
            "Describe your study plan using 〜中 to mark ongoing status.",
            "Write a polite email closing using office vocabulary and an honorific verb."
        ],
        funFact: "Japanese offices love the suffix 〜中 to show status (準備中, 使用中)—the same kanji appears on restaurant signs."
    },
    {
        id: 423,
        displayNumber: "N4-23",
        order: 23,
        section: "📗 Kanji & Vocabulary Power-Ups",
        sectionOrder: 6,
        title: "Kanji Cluster: Daily Life & Community",
        emoji: "🏙️",
        description: "Read city notices, train announcements, and health reminders without reaching for a dictionary.",
        topics: "City offices, transportation, health, signage",
        difficulty: "intermediate",
        estimatedTime: "50 minutes",
        grammar: [
            "Directional kanji compounds (方面, 以外, 以内)",
            "Transportation verbs plus counters (乗車する, 乗車券, 本数)",
            "Set phrases with 自〜 (自転車, 自由席)",
            "Reading city hall notifications with formal structures",
            "Adjective-kanji combos (便利, 不便, 必要)",
            "Using 〜予定 / 〜中止 from signs"
        ],
        vocabulary: [
            "市役所 (しやくしょ) - city hall",
            "区役所 (くやくしょ) - ward office",
            "健康 (けんこう) - health",
            "保険 (ほけん) - insurance",
            "駅員 (えきいん) - station staff",
            "乗車券 (じょうしゃけん) - train ticket",
            "定期券 (ていきけん) - commuter pass",
            "必要 (ひつよう) - necessary",
            "不要 (ふよう) - unnecessary",
            "安全 (あんぜん) - safety",
            "危険 (きけん) - danger",
            "案内 (あんない) - guidance"
        ],
        kanjiFocus: [
            "役 (やく) - duty",
            "券 (けん) - ticket",
            "健 (けん) - health",
            "危 (き) - danger"
        ],
        quickTips: [
            "• Screenshot Japanese signage online and annotate the kanji with readings to build visual memory.",
            "• Group antonym pairs like 安全 vs 危険 to reinforce meaning through contrast."
        ],
        practicePrompts: [
            "Explain how to buy a commuter pass using key kanji words.",
            "Describe a health check notice from city hall using vocabulary from the list.",
            "Write two contrasting sentences using 便利 and 不便."
        ],
        funFact: "JR announcements frequently use 方面 (bound for), so recognizing that kanji saves time on train platforms."
    },
    {
        id: 424,
        displayNumber: "N4-24",
        order: 24,
        section: "📗 Kanji & Vocabulary Power-Ups",
        sectionOrder: 6,
        title: "Vocabulary Themes: Emotions & Abstract Ideas",
        emoji: "💡",
        description: "Talk about feelings, values, and opinions using expressive abstract nouns.",
        topics: "Emotion nouns, abstract concepts, adjective-to-noun conversions",
        difficulty: "intermediate",
        estimatedTime: "45 minutes",
        grammar: [
            "Pairing emotion nouns with 〜を感じる / 〜にする",
            "Adjective → noun conversions with 〜さ (悲しい→悲しさ)",
            "Using 〜的 (てき) to create adjectives (積極的, 消極的)",
            "Patterns with 〜ように感じる to describe impressions",
            "Reporting impressions with 〜らしい",
            "Degree expressions with abstract nouns (かなりの不安, 大きな喜び)"
        ],
        vocabulary: [
            "感動 (かんどう) - deep emotion",
            "感謝 (かんしゃ) - gratitude",
            "不満 (ふまん) - dissatisfaction",
            "満足 (まんぞく) - satisfaction",
            "後悔 (こうかい) - regret",
            "緊張 (きんちょう) - nervousness",
            "安心 (あんしん) - relief",
            "感情 (かんじょう) - emotion",
            "価値 (かち) - value",
            "意識 (いしき) - awareness",
            "判断 (はんだん) - judgement",
            "尊重 (そんちょう) - respect"
        ],
        kanjiFocus: [
            "感 (かん) - feeling",
            "価 (か) - value",
            "尊 (そん) - respect",
            "意 (い) - intention"
        ],
        quickTips: [
            "• When journaling, include at least one abstract noun plus を感じる to solidify collocations.",
            "• Practice converting adjectives to 〜さ nouns (嬉しい→嬉しさ) to discuss feelings objectively."
        ],
        practicePrompts: [
            "Write about a time you felt grateful using 感謝 and 〜てよかった.",
            "Describe a regret using 後悔 and a 〜てしまった sentence.",
            "Discuss something valuable to you using 価値があると思う."
        ],
        funFact: "Abstract nouns often pair with 〜的 to form adjectives, so learning the noun first accelerates advanced vocabulary."
    },
    {
        id: 425,
        displayNumber: "N4-25",
        order: 25,
        section: "📖 Reading & Listening Strategies",
        sectionOrder: 7,
        sectionDescription: "Develop reading and listening strategies so you can extract answers quickly during the exam.",
        title: "Reading Strategy Lab",
        emoji: "📖",
        description: "Read faster by tracking connectors, summaries, and reference words.",
        topics: "Skimming, scanning, connector words, referencing",
        difficulty: "intermediate",
        estimatedTime: "40 minutes",
        grammar: [
            "Connector signal words: しかし, つまり, 例えば",
            "Structural markers like 第一に / 次に",
            "Pronoun referencing with この / その / あの",
            "Relative clauses to identify the head noun quickly",
            "Quotation patterns 〜という / 〜と書いてある",
            "Elimination technique using 〜わけではない patterns"
        ],
        vocabulary: [
            "要約 (ようやく) - summary",
            "段落 (だんらく) - paragraph",
            "筆者 (ひっしゃ) - author",
            "意見 (いけん) - opinion",
            "主張 (しゅちょう) - claim",
            "理由 (りゆう) - reason",
            "例 (れい) - example",
            "比較 (ひかく) - comparison",
            "重要 (じゅうよう) - important",
            "注意 (ちゅうい) - caution",
            "記録 (きろく) - record",
            "資料 (しりょう) - materials"
        ],
        kanjiFocus: [
            "要約 (ようやく) - summary",
            "筆者 (ひっしゃ) - author",
            "段落 (だんらく) - paragraph",
            "主張 (しゅちょう) - claim"
        ],
        quickTips: [
            "• Train scanning by timing yourself to find connectors like しかし in short articles.",
            "• Summarize each paragraph in one Japanese sentence to reinforce comprehension."
        ],
        practicePrompts: [
            "Skim a short passage and list three connector words you found.",
            "Write a one-sentence summary of a paragraph using 要約すると.",
            "Explain how この / その refer back to prior information in a sample text."
        ],
        funFact: "JLPT reading passages love transition words like しかし and ところが to signal contrast—spotting them fast saves time."
    },
    {
        id: 426,
        displayNumber: "N4-26",
        order: 26,
        section: "📖 Reading & Listening Strategies",
        sectionOrder: 7,
        title: "Listening Strategy Lab",
        emoji: "🎧",
        description: "Catch paraphrased answers, filler words, and confirmation phrases in listening tasks.",
        topics: "Listening cues, paraphrasing, note-taking",
        difficulty: "intermediate",
        estimatedTime: "40 minutes",
        grammar: [
            "Recognizing paraphrasing with 〜って (casual quoting)",
            "Listening for 〜そうです vs 〜らしい reporting",
            "Confirmation phrases 〜ですね / 〜でしょう",
            "Filler words (えっと, あの, その) and their function",
            "Focusing on final verbs to catch the requested action",
            "Anticipating questions from 〜かもしれません / 〜でしょうね"
        ],
        vocabulary: [
            "案内 (あんない) - guidance",
            "予約 (よやく) - reservation",
            "変更 (へんこう) - change",
            "確認 (かくにん) - confirmation",
            "予定 (よてい) - schedule",
            "締切 (しめきり) - deadline",
            "遅刻 (ちこく) - lateness",
            "対応 (たいおう) - response",
            "返事 (へんじ) - reply",
            "連絡 (れんらく) - contact",
            "集合 (しゅうごう) - gathering",
            "席 (せき) - seat"
        ],
        kanjiFocus: [
            "予約 (よやく) - reservation",
            "変更 (へんこう) - change",
            "確認 (かくにん) - confirmation",
            "連絡 (れんらく) - contact"
        ],
        quickTips: [
            "• Shadow short dialogues and pause before the final verb to predict the answer from context.",
            "• Make a chart of common listening scenarios (train announcements, store calls) and the key vocabulary they use."
        ],
        practicePrompts: [
            "Summarize a listening clip focusing on the requested action using 〜てください.",
            "List three filler words you heard and describe their effect.",
            "Write follow-up questions you could ask after hearing 〜そうです."
        ],
        funFact: "JLPT listening often paraphrases the correct answer, so catching synonyms like 必要→要る is essential."
    },
    {
        id: 427,
        displayNumber: "N4-27",
        order: 27,
        section: "🎯 Exam Readiness",
        sectionOrder: 8,
        sectionDescription: "Use structured practice plans and review loops to finish N4 feeling confident.",
        title: "Mock Exam Warm-Up Plan",
        emoji: "🗓️",
        description: "Build stamina and accuracy with repeatable practice loops and reflection checkpoints.",
        topics: "Timed drills, error analysis, habit tracking",
        difficulty: "intermediate",
        estimatedTime: "35 minutes",
        grammar: [
            "Study loop: 演習→採点→分析→復習",
            "Time boxing using 〜分間 and 〜以内",
            "Error log phrases with 〜たところを直す",
            "Goal statements using 〜ことを目標にする",
            "Self feedback with 〜ように心がける",
            "Risk awareness using 〜おそれがある"
        ],
        vocabulary: [
            "計画 (けいかく) - plan",
            "目標 (もくひょう) - goal",
            "達成 (たっせい) - achievement",
            "課題 (かだい) - task",
            "復習 (ふくしゅう) - review",
            "分析 (ぶんせき) - analysis",
            "改善 (かいぜん) - improvement",
            "継続 (けいぞく) - continuation",
            "集中 (しゅうちゅう) - concentration",
            "成果 (せいか) - result",
            "効率 (こうりつ) - efficiency",
            "記録 (きろく) - record"
        ],
        kanjiFocus: [
            "目標 (もくひょう) - goal",
            "分析 (ぶんせき) - analysis",
            "成果 (せいか) - result",
            "継続 (けいぞく) - continuation"
        ],
        quickTips: [
            "• Simulate full JLPT sections once a week and log your time, score, and feeling after each attempt.",
            "• Create an error-reflection notebook in Japanese using 〜たけれど to explain why mistakes happened."
        ],
        practicePrompts: [
            "Draft a one-week mock test schedule using time expressions.",
            "Write a reflection sentence using 〜おかげで about an improvement.",
            "State a personal exam goal using 〜ことを目標にしています."
        ],
        funFact: "Many cram schools call the review loop PDCA (Plan-Do-Check-Act); writing it in Japanese helps track progress."
    },
    {
        id: 428,
        displayNumber: "N4-28",
        order: 28,
        section: "🎯 Exam Readiness",
        sectionOrder: 8,
        title: "Exam Day Mindset & Next Steps",
        emoji: "🏆",
        description: "Prepare checklists, manage nerves, and map out the path toward N3 success.",
        topics: "Checklist planning, self-care, next-level planning",
        difficulty: "intermediate",
        estimatedTime: "30 minutes",
        grammar: [
            "Preparation phrases with 〜ておく",
            "Reminders using 〜ようにする",
            "Encouragement lines 〜ように祈る",
            "Contingency statements with 〜場合",
            "Future plans using 〜たら〜予定です",
            "Gratitude expressions 〜てもらってありがとうございます"
        ],
        vocabulary: [
            "準備 (じゅんび) - preparation",
            "確認 (かくにん) - confirmation",
            "持ち物 (もちもの) - belongings",
            "休憩 (きゅうけい) - break",
            "集中 (しゅうちゅう) - concentration",
            "体調 (たいちょう) - physical condition",
            "応援 (おうえん) - support",
            "成功 (せいこう) - success",
            "挑戦 (ちょうせん) - challenge",
            "計画 (けいかく) - plan",
            "感謝 (かんしゃ) - gratitude",
            "未来 (みらい) - future"
        ],
        kanjiFocus: [
            "挑戦 (ちょうせん) - challenge",
            "応援 (おうえん) - support",
            "体調 (たいちょう) - physical condition",
            "成功 (せいこう) - success"
        ],
        quickTips: [
            "• Write a checklist the night before using 〜ておく sentences to ensure nothing is forgotten.",
            "• Visualize success with 〜ように祈っています and share it with study partners for support."
        ],
        practicePrompts: [
            "List three things to prepare before the exam using 〜ておく.",
            "Describe how you will celebrate passing using 〜たら〜予定です.",
            "Write a thank-you note to a teacher using 〜てもらってありがとうございます."
        ],
        funFact: "N4 success stories often mention イメトレ (image training)—imagine the test flow in Japanese to calm nerves."
    }
];
