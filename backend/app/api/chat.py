from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db.models import Chat, Message
from app.schemas.schemas import (
    GenerateRequest,
    GenerateResponse,
    ChatResponse,
    ChatHistoryItem,
    MessageResponse
)
from app.services.model_loader import model_loader
from datetime import datetime
from typing import List

router = APIRouter()

SYSTEM_PROMPT = """You are a helpful Japanese learning assistant. You can:
- Translate between English, Japanese, and Bengali
- Explain Japanese grammar (particles, verb forms, etc.)
- Provide JLPT practice questions (N5-N2)
- Break down kanji with stroke order and meanings
- Give pronunciation tips and politeness level guidance
- Answer questions naturally and conversationally

Always be helpful, clear, and supportive in your teaching."""

@router.get("/status")
async def model_status():
    """Return current model/device status to verify GPU usage"""
    info = model_loader.get_current_model_info()
    return {
        "model_path": info.get("model_path"),
        "is_loaded": info.get("is_loaded"),
        "context_size": info.get("context_size"),
        "device": info.get("device"),
    }

@router.post("/generate", response_model=GenerateResponse)
async def generate_response(
    request: GenerateRequest,
    db: Session = Depends(get_db)
):
    """Generate a response to a user message"""
    try:
        # Get or create chat
        chat_id = request.chat_id or str(datetime.now().timestamp())
        chat = db.query(Chat).filter(Chat.chat_id == chat_id).first()
        
        if not chat:
            # Create new chat
            chat = Chat(
                chat_id=chat_id,
                title=request.message[:50] + ("..." if len(request.message) > 50 else "")
            )
            db.add(chat)
            db.commit()
            db.refresh(chat)
        
        # Save user message
        user_message = Message(
            chat_id=chat.id,
            role="user",
            content=request.message
        )
        db.add(user_message)
        db.commit()
        
        # Build conversation context
        recent_messages = db.query(Message).filter(
            Message.chat_id == chat.id
        ).order_by(Message.timestamp.desc()).limit(10).all()
        
        recent_messages.reverse()  # Chronological order
        
        conversation = f"{SYSTEM_PROMPT}\n\n"
        for msg in recent_messages:
            role_label = "User" if msg.role == "user" else "Assistant"
            conversation += f"{role_label}: {msg.content}\n"
        
        conversation += "Assistant:"
        
        # Generate response
        bot_response = model_loader.generate(
            prompt=conversation,
            max_tokens=2048,
            temperature=0.7,
            stop=["User:", "Human:", "\nUser", "\nHuman"]
        )
        
        # Save bot response
        bot_message = Message(
            chat_id=chat.id,
            role="bot",
            content=bot_response
        )
        db.add(bot_message)
        
        # Update chat timestamp
        chat.updated_at = datetime.utcnow()
        db.commit()
        
        return GenerateResponse(
            response=bot_response,
            chat_id=chat.chat_id
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/history", response_model=List[ChatHistoryItem])
async def get_chat_history(db: Session = Depends(get_db)):
    """Get all chat history"""
    chats = db.query(Chat).order_by(Chat.updated_at.desc()).all()
    return chats

@router.get("/history/{chat_id}", response_model=ChatResponse)
async def get_chat(chat_id: str, db: Session = Depends(get_db)):
    """Get a specific chat with all messages"""
    chat = db.query(Chat).filter(Chat.chat_id == chat_id).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat not found")
    return chat

@router.delete("/history/{chat_id}")
async def delete_chat(chat_id: str, db: Session = Depends(get_db)):
    """Delete a chat"""
    chat = db.query(Chat).filter(Chat.chat_id == chat_id).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat not found")
    
    db.delete(chat)
    db.commit()
    return {"message": "Chat deleted successfully"}
