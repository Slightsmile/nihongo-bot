// Multi-level Course Module manager supporting reusable course containers

class CourseModule {
    constructor(config = {}) {
        this.config = {
            courseId: config.courseId || 'n5',
            courseLevelLabel: config.courseLevelLabel || 'N5',
            rootSelector: config.rootSelector || '.course-module',
            rootElement: config.rootElement || null,
            lessonsData: config.lessonsData,
            globalLessonsName: config.globalLessonsName,
            progressKey: config.progressKey || `${config.courseId || 'n5'}_progress`,
            visitedKey: config.visitedKey || `${config.courseId || 'n5'}_courseVisited`,
            bannerMessage: config.bannerMessage || '',
            writingSectionTitle: config.writingSectionTitle || '✍️ Writing System Lessons',
            mainSectionTitle: config.mainSectionTitle || '📚 Course Lessons',
            nextLevelMessage: config.nextLevelMessage || 'Keep climbing to the next JLPT level! ✨'
        };

        this.root = this.resolveRootElement();

        if (!this.root) {
            console.warn(`[CourseModule] Root element not found for course: ${this.config.courseId}`);
            return;
        }

        this.courseHeader = this.root.querySelector('.course-header');
        this.courseContent = this.root.querySelector('.course-content');
        this.lessonsList = this.root.querySelector('.lessons-list');
        this.progressFill = this.root.querySelector('.progress-fill');
        this.progressText = this.root.querySelector('.progress-text');
        this.bannerText = this.root.querySelector('.course-info-banner .banner-text');

        if (this.bannerText && this.config.bannerMessage) {
            this.bannerText.innerHTML = this.config.bannerMessage;
        }

        this.currentLesson = null;
        this.lessons = [];
        this.completedLessons = this.loadProgress();

        this.init();
    }

    resolveRootElement() {
        if (this.config.rootElement instanceof HTMLElement) {
            return this.config.rootElement;
        }

        if (typeof this.config.rootSelector === 'string') {
            return document.querySelector(this.config.rootSelector);
        }

        if (Array.isArray(this.config.rootSelector)) {
            for (const selector of this.config.rootSelector) {
                const element = document.querySelector(selector);
                if (element) {
                    return element;
                }
            }
        }

        return null;
    }

    async init() {
        await this.loadLessons();

        if (this.courseHeader) {
            this.courseHeader.addEventListener('click', () => this.toggleCourse());
        }

        this.renderLessons();
        this.updateProgress();

        if (this.courseContent && !localStorage.getItem(this.config.visitedKey)) {
            this.courseContent.classList.remove('collapsed');
            if (this.courseHeader) {
                this.courseHeader.classList.remove('collapsed');
            }
            localStorage.setItem(this.config.visitedKey, 'true');
        }
    }

    async loadLessons() {
        if (Array.isArray(this.config.lessonsData) && this.config.lessonsData.length > 0) {
            this.lessons = this.cloneLessons(this.config.lessonsData);
            return;
        }

        if (typeof this.config.globalLessonsName === 'string') {
            const globalLessons = window[this.config.globalLessonsName];
            if (Array.isArray(globalLessons) && globalLessons.length > 0) {
                this.lessons = this.cloneLessons(globalLessons);
                return;
            }
        }

        if (typeof N5_LESSONS !== 'undefined' && this.config.courseId === 'n5') {
            this.lessons = this.cloneLessons(N5_LESSONS);
            return;
        }

        this.lessons = this.getFallbackLessons();
    }

    cloneLessons(lessons) {
        return lessons.map(lesson => ({ ...lesson }));
    }

    getFallbackLessons() {
        return [
            {
                id: 0,
                title: `🎌 Welcome to Japanese (${this.config.courseLevelLabel})`,
                topics: 'Course overview, learning tips',
                difficulty: 'beginner',
                grammar: ['Course structure introduction', 'Key study strategies'],
                vocabulary: ['はじめまして - nice to meet you', 'よろしく - please treat me well'],
                description: 'Your first step into this course. Let’s set you up for success!',
                emoji: '🎌'
            }
        ];
    }

    toggleCourse() {
        if (!this.courseHeader || !this.courseContent) {
            return;
        }

        this.courseHeader.classList.toggle('collapsed');
        this.courseContent.classList.toggle('collapsed');
    }

    renderLessons() {
        if (!this.lessonsList) {
            return;
        }

        this.lessonsList.innerHTML = '';

        if (!Array.isArray(this.lessons) || this.lessons.length === 0) {
            const emptyState = document.createElement('div');
            emptyState.className = 'lesson-empty-state';
            emptyState.textContent = 'Lessons coming soon! Stay tuned.';
            this.lessonsList.appendChild(emptyState);
            return;
        }

        const hasCustomSections = this.lessons.some(lesson => Boolean(lesson.section));

        if (hasCustomSections) {
            this.renderSectionedLessons();
        } else {
            this.renderLegacyLessons();
        }
    }

    renderLegacyLessons() {
        const writingLessons = this.lessons
            .filter(lesson => typeof lesson.id === 'number' && lesson.id < 0)
            .sort((a, b) => this.compareLessons(a, b));

        const regularLessons = this.lessons
            .filter(lesson => !(typeof lesson.id === 'number' && lesson.id < 0))
            .sort((a, b) => this.compareLessons(a, b));

        if (writingLessons.length > 0) {
            const writingHeader = document.createElement('div');
            writingHeader.className = 'lesson-section-header';
            writingHeader.innerHTML = `<span>${this.config.writingSectionTitle}</span>`;
            this.lessonsList.appendChild(writingHeader);

            writingLessons.forEach(lesson => {
                const lessonItem = this.createLessonElement(lesson);
                this.lessonsList.appendChild(lessonItem);
            });
        }

        if (regularLessons.length > 0) {
            const mainHeader = document.createElement('div');
            mainHeader.className = 'lesson-section-header';
            mainHeader.innerHTML = `<span>${this.config.mainSectionTitle}</span>`;
            this.lessonsList.appendChild(mainHeader);

            regularLessons.forEach(lesson => {
                const lessonItem = this.createLessonElement(lesson);
                this.lessonsList.appendChild(lessonItem);
            });
        }
    }

    renderSectionedLessons() {
        const sectionMap = new Map();

        this.lessons.forEach(lesson => {
            const sectionName = lesson.section || 'Course Lessons';
            if (!sectionMap.has(sectionName)) {
                sectionMap.set(sectionName, []);
            }
            sectionMap.get(sectionName).push(lesson);
        });

        const sections = Array.from(sectionMap.entries()).map(([name, sectionLessons]) => {
            const orderCandidates = sectionLessons
                .map(lesson => typeof lesson.sectionOrder === 'number' ? lesson.sectionOrder : Number.MAX_SAFE_INTEGER);
            const sectionOrder = Math.min(...orderCandidates);
            sectionLessons.sort((a, b) => this.compareLessons(a, b));

            const descriptor = sectionLessons.find(lesson => Boolean(lesson.sectionDescription));

            return {
                name,
                lessons: sectionLessons,
                order: sectionOrder,
                description: descriptor ? descriptor.sectionDescription : ''
            };
        }).sort((a, b) => a.order - b.order);

        sections.forEach(section => {
            const header = document.createElement('div');
            header.className = 'lesson-section-header';
            header.innerHTML = `<span>${section.name}</span>`;
            this.lessonsList.appendChild(header);

            if (section.description) {
                const description = document.createElement('div');
                description.className = 'lesson-section-description';
                description.textContent = section.description;
                this.lessonsList.appendChild(description);
            }

            section.lessons.forEach(lesson => {
                const lessonElement = this.createLessonElement(lesson);
                this.lessonsList.appendChild(lessonElement);
            });
        });
    }

    createLessonElement(lesson) {
        const isCompleted = this.completedLessons.includes(lesson.id);
        const isActive = this.currentLesson === lesson.id;
        const displayNumber = this.getDisplayNumber(lesson);
        const emoji = lesson.emoji || '📚';
        const topics = Array.isArray(lesson.topics) ? lesson.topics.join(' • ') : lesson.topics || '';

        const lessonElement = document.createElement('div');
        lessonElement.className = `lesson-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`.trim();
        lessonElement.dataset.lessonId = lesson.id;
        lessonElement.dataset.courseId = this.config.courseId;
        lessonElement.dataset.difficulty = lesson.difficulty || 'beginner';

        lessonElement.innerHTML = `
            <div class="lesson-number ${(lesson.difficulty || 'beginner')}-badge">${displayNumber}</div>
            <div class="lesson-info">
                <div class="lesson-title">${emoji} ${lesson.title}</div>
                <div class="lesson-topics">${topics}</div>
                ${lesson.estimatedTime ? `<div class="lesson-time">⏱️ ${lesson.estimatedTime}</div>` : ''}
            </div>
            ${isCompleted ? `
                <div class="lesson-status">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
            ` : ''}
        `;

        lessonElement.addEventListener('click', () => this.selectLesson(lesson));

        const tooltipParts = [lesson.description];
        if (lesson.section) {
            tooltipParts.push(`Section: ${lesson.section}`);
        }
        if (lesson.difficulty) {
            tooltipParts.push(`Difficulty: ${lesson.difficulty}`);
        }
        if (lesson.estimatedTime) {
            tooltipParts.push(`Time: ${lesson.estimatedTime}`);
        }

        lessonElement.title = tooltipParts.filter(Boolean).join('\n');

        return lessonElement;
    }

    getDisplayNumber(lesson) {
        if (lesson.displayNumber !== undefined) {
            return lesson.displayNumber;
        }

        if (lesson.number !== undefined) {
            return lesson.number;
        }

        if (typeof lesson.id === 'number') {
            if (lesson.id < 0) {
                return lesson.id + 6;
            }

            return lesson.id + 6;
        }

        return '?';
    }

    extractNumericSortValue(lesson) {
        if (typeof lesson.order === 'number') {
            return lesson.order;
        }

        if (typeof lesson.displayNumber === 'number') {
            return lesson.displayNumber;
        }

        if (typeof lesson.number === 'number') {
            return lesson.number;
        }

        if (typeof lesson.displayNumber === 'string') {
            const match = lesson.displayNumber.match(/\d+/);
            if (match) {
                return parseInt(match[0], 10);
            }
        }

        return typeof lesson.id === 'number' ? lesson.id : Number.MAX_SAFE_INTEGER;
    }

    compareLessons(a, b) {
        const sectionOrderA = typeof a.sectionOrder === 'number' ? a.sectionOrder : Number.MAX_SAFE_INTEGER;
        const sectionOrderB = typeof b.sectionOrder === 'number' ? b.sectionOrder : Number.MAX_SAFE_INTEGER;

        if (sectionOrderA !== sectionOrderB) {
            return sectionOrderA - sectionOrderB;
        }

        const numericA = this.extractNumericSortValue(a);
        const numericB = this.extractNumericSortValue(b);

        if (numericA !== numericB) {
            return numericA - numericB;
        }

        return (a.id || 0) - (b.id || 0);
    }

    getSortedLessons() {
        const lessons = Array.isArray(this.lessons) ? [...this.lessons] : [];
        lessons.sort((a, b) => this.compareLessons(a, b));
        return lessons;
    }

    selectLesson(lesson) {
        this.currentLesson = lesson.id;

        if (this.root) {
            this.root.querySelectorAll('.lesson-item').forEach(item => {
                item.classList.remove('active');
            });

            const selectedItem = this.root.querySelector(`[data-lesson-id="${lesson.id}"]`);
            if (selectedItem) {
                selectedItem.classList.add('active');
                selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        this.loadLessonContent(lesson);
    }

    loadLessonContent(lesson) {
        if (!window.nihongoBot) {
            return;
        }

        const welcomeScreen = document.getElementById('welcomeScreen');
        if (welcomeScreen && !welcomeScreen.classList.contains('hidden')) {
            welcomeScreen.classList.add('fade-out');
            setTimeout(() => welcomeScreen.classList.add('hidden'), 300);
        }

        const lessonContent = this.formatLessonContent(lesson);
        window.nihongoBot.addMessage('assistant', lessonContent);
        window.nihongoBot.messagesContainer.scrollTop = window.nihongoBot.messagesContainer.scrollHeight;
    }

    formatLessonContent(lesson) {
        const difficultyEmoji = {
            'absolute-beginner': '🌱',
            'beginner': '🌿',
            'intermediate': '🌳',
            'advanced': '🏔️'
        };

        let content = `# ${lesson.title}\n\n`;

        if (lesson.section) {
            content += `📚 **Section:** ${lesson.section}\n`;
        }

        if (lesson.difficulty) {
            const emoji = difficultyEmoji[lesson.difficulty] || '🎯';
            content += `${emoji} **Difficulty:** ${lesson.difficulty}\n`;
        }

        if (lesson.estimatedTime) {
            content += `⏱️ **Time:** ${lesson.estimatedTime}\n`;
        }

        content += `\n📖 **Description:** ${lesson.description}\n\n`;

        if (lesson.funFact) {
            content += `💡 **Fun Fact:** ${lesson.funFact}\n\n`;
        }

        if (Array.isArray(lesson.quickTips) && lesson.quickTips.length > 0) {
            content += '## 💎 Quick Tips\n';
            lesson.quickTips.forEach(tip => {
                content += `${tip}\n`;
            });
            content += '\n';
        }

        const topics = Array.isArray(lesson.topics) ? lesson.topics.join(' / ') : (lesson.topics || 'Core lesson focus');
        content += `## 🎯 Topics Covered\n${topics}\n\n`;

        const grammarPoints = Array.isArray(lesson.grammar) ? lesson.grammar : [];
        content += `## 📝 Grammar Points\n`;
        grammarPoints.forEach((point, index) => {
            content += `${index + 1}. ${point}\n`;
        });
        if (grammarPoints.length === 0) {
            content += 'No grammar points listed yet.\n';
        }
        content += '\n';

        const vocabularyList = Array.isArray(lesson.vocabulary) ? lesson.vocabulary : [];
        content += '## 📚 Key Vocabulary\n';
        if (vocabularyList.length > 0) {
            const vocabToShow = vocabularyList.slice(0, 20);
            content += `${vocabToShow.join('、')}`;
            if (vocabularyList.length > 20) {
                content += `... (${vocabularyList.length - 20} more)`;
            }
        } else {
            content += 'Vocabulary for this lesson is coming soon!';
        }
        content += '\n\n';

        if (lesson.kanjiFocus && lesson.kanjiFocus.length > 0) {
            content += '## 🀄 Kanji Focus\n';
            lesson.kanjiFocus.forEach(kanji => {
                content += `• ${kanji}\n`;
            });
            content += '\n';
        }

        if (lesson.examples && lesson.examples.length > 0) {
            content += '## 🗣️ Example Sentences\n';
            lesson.examples.forEach(example => {
                content += `• ${example}\n`;
            });
            content += '\n';
        }

        if (lesson.resources && lesson.resources.length > 0) {
            content += '## 🔗 Extra Resources\n';
            lesson.resources.forEach(resource => {
                content += `• ${resource}\n`;
            });
            content += '\n';
        }

        const lessonLabel = lesson.displayNumber || lesson.number || lesson.id;

        if (Array.isArray(lesson.practicePrompts) && lesson.practicePrompts.length > 0) {
            content += '---\n\n## 💪 Ready to Practice?\n\nTry these with me:\n\n';
            lesson.practicePrompts.forEach((prompt, index) => {
                content += `${index + 1}. "${prompt}"\n`;
            });
        } else {
            content += '---\n\n## 💪 Ready to Practice?\n\n';
            content += 'Ask me anything about this lesson! Try:\n';
            content += `• "Explain the first grammar point with examples"\n`;
            content += `• "Give me practice sentences for this lesson"\n`;
            content += `• "Quiz me on lesson ${lessonLabel}"\n`;
            content += `• "Create a dialogue using these grammar points"\n`;
        }

        return content.trim();
    }

    markLessonComplete(lessonId) {
        if (!this.completedLessons.includes(lessonId)) {
            this.completedLessons.push(lessonId);
            this.saveProgress();
            this.updateProgress();
            this.renderLessons();
            this.showCompletionCelebration(lessonId);
        }
    }

    showCompletionCelebration(lessonId) {
        const lesson = this.lessons.find(l => l.id === lessonId);
        if (lesson && window.nihongoBot) {
            const celebration = `
🎉 **Congratulations!** 🎉

You've completed **${lesson.title}** in the ${this.config.courseLevelLabel} course!

Keep up the amazing work! ${this.getEncouragementMessage()}

**Progress:** ${this.completedLessons.length}/${this.lessons.length} lessons completed
            `.trim();

            window.nihongoBot.addMessage('assistant', celebration);
        }
    }

    getEncouragementMessage() {
        const messages = [
            "You're making fantastic progress! 🌟",
            "Awesome job! がんばってね！💪",
            "You're on fire! Keep learning! 🔥",
            "素晴らしい！(Wonderful!) Keep it up! ✨",
            "Great work! 日本語が上手ですね！📚",
            "You're a star learner! ⭐",
            "Incredible progress! よくできました！🎌"
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    updateProgress() {
        const total = Array.isArray(this.lessons) ? this.lessons.length : 0;
        const completed = this.completedLessons.length;
        const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

        if (this.progressFill) {
            this.progressFill.style.width = `${percentage}%`;
        }

        if (this.progressText) {
            this.progressText.textContent = `${completed} of ${total} lessons${percentage > 0 ? ` (${percentage}%)` : ''}`;
        }

        this.updateCourseHeaderEmoji(percentage);
    }

    updateCourseHeaderEmoji(percentage) {
        if (!this.courseHeader) {
            return;
        }

        const title = this.courseHeader.querySelector('.course-title');
        if (!title) {
            return;
        }

        let emoji = '📖';
        if (percentage >= 100) emoji = '🏆';
        else if (percentage >= 75) emoji = '🌟';
        else if (percentage >= 50) emoji = '💪';
        else if (percentage >= 25) emoji = '🌱';

        const iconSpan = title.querySelector('.course-icon');
        if (iconSpan) {
            iconSpan.textContent = emoji;
        }
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem(this.config.progressKey);
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.warn(`[CourseModule] Failed to load progress for ${this.config.courseId}`, error);
            return [];
        }
    }

    saveProgress() {
        try {
            localStorage.setItem(this.config.progressKey, JSON.stringify(this.completedLessons));
        } catch (error) {
            console.warn(`[CourseModule] Failed to save progress for ${this.config.courseId}`, error);
        }
    }

    resetProgress() {
        const confirmation = confirm(
            `🔄 Reset ${this.config.courseLevelLabel} progress?\n\nThis will clear every completed lesson and cannot be undone!`
        );

        if (confirmation) {
            this.completedLessons = [];
            this.currentLesson = null;
            this.saveProgress();
            this.updateProgress();
            this.renderLessons();

            if (window.nihongoBot) {
                window.nihongoBot.addMessage('assistant', `✨ ${this.config.courseLevelLabel} progress reset! Ready for a fresh start! がんばって！💪`);
            }
        }
    }

    getNextLesson() {
        const sortedLessons = this.getSortedLessons();
        return sortedLessons.find(lesson => !this.completedLessons.includes(lesson.id)) || null;
    }

    goToNextLesson() {
        const nextLesson = this.getNextLesson();
        if (nextLesson) {
            this.selectLesson(nextLesson);
            return;
        }

        if (window.nihongoBot) {
            window.nihongoBot.addMessage('assistant', `🎉🏆 Amazing! You've completed ALL ${this.config.courseLevelLabel} lessons!\n\n${this.config.nextLevelMessage}`);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.courseModules = window.courseModules || {};

    if (typeof N5_LESSONS !== 'undefined') {
        const n5Module = new CourseModule({
            courseId: 'n5',
            courseLevelLabel: 'N5',
            rootSelector: '.course-module[data-course="n5"]',
            lessonsData: N5_LESSONS,
            progressKey: 'n5_progress',
            visitedKey: 'n5_courseVisited',
            bannerMessage: '✍️ Lessons 1-5 = ALL Hiragana & Katakana!<br><small>Every character with pronunciation guides</small>',
            writingSectionTitle: '✍️ Writing System (Lessons 1-5)',
            mainSectionTitle: '📚 N5 Main Course (Lessons 6-34)',
            nextLevelMessage: "You're ready for N4 level! おめでとうございます！🎌✨"
        });

        if (n5Module && n5Module.root) {
            window.courseModules.n5 = n5Module;
            window.courseModule = n5Module; // backward compatibility
        }
    }

    if (typeof N4_LESSONS !== 'undefined') {
        const n4Module = new CourseModule({
            courseId: 'n4',
            courseLevelLabel: 'N4',
            rootSelector: '.course-module[data-course="n4"]',
            lessonsData: N4_LESSONS,
            progressKey: 'n4_progress',
            visitedKey: 'n4_courseVisited',
            bannerMessage: '🧠 Build complete N4 grammar, vocabulary, reading & listening confidence.',
            mainSectionTitle: '📘 N4 Comprehensive Course',
            nextLevelMessage: "You're ready for N3 level! おめでとうございます！🎌✨"
        });

        if (n4Module && n4Module.root) {
            window.courseModules.n4 = n4Module;
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'l') {
            event.preventDefault();

            const modules = Object.values(window.courseModules || {});
            const activeModule = modules.find(module => module && module.courseContent && !module.courseContent.classList.contains('collapsed'));

            if (activeModule) {
                activeModule.goToNextLesson();
            } else if (window.courseModule) {
                window.courseModule.goToNextLesson();
            }
        }
    });
});
