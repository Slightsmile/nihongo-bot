from fastapi import APIRouter, HTTPException
from app.schemas.schemas import (
    GenerateRequest,
    GenerateResponse,
    ChatResponse,
    ChatHistoryItem,
    MessageResponse,
)
from app.services.model_loader import model_loader
from datetime import datetime
from typing import List, Dict, Any

router = APIRouter()

SYSTEM_PROMPT = """You are a helpful Japanese learning assistant. You can:
- Translate between English, Japanese, and Bengali
- Explain Japanese grammar (particles, verb forms, etc.)
- Provide JLPT practice questions (N5-N2)
- Break down kanji with stroke order and meanings
- Give pronunciation tips and politeness level guidance
- Answer questions naturally and conversationally

Always be helpful, clear, and supportive in your teaching."""


# In-memory chat storage (no database required)
_chats: Dict[str, Dict[str, Any]] = {}
_next_chat_internal_id: int = 1


def _create_chat(chat_id: str, title: str) -> Dict[str, Any]:
    global _next_chat_internal_id
    now = datetime.utcnow()
    chat = {
        "id": _next_chat_internal_id,
        "chat_id": chat_id,
        "title": title,
        "created_at": now,
        "updated_at": now,
        "messages": [],  # List[{"role", "content", "timestamp"}]
    }
    _chats[chat_id] = chat
    _next_chat_internal_id += 1
    return chat


def _get_chat(chat_id: str) -> Dict[str, Any] | None:
    return _chats.get(chat_id)


def _add_message(chat: Dict[str, Any], role: str, content: str) -> Dict[str, Any]:
    now = datetime.utcnow()
    message = {
        "role": role,
        "content": content,
        "timestamp": now,
    }
    chat["messages"].append(message)
    chat["updated_at"] = now
    return message

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
async def generate_response(request: GenerateRequest):
    """Generate a response to a user message (in-memory chat store)."""
    try:
        # Get or create chat
        chat_id = request.chat_id or str(datetime.now().timestamp())
        chat = _get_chat(chat_id)

        if not chat:
            title = request.message[:50] + ("..." if len(request.message) > 50 else "")
            chat = _create_chat(chat_id=chat_id, title=title)

        # Save user message
        _add_message(chat, role="user", content=request.message)

        # Build conversation context (last 10 messages)
        recent_messages = chat["messages"][-10:]
        conversation = f"{SYSTEM_PROMPT}\n\n"
        for msg in recent_messages:
            role_label = "User" if msg["role"] == "user" else "Assistant"
            conversation += f"{role_label}: {msg['content']}\n"

        conversation += "Assistant:"

        # Generate response with the model
        bot_response = model_loader.generate(
            prompt=conversation,
            max_tokens=2048,
            temperature=0.7,
            stop=["User:", "Human:", "\nUser", "\nHuman"],
        )

        # Save bot response
        _add_message(chat, role="bot", content=bot_response)

        return GenerateResponse(response=bot_response, chat_id=chat_id)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/history", response_model=List[ChatHistoryItem])
async def get_chat_history():
    """Get all chat history from in-memory store."""
    chats_sorted = sorted(
        _chats.values(), key=lambda c: c["updated_at"], reverse=True
    )
    return [
        ChatHistoryItem(
            id=chat["id"],
            chat_id=chat["chat_id"],
            title=chat["title"],
            updated_at=chat["updated_at"],
        )
        for chat in chats_sorted
    ]


@router.get("/history/{chat_id}", response_model=ChatResponse)
async def get_chat(chat_id: str):
    """Get a specific chat with all messages from in-memory store."""
    chat = _get_chat(chat_id)
    if not chat:
        raise HTTPException(status_code=404, detail="Chat not found")

    return ChatResponse(
        id=chat["id"],
        chat_id=chat["chat_id"],
        title=chat["title"],
        created_at=chat["created_at"],
        updated_at=chat["updated_at"],
        messages=[
            MessageResponse(
                role=m["role"],
                content=m["content"],
                timestamp=m["timestamp"],
            )
            for m in chat["messages"]
        ],
    )


@router.delete("/history/{chat_id}")
async def delete_chat(chat_id: str):
    """Delete a chat from in-memory store."""
    chat = _get_chat(chat_id)
    if not chat:
        raise HTTPException(status_code=404, detail="Chat not found")

    del _chats[chat_id]
    return {"message": "Chat deleted successfully"}
