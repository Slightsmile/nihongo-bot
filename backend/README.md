# NihongoBot Backend

FastAPI backend for the NihongoBot Japanese learning assistant with PostgreSQL database and dynamic LLM model loading.

## Features

- **FastAPI**: Modern, fast web framework for building APIs
- **PostgreSQL**: Robust database for storing chat history and model configurations
- **Dynamic Model Loading**: Swap between different GGUF models on the fly
- **llama-cpp-python**: Efficient local LLM inference
- **CORS Enabled**: Works with frontend applications

## Setup

### 1. Install Dependencies

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Setup PostgreSQL Database

Install PostgreSQL and create a database:

```bash
sudo -u postgres psql
CREATE DATABASE nihongobot;
CREATE USER nihongo_user WITH PASSWORD 'nihongo_pass';
GRANT ALL PRIVILEGES ON DATABASE nihongobot TO nihongo_user;
\q
```

### 3. Configure Environment

Copy the example environment file and update as needed:

```bash
cp .env.example .env
```

Edit `.env` to match your configuration:
- Update `DATABASE_URL` with your PostgreSQL credentials
- Set `MODEL_PATH` to your model location
- Configure GPU settings if you have GPU support

### 4. Initialize Database

Run the database initialization script:

```bash
python init_db.py
```

This creates all necessary tables and adds the default model configuration.

### 5. Run the Server

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## API Endpoints

### Chat Endpoints

- `POST /api/chat/generate` - Generate AI response
- `GET /api/chat/history` - Get all chat history
- `GET /api/chat/history/{chat_id}` - Get specific chat
- `DELETE /api/chat/history/{chat_id}` - Delete a chat

### Model Management Endpoints

- `GET /api/models/current` - Get current model info
- `GET /api/models/` - List all available models
- `POST /api/models/` - Add new model configuration
- `POST /api/models/switch` - Switch to a different model
- `DELETE /api/models/{model_id}` - Delete model configuration

## Model Management

### Adding a New Model

1. Place your GGUF model file in the `model/` directory (or any accessible path)
2. Add the model via API:

```bash
curl -X POST "http://localhost:8000/api/models/" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Custom Model",
    "model_path": "../model/my-model.gguf",
    "context_size": 4096
  }'
```

### Switching Models

```bash
curl -X POST "http://localhost:8000/api/models/switch" \
  -H "Content-Type: application/json" \
  -d '{"model_id": 2}'
```

The model loader will:
- Unload the current model from memory
- Load the new model
- Update the active status in the database

## GPU Support

If you have CUDA-capable GPU:

1. Install llama-cpp-python with GPU support:
```bash
CMAKE_ARGS="-DLLAMA_CUBLAS=on" pip install llama-cpp-python --force-reinstall --no-cache-dir
```

2. Update `.env`:
```
USE_GPU=true
GPU_LAYERS=32  # Adjust based on your GPU VRAM
```

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application
│   ├── api/
│   │   ├── __init__.py
│   │   ├── chat.py          # Chat endpoints
│   │   └── models.py        # Model management endpoints
│   ├── core/
│   │   ├── __init__.py
│   │   └── config.py        # Configuration settings
│   ├── db/
│   │   ├── __init__.py
│   │   ├── database.py      # Database connection
│   │   └── models.py        # SQLAlchemy models
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── schemas.py       # Pydantic schemas
│   └── services/
│       ├── __init__.py
│       └── model_loader.py  # Dynamic model loader
├── init_db.py               # Database initialization
├── requirements.txt         # Python dependencies
├── .env.example            # Example environment file
└── README.md               # This file
```

## Development

Run with auto-reload for development:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running: `sudo systemctl status postgresql`
- Verify database credentials in `.env`
- Check if database exists: `psql -U nihongo_user -d nihongobot`

### Model Loading Issues
- Verify model file exists at the specified path
- Check file permissions
- Ensure sufficient RAM for model (4GB+ recommended for 7B models)
- Check logs for detailed error messages

### Import Errors
- Ensure virtual environment is activated
- Reinstall dependencies: `pip install -r requirements.txt`
