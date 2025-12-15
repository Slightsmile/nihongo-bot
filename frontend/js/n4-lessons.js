// N4 Lessons Page - JavaScript Logic
class N4LessonsPage {
    constructor() {
        this.lessons = N4_LESSONS || [];
        this.initTheme();
        this.initNavigation();
        this.loadChatHistory();
        this.renderLessons();
    }

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

    initNavigation() {
        // New Chat button
        const newChatBtn = document.getElementById('newChatBtn');
        if (newChatBtn) {
            newChatBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        // Back to Knowledge Hub button
        const backBtn = document.getElementById('backToHubBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                window.location.href = 'knowledge-hub.html';
            });
        }

        // Knowledge Hub button
        const knowledgeBtn = document.getElementById('knowledgeBtn');
        if (knowledgeBtn) {
            knowledgeBtn.addEventListener('click', () => {
                window.location.href = 'knowledge-hub.html';
            });
        }
    }

    renderLessons() {
        const grid = document.getElementById('lessonsGrid');
        if (!grid) return;

        // Group lessons by section
        const sections = this.groupBySection();

        let html = '';
        sections.forEach(section => {
            html += this.renderSection(section);
        });

        grid.innerHTML = html;
    }

    groupBySection() {
        const sectionsMap = new Map();

        this.lessons.forEach(lesson => {
            const sectionName = lesson.section || 'General Lessons';
            if (!sectionsMap.has(sectionName)) {
                sectionsMap.set(sectionName, {
                    name: sectionName,
                    description: lesson.sectionDescription || '',
                    order: lesson.sectionOrder || 999,
                    lessons: []
                });
            }
            sectionsMap.get(sectionName).lessons.push(lesson);
        });

        // Convert to array and sort by order
        return Array.from(sectionsMap.values()).sort((a, b) => a.order - b.order);
    }

    renderSection(section) {
        const lessonsHtml = section.lessons
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map(lesson => this.renderLesson(lesson))
            .join('');

        return `
            <div class="section-header">
                <h2 class="section-title">${section.name}</h2>
                ${section.description ? `<p class="section-description">${section.description}</p>` : ''}
            </div>
            ${lessonsHtml}
        `;
    }

    renderLesson(lesson) {
        const displayNumber = lesson.displayNumber || `Lesson ${lesson.id}`;
        const emoji = lesson.emoji || '📚';
        const difficulty = lesson.difficulty || 'intermediate';
        const estimatedTime = lesson.estimatedTime || '45 mins';

        // Clean title to remove "Lesson X:" prefix and emoji code
        let cleanTitle = lesson.title
            .replace(/^(👋|📦|📍|⏰|🚃|🍜|🎁|🎨|❤️|🔢|📅|🎌|✍️|🔤|👂)\s*/u, '') // Remove emoji prefix first
            .replace(/^Lesson\s+\-?\d+:\s*/i, '') // Remove "Lesson X:"
            .replace(/^START:\s*/i, ''); // Remove "START:"

        return `
            <div class="lesson-card" data-lesson-id="${lesson.id}">
                <div class="lesson-card-header">
                    <div class="lesson-emoji">${emoji}</div>
                    <div class="lesson-info">
                        <div class="lesson-number">${displayNumber}</div>
                        <h3 class="lesson-title">${cleanTitle}</h3>
                        <div class="lesson-meta">
                            <span class="lesson-difficulty">
                                <span class="difficulty-badge difficulty-${difficulty}">${difficulty}</span>
                            </span>
                            <span class="lesson-time">⏱️ ${estimatedTime}</span>
                        </div>
                    </div>
                </div>

                <p class="lesson-description">${lesson.description}</p>

                ${lesson.topics ? `<div class="lesson-topics"><strong>Topics:</strong> ${lesson.topics}</div>` : ''}

                ${this.renderGrammar(lesson.grammar)}
                ${this.renderVocabulary(lesson.vocabulary)}
                ${this.renderQuickTips(lesson.quickTips)}
                ${this.renderFunFact(lesson.funFact)}

                <div class="lesson-actions">
                    <button class="action-btn chat-btn" onclick="startLessonChat(${lesson.id})">💬 Chat</button>
                    <button class="action-btn test-btn" onclick="startLessonTest(${lesson.id})">📝 Test</button>
                </div>
            </div>
        `;
    }

    renderGrammar(grammar) {
        if (!grammar || grammar.length === 0) return '';

        const visibleItems = grammar.slice(0, 5);
        const hiddenItems = grammar.slice(5);
        const hasHidden = hiddenItems.length > 0;

        return `
            <div class="lesson-section">
                <h4 class="lesson-section-title">📖 Grammar Points</h4>
                <ul class="lesson-list">
                    ${visibleItems.map(item => `<li>${item}</li>`).join('')}
                    ${hasHidden ? `
                        <div class="hidden-content" style="display: none;">
                            ${hiddenItems.map(item => `<li>${item}</li>`).join('')}
                        </div>
                        <li class="show-more-container">
                            <button class="show-more-btn" onclick="this.parentElement.previousElementSibling.style.display = this.parentElement.previousElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.parentElement.previousElementSibling.style.display === 'none' ? '+ ${hiddenItems.length} more...' : 'Show Less'">
                                + ${hiddenItems.length} more...
                            </button>
                        </li>
                    ` : ''}
                </ul>
            </div>
        `;
    }

    renderVocabulary(vocabulary) {
        if (!vocabulary || vocabulary.length === 0) return '';

        const visibleItems = vocabulary.slice(0, 6);
        const hiddenItems = vocabulary.slice(6);
        const hasHidden = hiddenItems.length > 0;

        return `
            <div class="lesson-section">
                <h4 class="lesson-section-title">📝 Key Vocabulary</h4>
                <ul class="lesson-list">
                    ${visibleItems.map(item => `<li>${item}</li>`).join('')}
                    ${hasHidden ? `
                        <div class="hidden-content" style="display: none;">
                            ${hiddenItems.map(item => `<li>${item}</li>`).join('')}
                        </div>
                        <li class="show-more-container">
                            <button class="show-more-btn" onclick="this.parentElement.previousElementSibling.style.display = this.parentElement.previousElementSibling.style.display === 'none' ? 'block' : 'none'; this.textContent = this.parentElement.previousElementSibling.style.display === 'none' ? '+ ${hiddenItems.length} more...' : 'Show Less'">
                                + ${hiddenItems.length} more...
                            </button>
                        </li>
                    ` : ''}
                </ul>
            </div>
        `;
    }

    renderQuickTips(tips) {
        if (!tips || tips.length === 0) return '';

        return `
            <div class="lesson-tips">
                <h4 class="lesson-section-title">💡 Quick Tips</h4>
                <ul class="lesson-tips-list">
                    ${tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    renderFunFact(funFact) {
        if (!funFact) return '';

        return `
            <div class="lesson-fun-fact">
                <strong>✨ Fun Fact:</strong> ${funFact}
            </div>
        `;
    }

    loadChatHistory() {
        // Load chat history from localStorage (same as main app)
        const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        const historyContainer = document.getElementById('chatHistory');

        if (historyContainer && chatHistory.length > 0) {
            historyContainer.innerHTML = chatHistory.slice(0, 10).map((chat, index) => `
                <div class="chat-history-item" data-chat-id="${index}">
                    ${chat.title || 'Untitled Chat'}
                </div>
            `).join('');
        }
    }
}


// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new N4LessonsPage();
});

// Global functions for lesson actions
window.startLessonChat = (lessonId) => {
    localStorage.setItem('lessonContext', JSON.stringify({
        action: 'chat',
        lessonId: lessonId,
        level: 'N4'
    }));
    window.location.href = 'index.html';
};

window.startLessonTest = (lessonId) => {
    localStorage.setItem('lessonContext', JSON.stringify({
        action: 'test',
        lessonId: lessonId,
        level: 'N4'
    }));
    window.location.href = 'quiz.html';
};
