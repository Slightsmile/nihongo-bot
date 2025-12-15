// NihongoBot - Main Application Logic
class NihongoBot {
    constructor() {
        this.messagesContainer = document.getElementById('messagesContainer');
        this.messageInput = document.getElementById('messageInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.newChatBtn = document.getElementById('newChatBtn');
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.chatHistory = document.getElementById('chatHistory');

        // API Configuration
        this.apiBaseUrl = 'http://localhost:8000/api';

        this.currentChatId = null;
        this.chats = this.loadChats();

        // Make instance globally accessible for course module
        window.nihongoBot = this;

        this.init();
    }

    init() {
        // Theme Toggle
        this.initTheme();

        // Event Listeners
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('input', () => this.handleInput());
        this.messageInput.addEventListener('keydown', (e) => this.handleKeyDown(e));
        this.newChatBtn.addEventListener('click', () => this.startNewChat());
        // Knowledge Hub button (bottom of sidebar)
        const knowledgeBtn = document.getElementById('knowledgeBtn');
        if (knowledgeBtn) {
            knowledgeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'knowledge-hub.html';
            });
        }

        // Prompt chips
        document.querySelectorAll('.prompt-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                this.messageInput.value = e.target.textContent;
                this.handleInput();
                this.sendMessage();
            });
        });

        // Auto-resize textarea
        this.messageInput.addEventListener('input', () => {
            this.messageInput.style.height = 'auto';
            this.messageInput.style.height = this.messageInput.scrollHeight + 'px';
        });


        // Load chat history UI
        this.renderChatHistory();

        // Check for lesson context (redirected from lessons page)
        this.checkLessonContext();
    }

    checkLessonContext() {
        const contextStr = localStorage.getItem('lessonContext');
        if (!contextStr) return;

        const context = JSON.parse(contextStr);
        if (context.action === 'chat') {
            // Clear context so it doesn't trigger again on reload
            localStorage.removeItem('lessonContext');

            // Find lesson data (assuming N4/N5 arrays are globally available from index.html scripts)
            // We need to wait a tiny bit to ensure scripts might be loaded, or just assume they are since we are in `DOMContentLoaded`
            let lesson = null;
            if (context.level === 'N5' && typeof N5_LESSONS !== 'undefined') {
                lesson = N5_LESSONS.find(l => l.id == context.lessonId);
            } else if (context.level === 'N4' && typeof N4_LESSONS !== 'undefined') {
                lesson = N4_LESSONS.find(l => l.id == context.lessonId);
            }

            if (lesson) {
                this.startNewChat();
                // We want to send a hidden system prompt or just a starting message
                const startMessage = `I want to study ${context.level} Lesson: "${lesson.title}".\n\nTopics: ${lesson.topics}\n\nPlease help me practice this lesson.`;

                // Simulate sending this message
                this.messageInput.value = startMessage;
                this.handleInput();
                this.sendMessage();
            }
        }
    }

    handleInput() {
        const hasContent = this.messageInput.value.trim().length > 0;
        this.sendBtn.disabled = !hasContent;
    }

    handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!this.sendBtn.disabled) {
                this.sendMessage();
            }
        }
    }

    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // Hide welcome screen on first message
        if (this.welcomeScreen && !this.welcomeScreen.classList.contains('hidden')) {
            this.welcomeScreen.classList.add('fade-out');
            setTimeout(() => {
                this.welcomeScreen.classList.add('hidden');
            }, 300);
        }

        // Create new chat if needed
        if (!this.currentChatId) {
            this.currentChatId = Date.now().toString();
            this.chats[this.currentChatId] = {
                id: this.currentChatId,
                title: message.substring(0, 30) + (message.length > 30 ? '...' : ''),
                messages: []
            };
        }

        // Add user message
        this.addMessage('user', message);
        this.messageInput.value = '';
        this.messageInput.style.height = 'auto';
        this.handleInput();

        // Save message to chat
        this.chats[this.currentChatId].messages.push({
            role: 'user',
            content: message
        });

        // Show typing indicator
        const typingId = this.showTypingIndicator();

        // Get AI response
        try {
            const response = await this.getAIResponse(message);
            this.removeTypingIndicator(typingId);
            this.addMessage('bot', response);

            // Save bot response
            this.chats[this.currentChatId].messages.push({
                role: 'bot',
                content: response
            });

            this.saveChats();
            this.renderChatHistory();
        } catch (error) {
            this.removeTypingIndicator(typingId);
            this.addMessage('bot', 'Sorry, I encountered an error. Please try again.');
        }
    }

    addMessage(role, content) {
        const messageEl = document.createElement('div');
        messageEl.className = `message ${role}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = role === 'user' ? '' : '🗾';

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'message-content';

        const header = document.createElement('div');
        header.className = 'message-header';

        const name = document.createElement('span');
        name.className = 'message-name';
        name.textContent = '';

        // Only show the name (no time)
        header.appendChild(name);

        const text = document.createElement('div');
        text.className = 'message-text';
        text.innerHTML = this.formatMessage(content);

        contentWrapper.appendChild(header);
        contentWrapper.appendChild(text);

        messageEl.appendChild(avatar);
        messageEl.appendChild(contentWrapper);

        this.messagesContainer.appendChild(messageEl);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const messageEl = document.createElement('div');
        messageEl.className = 'message bot';
        messageEl.id = id;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = '🗾';

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'message-content';

        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';

        contentWrapper.appendChild(indicator);
        messageEl.appendChild(avatar);
        messageEl.appendChild(contentWrapper);

        this.messagesContainer.appendChild(messageEl);
        this.scrollToBottom();

        return id;
    }

    removeTypingIndicator(id) {
        const element = document.getElementById(id);
        if (element) {
            element.remove();
        }
    }

    formatMessage(content) {
        // Basic markdown-like formatting
        let formatted = content;

        // Headers
        formatted = formatted.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        formatted = formatted.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        formatted = formatted.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // Bold
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Code blocks
        formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

        // Inline code
        formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Lists
        formatted = formatted.replace(/^\* (.*$)/gim, '<li>$1</li>');
        formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

        // Line breaks
        formatted = formatted.replace(/\n\n/g, '</p><p>');
        formatted = '<p>' + formatted + '</p>';

        // Clean up empty paragraphs
        formatted = formatted.replace(/<p><\/p>/g, '');

        return formatted;
    }

    // Time display removed from UI; timestamps are not stored.

    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }

    startNewChat() {
        this.currentChatId = null;
        this.messagesContainer.innerHTML = '';

        // Show welcome screen
        const welcomeHTML = `
            <div class="welcome-screen" id="welcomeScreen">
                <div class="welcome-content">
                    <h1 class="welcome-title">
                        <span class="gradient-text">Welcome</span>
                    </h1>
                    <p class="welcome-subtitle">Your modern Japanese learning assistant</p>
                    
                    <div class="feature-cards">
                        <div class="feature-card">
                            <div class="feature-icon">🌏</div>
                            <h3>Multilingual</h3>
                            <p>English, Japanese, Bengali</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">📚</div>
                            <h3>JLPT Ready</h3>
                            <p>N5 to N2 support</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">✨</div>
                            <h3>Smart Help</h3>
                            <p>Grammar, translation, examples</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🎯</div>
                            <h3>Interactive</h3>
                            <p>Practice and learn naturally</p>
                        </div>
                    </div>

                    <div class="example-prompts">
                        <p class="prompts-title">Try asking:</p>
                        <div class="prompt-chips">
                            <button class="prompt-chip">Translate "Hello" to Japanese</button>
                            <button class="prompt-chip">Explain は vs が particles</button>
                            <button class="prompt-chip">JLPT N5 practice questions</button>
                            <button class="prompt-chip">How do I say "thank you" politely?</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.messagesContainer.innerHTML = welcomeHTML;
        this.welcomeScreen = document.getElementById('welcomeScreen');

        // Re-attach prompt chip listeners
        document.querySelectorAll('.prompt-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                this.messageInput.value = e.target.textContent;
                this.handleInput();
                this.sendMessage();
            });
        });

        this.renderChatHistory();
    }

    renderChatHistory() {
        const sortedChats = Object.values(this.chats);

        this.chatHistory.innerHTML = sortedChats.map(chat => `
            <div class="chat-history-item ${chat.id === this.currentChatId ? 'active' : ''}" 
                 data-chat-id="${chat.id}">
                ${chat.title}
            </div>
        `).join('');

        // Add click listeners
        document.querySelectorAll('.chat-history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const chatId = e.target.dataset.chatId;
                this.loadChat(chatId);
            });
        });
    }

    loadChat(chatId) {
        const chat = this.chats[chatId];
        if (!chat) return;

        this.currentChatId = chatId;
        this.messagesContainer.innerHTML = '';

        chat.messages.forEach(msg => {
            this.addMessage(msg.role, msg.content);
        });

        this.renderChatHistory();
    }

    saveChats() {
        try {
            localStorage.setItem('nihongobot_chats', JSON.stringify(this.chats));
        } catch (e) {
            console.error('Failed to save chats:', e);
        }
    }

    loadChats() {
        try {
            const saved = localStorage.getItem('nihongobot_chats');
            return saved ? JSON.parse(saved) : {};
        } catch (e) {
            console.error('Failed to load chats:', e);
            return {};
        }
    }

    // AI Response Logic - Now uses backend API
    async getAIResponse(userMessage) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/chat/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    chat_id: this.currentChatId
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Update chat_id if it was created by backend
            if (data.chat_id && !this.currentChatId) {
                this.currentChatId = data.chat_id;
            }

            return data.response;
        } catch (error) {
            console.error('API Error:', error);
            // Fallback to mock response if API is unavailable
            return this.getFallbackResponse(userMessage);
        }
    }

    // Fallback response when API is unavailable
    getFallbackResponse(userMessage) {
        const message = userMessage.toLowerCase();
        const lang = this.detectLanguage(userMessage);

        // Translation requests
        if (message.includes('translate') || message.includes('অনুবাদ')) {
            return this.handleTranslation(userMessage, lang);
        }

        // Grammar explanations
        if (message.includes('particle') || message.includes('は') || message.includes('が') ||
            message.includes('を') || message.includes('に') || message.includes('grammar')) {
            return this.handleGrammar(userMessage, lang);
        }

        // JLPT practice
        if (message.includes('jlpt') || message.includes('practice') || message.includes('test')) {
            return this.handleJLPT(userMessage, lang);
        }

        // Politeness/Formality
        if (message.includes('polite') || message.includes('formal') || message.includes('です') ||
            message.includes('ます') || message.includes('keigo')) {
            return this.handlePoliteness(userMessage, lang);
        }

        // Kanji questions
        if (message.includes('kanji') || message.includes('漢字')) {
            return this.handleKanji(userMessage, lang);
        }

        // Default response
        return this.getDefaultResponse(lang);
    }

    detectLanguage(text) {
        // Simple language detection
        if (/[\u0980-\u09FF]/.test(text)) return 'bn'; // Bengali
        if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(text)) return 'ja'; // Japanese
        return 'en'; // English (default)
    }

    handleTranslation(message, lang) {
        const examples = {
            en: `**Translation** ✨

Here are some translations:

• **Hello** → こんにちは (Konnichiwa)
• **Thank you** → ありがとうございます (Arigatou gozaimasu)
• **Good morning** → おはようございます (Ohayou gozaimasu)
• **Goodbye** → さようなら (Sayounara)

💡 **Tip:** Japanese has different politeness levels. The versions above are polite (です/ます form).

Want a specific phrase translated? Just ask!`,
            ja: `**翻訳** ✨

いくつかの翻訳例：

• **こんにちは** → Hello
• **ありがとう** → Thank you
• **おはよう** → Good morning

何を翻訳したいですか？`,
            bn: `**অনুবাদ** ✨

কিছু অনুবাদ উদাহরণ:

• **হ্যালো** → こんにちは (কোন্নিচিওয়া)
• **ধন্যবাদ** → ありがとうございます (আরিগাতো গোজাইমাস্)
• **সুপ্রভাত** → おはようございます (ওহায়ো গোজাইমাস্)

আপনি কোন শব্দ বা বাক্য অনুবাদ করতে চান?`
        };

        return examples[lang] || examples.en;
    }

    handleGrammar(message, lang) {
        const responses = {
            en: `**は vs が Particles** 📚

**は (wa)** - Topic marker
• Marks what you're talking about
• "As for X..."
• 私**は**学生です (I am a student)

**が (ga)** - Subject marker  
• Marks the subject doing the action
• Used for new information
• 誰**が**来ましたか？(Who came?)

**Key difference:**
• は = already known topic
• が = new information/emphasis

**Example:**
• 猫**は**好きです (I like cats - general statement)
• あの猫**が**好きです (I like *that* cat - specific)

Need more examples? Just ask! ✨`,
            ja: `**助詞 は と が** 📚

**は** - 主題を表す
• トピックマーカー
• 私**は**学生です

**が** - 主語を表す
• 新しい情報
• 誰**が**来ましたか？

もっと例が必要ですか？`,
            bn: `**は বনাম が পার্টিকেল** 📚

**は (ওয়া)** - বিষয় চিহ্নিতকারী
• যা নিয়ে কথা বলছেন
• 私**は**学生です (আমি একজন ছাত্র)

**が (গা)** - কর্তা চিহ্নিতকারী
• নতুন তথ্যের জন্য
• 誰**が**来ましたか？(কে এসেছে?)

আরও উদাহরণ চান?`
        };

        return responses[lang] || responses.en;
    }

    handleJLPT(message, lang) {
        const responses = {
            en: `**JLPT Practice** 🎯

**Sample N5 Question:**

Fill in the blank:
これ___私の本です。
a) は
b) が
c) を
d) に

**Answer:** a) は

**Explanation:** We use は to mark "this" as the topic of the sentence.
Translation: "This is my book."

---

**Vocabulary (N5):**
• 本 (ほん) - book
• 私 (わたし) - I, me
• これ - this

Want more practice questions? Specify your level (N5-N2)! 📝`,
            ja: `**JLPT 練習** 🎯

**N5 レベル問題:**

空欄を埋めてください：
これ___私の本です。

**答え:** は

もっと問題が必要ですか？レベルを教えてください！`,
            bn: `**JLPT অনুশীলন** 🎯

**নমুনা N5 প্রশ্ন:**

শূন্যস্থান পূরণ করুন:
これ___私の本です。
a) は
b) が
c) を
d) に

**উত্তর:** a) は

**ব্যাখ্যা:** "এটি" বিষয় চিহ্নিত করতে は ব্যবহার করি।

আরও প্রশ্ন চান? আপনার লেভেল বলুন (N5-N2)!`
        };

        return responses[lang] || responses.en;
    }

    handlePoliteness(message, lang) {
        const responses = {
            en: `**Politeness Levels** 🙇

**1. Casual (Plain form)**
• 行く (iku) - go
• 食べる (taberu) - eat
• Use with: friends, family

**2. Polite (です/ます)**
• 行きます (ikimasu) - go
• 食べます (tabemasu) - eat  
• Use with: strangers, work, formal situations

**3. Honorific (敬語 - Keigo)**
• いらっしゃる (irassharu) - go/come (respectful)
• 召し上がる (meshiagaru) - eat (respectful)
• Use with: customers, superiors

**Example:**
• Casual: ありがとう (thanks)
• Polite: ありがとうございます (thank you very much)
• Formal: 誠にありがとうございます (thank you very much indeed)

Master these levels to sound natural! ✨`,
            ja: `**丁寧さのレベル** 🙇

**1. 普通形**
• 友達や家族に使う

**2. 丁寧形 (です/ます)**
• 一般的な丁寧な形

**3. 敬語**
• お客様や上司に使う

もっと詳しく知りたいですか？`,
            bn: `**ভদ্রতার স্তর** 🙇

**১. অনানুষ্ঠানিক (সাধারণ)**
• 行く (ইকু) - যাওয়া
• বন্ধু, পরিবারের সাথে

**২. ভদ্র (です/ます)**
• 行きます (ইকিমাসু) - যাওয়া
• অপরিচিত, কাজে

**৩. সম্মানসূচক (敬語)**
• উচ্চপদস্থদের সাথে

**উদাহরণ:**
• অনানুষ্ঠানিক: ありがとう (ধন্যবাদ)
• ভদ্র: ありがとうございます (অনেক ধন্যবাদ)

আরও জানতে চান?`
        };

        return responses[lang] || responses.en;
    }

    handleKanji(message, lang) {
        const responses = {
            en: `**Kanji Learning** ✍️

**Example: 日 (nichi/hi)**

**Meanings:** sun, day

**Readings:**
• **音読み (On'yomi):** ニチ、ジツ
• **訓読み (Kun'yomi):** ひ、か

**Common words:**
• 日本 (にほん) - Japan
• 今日 (きょう) - today
• 誕生日 (たんじょうび) - birthday
• 毎日 (まいにち) - every day

**Stroke order:** (2 strokes)
1. Horizontal line (left to right)
2. Vertical line with box (top to bottom)

💡 **Tip:** This kanji looks like the sun! Remember it visually.

Want to learn a specific kanji? Just ask! 🎌`,
            ja: `**漢字学習** ✍️

**例: 日**

**意味:** 太陽、日

**読み方:**
• **音読み:** ニチ、ジツ  
• **訓読み:** ひ、か

**例:**
• 日本 - Japan
• 今日 - today

どの漢字を勉強したいですか？`,
            bn: `**কাঞ্জি শিক্ষা** ✍️

**উদাহরণ: 日 (নিচি/হি)**

**অর্থ:** সূর্য, দিন

**উচ্চারণ:**
• **অন-ইয়োমি:** ニチ、ジツ
• **কুন-ইয়োমি:** ひ、か

**সাধারণ শব্দ:**
• 日本 (にほん) - জাপান
• 今日 (きょう) - আজ
• 毎日 (まいにち) - প্রতিদিন

কোন কাঞ্জি শিখতে চান?`
        };

        return responses[lang] || responses.en;
    }

    // Theme Management
    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    getDefaultResponse(lang) {
        const responses = {
            en: `Hello! I'm your Japanese learning assistant. ✨

    I can help you with:

    📝 **Translation** (English/Bengali ↔ Japanese)
    📚 **Grammar explanations**
    🎯 **JLPT practice** (N5-N2)
    ✍️ **Kanji breakdown**
    🗣️ **Pronunciation tips**
    🙇 **Politeness levels**

    Try asking:
    • "Translate 'good morning' to Japanese"
    • "Explain the は particle"
    • "Give me N5 practice questions"
    • "How do I say 'thank you' politely?"

    What would you like to learn today?`,
            ja: `こんにちは！日本語学習アシスタントです。✨

    お手伝いできること:

    📝 翻訳
    📚 文法説明
    🎯 JLPT練習

    何を学びたいですか？`,
            bn: `হ্যালো! আমি আপনার জাপানিজ শেখার সহায়ক। ✨

    আমি সাহায্য করতে পারি:

    📝 **অনুবাদ** (ইংরেজি/বাংলা ↔ জাপানিজ)
    📚 **ব্যাকরণ ব্যাখ্যা**
    🎯 **JLPT অনুশীলন** (N5-N2)
    ✍️ **কাঞ্জি বিশ্লেষণ**

    আজ আপনি কী শিখতে চান?`
        };

        return responses[lang] || responses.en;
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NihongoBot();
});
