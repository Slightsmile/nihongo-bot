// Knowledge Hub - JavaScript Logic
class KnowledgeHub {
    constructor() {
        this.initTheme();
        this.initNavigation();
        this.loadChatHistory();
        this.loadProgress();
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

        // Back to chat button
        const backBtn = document.getElementById('backToChatBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        // Knowledge Hub button (already on this page)
        const knowledgeBtn = document.getElementById('knowledgeBtn');
        if (knowledgeBtn) {
            knowledgeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // Already on knowledge hub page
            });
        }

        // Course card buttons
        document.querySelectorAll('.hub-card[data-course]').forEach(card => {
            const button = card.querySelector('.card-button');
            const courseType = card.dataset.course;

            if (button) {
                button.addEventListener('click', () => {
                    this.startCourse(courseType);
                });
            }
        });
    }

    loadProgress() {
        // Load N5 progress
        const n5Card = document.querySelector('.hub-card[data-course="n5"]');
        if (n5Card) {
            const progress = this.getCourseProgress('n5');
            this.updateCardProgress(n5Card, progress);
        }

        // Load N4 progress
        const n4Card = document.querySelector('.hub-card[data-course="n4"]');
        if (n4Card) {
            const progress = this.getCourseProgress('n4');
            this.updateCardProgress(n4Card, progress);
        }
    }

    getCourseProgress(courseType) {
        // This would normally fetch from localStorage or API
        // For now, return mock data
        try {
            const saved = localStorage.getItem(`course_progress_${courseType} `);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.error('Failed to load progress:', e);
        }

        return {
            completed: 0,
            total: 0,
            percentage: 0
        };
    }

    updateCardProgress(card, progress) {
        const progressFill = card.querySelector('.progress-fill');
        const progressText = card.querySelector('.progress-text');

        if (progressFill) {
            progressFill.style.width = `${progress.percentage}% `;
        }

        if (progressText) {
            progressText.textContent = `${progress.completed} of ${progress.total} lessons completed`;
        }
    }

    startCourse(courseType) {
        // Navigate to the course-specific lesson page
        if (courseType === 'n5') {
            window.location.href = 'n5-lessons.html';
        } else if (courseType === 'n4') {
            window.location.href = 'n4-lessons.html';
        }
    }

    loadChatHistory() {
        // Load chat history from localStorage (same as main app)
        const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        const historyContainer = document.getElementById('chatHistory');

        if (historyContainer && chatHistory.length > 0) {
            historyContainer.innerHTML = chatHistory.slice(0, 10).map((chat, index) => `
    < div class="chat-history-item" data - chat - id="${index}" >
        ${chat.title || 'Untitled Chat'}
                </div >
    `).join('');
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new KnowledgeHub();
});
