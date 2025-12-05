# NihongoBot 🗾

A full-stack Japanese learning chatbot with a modern UI, powered by local LLM inference.

## Architecture

- **Frontend**: Modern HTML/CSS/JavaScript with DeepSeek-inspired UI
- **Backend**: Python + FastAPI for REST API
- **Database**: PostgreSQL for chat history and model configurations
- **AI Model**: Local GGUF model with dynamic swapping capability (Mistral 7B by default)

## Features

✨ **Full Stack Application**
- RESTful API with FastAPI
- PostgreSQL database integration
- Dynamic model loading and switching
- CORS-enabled for local development

📚 **Japanese Learning**
- Translation (English ↔ Japanese ↔ Bengali)
- Grammar explanations
- JLPT practice questions (N5-N2)
- Kanji breakdowns
- Politeness level guidance

🎨 **Modern UI**
- Full-screen chatbot interface
- Chat history management
- Real-time message streaming
- Responsive design

🔄 **Dynamic Model Management**
- Swap between different GGUF models on the fly
- No server restart required
- Manage multiple model configurations
- GPU/CPU support

## Quick Start

### 1. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup PostgreSQL database
sudo -u postgres psql
CREATE DATABASE nihongobot;
CREATE USER nihongo_user WITH PASSWORD 'nihongo_pass';
GRANT ALL PRIVILEGES ON DATABASE nihongobot TO nihongo_user;
\q

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Initialize database
python init_db.py

# Run the server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 2. Setup Frontend

```bash
# Open frontend/index.html in your browser
# Or use a local server (recommended):
cd frontend
python -m http.server 8080
# Visit http://localhost:8080
```

## Project Structure

```
Nihongo Bot/
├── frontend/
│   ├── index.html          # Main UI
│   ├── css/
│   │   └── styles.css      # Styling
│   ├── js/
│   │   └── app.js          # Frontend logic (now with API integration)
│   └── README.md
├── backend/
│   ├── app/
│   │   ├── main.py         # FastAPI application
│   │   ├── api/            # API endpoints
│   │   │   ├── chat.py     # Chat endpoints
│   │   │   └── models.py   # Model management
│   │   ├── core/
│   │   │   └── config.py   # Configuration
│   │   ├── db/
│   │   │   ├── database.py # Database connection
│   │   │   └── models.py   # SQLAlchemy models
│   │   ├── schemas/
│   │   │   └── schemas.py  # Pydantic schemas
│   │   └── services/
│   │       └── model_loader.py  # Dynamic model loader
│   ├── init_db.py          # Database initialization
│   ├── requirements.txt    # Python dependencies
│   ├── .env.example        # Environment template
│   └── README.md
└── model/
    └── mistral-7b-instruct-v0.2.Q4_K_M.gguf  # LLM model
```

## API Endpoints

### Chat
- `POST /api/chat/generate` - Generate AI response
- `GET /api/chat/history` - Get all chat history
- `GET /api/chat/history/{chat_id}` - Get specific chat
- `DELETE /api/chat/history/{chat_id}` - Delete chat

### Models
- `GET /api/models/current` - Get current model info
- `GET /api/models/` - List available models
- `POST /api/models/` - Add model configuration
- `POST /api/models/switch` - Switch active model
- `DELETE /api/models/{model_id}` - Delete model config

### Health
- `GET /` - API information
- `GET /health` - Health check
- `GET /docs` - Swagger documentation

## Model Management

### Adding a New Model

1. Place your GGUF model file in the `model/` directory
2. Add via API:

```bash
curl -X POST "http://localhost:8000/api/models/" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Llama 3 8B",
    "model_path": "../model/llama-3-8b-instruct.Q4_K_M.gguf",
    "context_size": 8192
  }'
```

### Switching Models

```bash
curl -X POST "http://localhost:8000/api/models/switch" \
  -H "Content-Type: application/json" \
  -d '{"model_id": 2}'
```

The system will:
- Unload the current model from memory
- Load the new model
- Update the database
- Continue serving requests without restart

## Configuration

### Backend (.env)

```env
# Database
DATABASE_URL=postgresql://nihongo_user:nihongo_pass@localhost:5432/nihongobot

# Model
MODEL_PATH=../model/mistral-7b-instruct-v0.2.Q4_K_M.gguf
MODEL_CONTEXT_SIZE=4096
MODEL_MAX_TOKENS=2048
MODEL_TEMPERATURE=0.7

# GPU (if available)
USE_GPU=false
GPU_LAYERS=0

# CORS
CORS_ORIGINS=http://localhost:3000,http://localhost:8000,http://127.0.0.1:5500
```

### Frontend (app.js)

```javascript
// API Configuration
this.apiBaseUrl = 'http://localhost:8000/api';
```

## GPU Support

For GPU acceleration (NVIDIA CUDA):

```bash
# Install with GPU support
CMAKE_ARGS="-DLLAMA_CUBLAS=on" pip install llama-cpp-python --force-reinstall --no-cache-dir

# Update .env
USE_GPU=true
GPU_LAYERS=32  # Adjust based on VRAM
```

## Development

### Backend Development

```bash
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Development

Use Live Server extension in VS Code or:

```bash
cd frontend
python -m http.server 8080
```

### API Documentation

Visit http://localhost:8000/docs for interactive Swagger UI

## Troubleshooting

### Backend won't start
- Check PostgreSQL is running: `sudo systemctl status postgresql`
- Verify database credentials in `.env`
- Ensure all dependencies installed: `pip install -r requirements.txt`

### Model loading fails
- Verify model file exists at specified path
- Check available RAM (4GB+ recommended for 7B models)
- Review logs for specific errors

### Frontend can't connect to backend
- Ensure backend is running on port 8000
- Check CORS configuration in `.env`
- Verify API URL in `app.js`

### Database connection errors
- Create database: `createdb nihongobot`
- Run init script: `python init_db.py`
- Check PostgreSQL permissions

## Requirements

- Python 3.9+
- PostgreSQL 12+
- 8GB+ RAM (for 7B models)
- Optional: CUDA-capable GPU for faster inference

## License

MIT

## Contributing

Feel free to open issues or submit pull requests!
