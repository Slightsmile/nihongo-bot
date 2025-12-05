from sqlalchemy import create_engine
from app.db.database import Base
from app.db.models import Chat, Message, ModelConfig
from app.core.config import settings
import os

def init_db():
    """Initialize the database with tables"""
    engine = create_engine(settings.DATABASE_URL)
    Base.metadata.create_all(bind=engine)
    print("Database tables created successfully!")

def seed_default_model():
    """Add the default model to the database"""
    from app.db.database import SessionLocal
    
    db = SessionLocal()
    try:
        # Check if default model already exists
        existing = db.query(ModelConfig).filter(
            ModelConfig.name == "Mistral 7B Instruct"
        ).first()
        
        if not existing:
            default_model = ModelConfig(
                name="Mistral 7B Instruct",
                model_path="../model/mistral-7b-instruct-v0.2.Q4_K_M.gguf",
                context_size=4096,
                is_active=True
            )
            db.add(default_model)
            db.commit()
            print("Default model configuration added!")
        else:
            print("Default model already exists.")
    finally:
        db.close()

if __name__ == "__main__":
    print("Initializing database...")
    init_db()
    seed_default_model()
    print("Done!")
