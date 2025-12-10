// N5 Course Module - Enhanced MEGA VERSION! 🎌
// Super beginner-friendly with gamification and fun learning

class CourseModule {
    constructor() {
        this.courseHeader = document.getElementById('courseHeader');
        this.courseContent = document.getElementById('courseContent');
        this.lessonsList = document.getElementById('lessonsList');
        this.currentLesson = null;
        this.completedLessons = this.loadProgress();
        this.lessons = []; // Will be loaded from n5-lessons-data.js
        
        this.init();
    }

    async init() {
        // Load lessons from external file
        await this.loadLessons();
        
        // Toggle course module
        this.courseHeader.addEventListener('click', () => this.toggleCourse());
        
        // Render all lessons
        this.renderLessons();
        
        // Update progress
        this.updateProgress();
        
        // Auto-open course on first visit
        if (!localStorage.getItem('courseVisited')) {
            this.courseContent.classList.remove('collapsed');
            localStorage.setItem('courseVisited', 'true');
        }
    }

    async loadLessons() {
        // Check if N5_LESSONS is already loaded
        if (typeof N5_LESSONS !== 'undefined') {
            this.lessons = N5_LESSONS;
        } else {
            // Fallback minimal lessons if external file not loaded
            this.lessons = this.getFallbackLessons();
        }
    }

    getFallbackLessons() {
        // Minimal fallback if external file fails to load
        return [
            {
                id: 0,
                title: "🎌 Welcome! Let's Start Japanese",
                topics: "Greetings, Basic phrases",
                difficulty: "absolute-beginner",
                grammar: ["こんにちは", "ありがとう", "すみません"],
                vocabulary: ["おはよう", "こんにちは", "ありがとう"],
                description: "Your first step into Japanese!",
                emoji: "🎌"
            }
        ];
    }

    toggleCourse() {
        this.courseHeader.classList.toggle('collapsed');
        this.courseContent.classList.toggle('collapsed');
    }

    renderLessons() {
        this.lessonsList.innerHTML = '';
        
        // Group lessons by section and sort them
        const writingLessons = this.lessons.filter(l => l.id < 0).sort((a, b) => a.id - b.id);
        const regularLessons = this.lessons.filter(l => l.id >= 0).sort((a, b) => a.id - b.id);
        
        // Writing System Section
        if (writingLessons.length > 0) {
            const writingHeader = document.createElement('div');
            writingHeader.className = 'lesson-section-header';
            writingHeader.innerHTML = '<span>✍️ Writing System (Lessons 1-5)</span>';
            this.lessonsList.appendChild(writingHeader);
            
            writingLessons.forEach(lesson => {
                const lessonItem = this.createLessonElement(lesson);
                this.lessonsList.appendChild(lessonItem);
            });
        }
        
        // Main Course Section
        if (regularLessons.length > 0) {
            const courseHeader = document.createElement('div');
            courseHeader.className = 'lesson-section-header';
            courseHeader.innerHTML = '<span>📚 N5 Main Course (Lessons 6-34)</span>';
            this.lessonsList.appendChild(courseHeader);
            
            regularLessons.forEach(lesson => {
                const lessonItem = this.createLessonElement(lesson);
                this.lessonsList.appendChild(lessonItem);
            });
        }
    }

    createLessonElement(lesson) {
        const isCompleted = this.completedLessons.includes(lesson.id);
        const isActive = this.currentLesson === lesson.id;
        
        const div = document.createElement('div');
        div.className = `lesson-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
        div.dataset.lessonId = lesson.id;
        div.dataset.difficulty = lesson.difficulty || 'beginner';
        
        // Add emoji if available
        const emoji = lesson.emoji || (lesson.id === 0 ? '🎌' : '📚');
        
        // Display lesson numbers: 1-5 for kana lessons (-5 to -1), 6-34 for N5 lessons (0-28)
        let displayNumber;
        if (lesson.id < 0) {
            displayNumber = `${lesson.id + 6}`;  // -5 becomes 1, -4 becomes 2, -3 becomes 3, -2 becomes 4, -1 becomes 5
        } else {
            displayNumber = `${lesson.id + 6}`;  // 0 becomes 6, 1 becomes 7, ..., 28 becomes 34
        }
        
        div.innerHTML = `
            <div class="lesson-number ${lesson.difficulty || 'beginner'}-badge">${displayNumber}</div>
            <div class="lesson-info">
                <div class="lesson-title">${emoji} ${lesson.title}</div>
                <div class="lesson-topics">${lesson.topics}</div>
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
        
        div.addEventListener('click', () => this.selectLesson(lesson));
        
        // Add hover tooltip
        div.title = `${lesson.description}\nDifficulty: ${lesson.difficulty || 'beginner'}`;
        
        return div;
    }

    selectLesson(lesson) {
        this.currentLesson = lesson.id;
        
        // Update UI
        document.querySelectorAll('.lesson-item').forEach(item => {
            item.classList.remove('active');
        });
        const selectedItem = document.querySelector(`[data-lesson-id="${lesson.id}"]`);
        if (selectedItem) {
            selectedItem.classList.add('active');
            selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
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
            
            // Scroll to bottom
            window.nihongoBot.messagesContainer.scrollTop = window.nihongoBot.messagesContainer.scrollHeight;
        }
    }

    formatLessonContent(lesson) {
        const difficultyEmoji = {
            'absolute-beginner': '🌱',
            'beginner': '🌿',
            'intermediate': '🌳',
            'advanced': '🏔️'
        };
        
        let content = `# ${lesson.title}\n\n`;
        
        // Add difficulty and time
        if (lesson.difficulty) {
            content += `${difficultyEmoji[lesson.difficulty]} **Difficulty:** ${lesson.difficulty}\n`;
        }
        if (lesson.estimatedTime) {
            content += `⏱️ **Time:** ${lesson.estimatedTime}\n`;
        }
        
        content += `\n📖 **Description:** ${lesson.description}\n\n`;
        
        // Fun fact
        if (lesson.funFact) {
            content += `💡 **Fun Fact:** ${lesson.funFact}\n\n`;
        }
        
        // Quick tips
        if (lesson.quickTips && lesson.quickTips.length > 0) {
            content += `## 💎 Quick Tips\n`;
            lesson.quickTips.forEach(tip => {
                content += `${tip}\n`;
            });
            content += `\n`;
        }
        
        // Topics
        content += `## 🎯 Topics Covered\n${lesson.topics}\n\n`;
        
        // Grammar points / Characters
        content += `## 📝 ${lesson.id < 0 ? 'Characters & Pronunciation' : 'Grammar Points'}\n`;
        lesson.grammar.forEach((g, i) => {
            content += `${i + 1}. ${g}\n`;
        });
        content += `\n`;
        
        // Key vocabulary
        content += `## 📚 Key ${lesson.id < 0 ? 'Characters' : 'Vocabulary'}\n`;
        const vocabToShow = lesson.vocabulary.slice(0, 15);
        content += `${vocabToShow.join('、')}`;
        if (lesson.vocabulary.length > 15) {
            content += `... (${lesson.vocabulary.length - 15} more)`;
        }
        content += `\n\n`;
        
        // Writing guide for kana lessons
        if (lesson.writingGuide && Object.keys(lesson.writingGuide).length > 0) {
            content += `## ✍️ Writing Guide\n`;
            Object.entries(lesson.writingGuide).forEach(([char, guide]) => {
                content += `**${char}**: ${guide}\n`;
            });
            content += `\n`;
        }
        
        // Common words for katakana
        if (lesson.commonWords && lesson.commonWords.length > 0) {
            content += `## 🌍 Common Words to Practice\n`;
            lesson.commonWords.forEach(word => {
                content += `• ${word}\n`;
            });
            content += `\n`;
        }
        
        // Practice prompts
        if (lesson.practicePrompts && lesson.practicePrompts.length > 0) {
            content += `---\n\n## 💪 Ready to Practice?\n\n`;
            content += `Try these with me:\n\n`;
            lesson.practicePrompts.forEach((prompt, i) => {
                content += `${i + 1}. "${prompt}"\n`;
            });
        } else {
            content += `---\n\n## 💪 Ready to Practice?\n\n`;
            content += `Ask me anything about this lesson! Try:\n`;
            content += `• "Explain the first ${lesson.id < 0 ? 'character' : 'grammar point'} with examples"\n`;
            content += `• "Give me practice sentences for this lesson"\n`;
            content += `• "Quiz me on lesson ${lesson.id}"\n`;
            content += `• "Create a ${lesson.id < 0 ? 'writing drill' : 'dialogue'} using these ${lesson.id < 0 ? 'characters' : 'grammar points'}"\n`;
        }
        
        return content.trim();
    }

    markLessonComplete(lessonId) {
        if (!this.completedLessons.includes(lessonId)) {
            this.completedLessons.push(lessonId);
            this.saveProgress();
            this.updateProgress();
            this.renderLessons();
            
            // Show celebration message
            this.showCompletionCelebration(lessonId);
        }
    }

    showCompletionCelebration(lessonId) {
        const lesson = this.lessons.find(l => l.id === lessonId);
        if (lesson && window.nihongoBot) {
            const celebration = `
🎉 **Congratulations!** 🎉

You've completed **${lesson.title}**!

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
        const total = this.lessons.length;
        const completed = this.completedLessons.length;
        const percentage = Math.round((completed / total) * 100);
        
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${completed} of ${total} lessons${percentage > 0 ? ` (${percentage}%)` : ''}`;
        }
        
        // Update course header with progress emoji
        this.updateCourseHeaderEmoji(percentage);
    }

    updateCourseHeaderEmoji(percentage) {
        const title = this.courseHeader.querySelector('.course-title');
        if (title) {
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
    }

    loadProgress() {
        const saved = localStorage.getItem('n5_progress');
        return saved ? JSON.parse(saved) : [];
    }

    saveProgress() {
        localStorage.setItem('n5_progress', JSON.stringify(this.completedLessons));
    }

    resetProgress() {
        if (confirm('🔄 Are you sure you want to reset ALL your progress?\n\nThis will clear all completed lessons and cannot be undone!')) {
            this.completedLessons = [];
            this.currentLesson = null;
            this.saveProgress();
            this.updateProgress();
            this.renderLessons();
            
            if (window.nihongoBot) {
                window.nihongoBot.addMessage('assistant', '✨ Progress reset! Ready to start your Japanese journey again! がんばって！💪');
            }
        }
    }

    // Get next recommended lesson
    getNextLesson() {
        for (let lesson of this.lessons) {
            if (!this.completedLessons.includes(lesson.id)) {
                return lesson;
            }
        }
        return null; // All lessons completed!
    }

    // Jump to next uncompleted lesson
    goToNextLesson() {
        const nextLesson = this.getNextLesson();
        if (nextLesson) {
            this.selectLesson(nextLesson);
        } else {
            if (window.nihongoBot) {
                window.nihongoBot.addMessage('assistant', '🎉🏆 Amazing! You\'ve completed ALL lessons!\n\nYou\'re ready for N4 level! おめでとうございます！🎌✨');
            }
        }
    }
}

// Initialize course module when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.courseModule = new CourseModule();
    
    // Add keyboard shortcut: Ctrl+L to go to next lesson
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'l' && window.courseModule) {
            e.preventDefault();
            window.courseModule.goToNextLesson();
        }
    });
});
