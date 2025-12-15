class LessonQuiz {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = [];
        this.lesson = null;
        this.apiBaseUrl = 'http://localhost:8000/api'; // Same as app.js

        this.init();
    }

    init() {
        // Elements
        this.loadingState = document.getElementById('loadingState');
        this.quizView = document.getElementById('quizView');
        this.resultsView = document.getElementById('resultsView');
        this.questionText = document.getElementById('questionText');
        this.optionsGrid = document.getElementById('optionsGrid');
        this.feedbackArea = document.getElementById('feedbackArea');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentQSpan = document.getElementById('currentQ');
        this.totalQSpan = document.getElementById('totalQ');
        this.lessonTitle = document.getElementById('lessonTitle');
        this.backToLessonBtn = document.getElementById('backToLessonBtn');

        // Check context
        const contextStr = localStorage.getItem('lessonContext');
        if (!contextStr) {
            alert('No quiz context found. Returning to home.');
            window.location.href = 'index.html';
            return;
        }

        const context = JSON.parse(contextStr);
        if (context.action !== 'test') return;

        // Load Lesson Data
        if (context.level === 'N5' && typeof N5_LESSONS !== 'undefined') {
            this.lesson = N5_LESSONS.find(l => l.id == context.lessonId);
            this.backToLessonBtn.href = 'n5-lessons.html';
        } else if (context.level === 'N4' && typeof N4_LESSONS !== 'undefined') {
            this.lesson = N4_LESSONS.find(l => l.id == context.lessonId);
            this.backToLessonBtn.href = 'n4-lessons.html';
        }

        if (!this.lesson) {
            alert('Lesson data not found.');
            return;
        }

        this.lessonTitle.textContent = this.lesson.title;

        // Generate Quiz
        this.generateQuiz();

        // Event Listeners
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
    }

    async generateQuiz() {
        try {
            const prompt = `
                Generate a quiz for Japanese Lesson: "${this.lesson.title}".
                Topics: ${this.lesson.topics}
                Grammar: ${JSON.stringify(this.lesson.grammar)}
                Vocabulary: ${JSON.stringify(this.lesson.vocabulary)}
                
                Create exactly 10 multiple choice questions.
                
                OUTPUT FORMAT:
                Return ONLY a valid JSON array.
                DO NOT use markdown code blocks.
                DO NOT include trailing commas.
                Escape any double quotes inside strings with backslash.
                
                JSON Structure:
                [
                    {
                        "question": "Question text here",
                        "options": ["A", "B", "C", "D"],
                        "correctIndex": 0,
                        "explanation": "Explanation here"
                    }
                ]
            `;

            const response = await fetch(`${this.apiBaseUrl}/chat/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: prompt,
                    chat_id: 'quiz-generation-' + Date.now()
                })
            });

            const data = await response.json();
            let content = data.response;
            console.log('Raw Quiz Response:', content);

            // Robust extraction and parsing
            this.questions = this.extractAndParseJSON(content);

            if (!Array.isArray(this.questions) || this.questions.length === 0) {
                throw new Error('Invalid quiz format received');
            }

            // Start Quiz
            this.loadingState.style.display = 'none';
            this.quizView.style.display = 'block';
            this.renderQuestion();

        } catch (error) {
            console.error('Quiz Generation Error:', error);
            this.loadingState.innerHTML = `
                <h2>Error generating quiz</h2>
                <p>The AI output was malformed. Please try again.</p>
                <div style="font-size: 0.8rem; color: #888; margin: 1rem 0; overflow: auto; max-height: 100px; text-align: left; background: #222; padding: 0.5rem;">${error.message}</div>
                <button onclick="window.location.reload()" class="next-btn" style="display:inline-block; width:auto; margin-top:1rem;">Retry</button>
            `;
        }
    }

    extractAndParseJSON(text) {
        // Find outer array brackets
        const start = text.indexOf('[');
        const end = text.lastIndexOf(']');

        if (start === -1 || end === -1) {
            throw new Error('No JSON array brackets found');
        }

        let jsonStr = text.substring(start, end + 1);

        // Attempt 1: Direct Parse
        try {
            return JSON.parse(jsonStr);
        } catch (e) {
            console.warn('Direct parse failed, attempting repair:', e);
        }

        // Attempt 2: Remove trailing commas (common error)
        try {
            // Regex to remove trailing commas before closing braces/brackets
            const fixedStr = jsonStr.replace(/,\s*([\]}])/g, '$1');
            return JSON.parse(fixedStr);
        } catch (e) {
            console.warn('Repair 1 failed:', e);
        }

        // Attempt 3: Aggressive clean (if markdown crept in or newlines broke it)
        try {
            // Sometimes it puts "Option A" in quotes incorrectly? 
            // Hard to fix everything via regex without breaking valid content.
            // Let's try to just clean newlines in strings if they are unescaped? No too risky.
            throw new Error('JSON parsing failed even after repair attempts');
        } catch (e) {
            throw e;
        }
    }


    renderQuestion() {
        const q = this.questions[this.currentQuestionIndex];

        this.currentQSpan.textContent = this.currentQuestionIndex + 1;
        this.questionText.textContent = q.question;
        this.optionsGrid.innerHTML = '';
        this.feedbackArea.className = 'feedback-area';
        this.feedbackArea.style.display = 'none';
        this.nextBtn.style.display = 'none';

        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => this.handleAnswer(idx, btn);
            this.optionsGrid.appendChild(btn);
        });
    }

    handleAnswer(selectedIndex, btnElement) {
        if (this.nextBtn.style.display === 'block') return; // Already answered

        const q = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === q.correctIndex;

        // Visual Feedback
        const buttons = this.optionsGrid.querySelectorAll('.option-btn');
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.correctIndex) btn.classList.add('correct');
            else if (idx === selectedIndex) btn.classList.add('wrong');
        });

        if (isCorrect) this.score++;

        // Explanation Feedback
        this.feedbackArea.innerHTML = `
            <strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong>
            <p>${q.explanation}</p>
        `;
        this.feedbackArea.classList.add(isCorrect ? 'feedback-correct' : 'feedback-wrong');
        this.feedbackArea.style.display = 'block';

        this.nextBtn.style.display = 'block';
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.quizView.style.display = 'none';
        this.resultsView.style.display = 'block';
        document.getElementById('finalScore').textContent = this.score;

        const msg = document.getElementById('resultMessage');
        if (this.score === 10) msg.textContent = "Perfect Score! 🌟";
        else if (this.score >= 8) msg.textContent = "Great job! 🎉";
        else if (this.score >= 5) msg.textContent = "Good effort! Keep practicing. 💪";
        else msg.textContent = "Don't give up! Review the lesson and try again. 📚";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LessonQuiz();
});
