# NihongoBot 🗾

A modern, full-screen Japanese learning chatbot with a sleek DeepSeek-inspired UI.

## Features

✨ **Multilingual Support**
- English, Japanese, and Bengali interfaces
- Auto-detects user's language

📚 **Learning Capabilities**
- Japanese ↔ English ↔ Bengali translation
- Grammar explanations (particles, verb forms, etc.)
- JLPT practice questions (N5-N2)
- Kanji breakdowns with stroke order
- Politeness level guidance
- Pronunciation tips

🎨 **Modern UI**
- Full-screen chatbot interface
- DeepSeek-inspired dark theme
- Smooth animations
- Responsive design
- Chat history management
- Bubble-style messages

## Quick Start

1. Open `index.html` in your browser
2. Start chatting with NihongoBot!

## Usage Examples

Try these prompts:
- "Translate 'Hello' to Japanese"
- "Explain は vs が particles"
- "JLPT N5 practice questions"
- "How do I say 'thank you' politely?"
- "Teach me the kanji for 'day'"

## File Structure

```
frontend/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (DeepSeek-inspired)
├── js/
│   └── app.js          # Application logic
└── README.md           # This file
```

## Features

### Chat Interface
- Real-time messaging
- Typing indicators
- Auto-scroll to latest message
- Message timestamps
- Markdown-style formatting

### Learning Features
- Grammar explanations with examples
- Translation between 3 languages
- JLPT-style practice questions
- Kanji learning with readings
- Politeness level teaching

### UI/UX
- Sidebar with chat history
- New chat button
- Example prompts on welcome screen
- Smooth transitions and animations
- Mobile responsive

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --accent-primary: #6366f1;
    --bg-primary: #0f1117;
    /* ... */
}
```

### AI Responses
Modify response logic in `app.js`:
- `handleTranslation()` - Translation responses
- `handleGrammar()` - Grammar explanations
- `handleJLPT()` - Practice questions
- etc.

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari

## License

MIT

---

Built with ❤️ for Japanese learners
