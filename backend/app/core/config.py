from pydantic_settings import BaseSettings
from typing import List
import os

class Settings(BaseSettings):
    # Database
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "postgresql://nihongo_user:nihongo_pass@localhost:5432/nihongobot"
    )
    
    # CORS
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:8000",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:8000",
        "http://localhost:5500",  # Live Server default
        "http://127.0.0.1:5500",
    ]
    
    # Model Configuration
    MODEL_PATH: str = os.getenv(
        "MODEL_PATH",
        "../model/mistral-7b-instruct-v0.2.Q4_K_M.gguf"
    )
    MODEL_CONTEXT_SIZE: int = 4096
    MODEL_MAX_TOKENS: int = 2048
    MODEL_TEMPERATURE: float = 0.7
    MODEL_TOP_P: float = 0.95
    MODEL_TOP_K: int = 40
    
    # GPU/CPU Configuration
    USE_GPU: bool = os.getenv("USE_GPU", "false").lower() == "true"
    GPU_LAYERS: int = int(os.getenv("GPU_LAYERS", "0"))
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
