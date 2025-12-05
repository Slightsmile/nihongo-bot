from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class MessageCreate(BaseModel):
    content: str

class MessageResponse(BaseModel):
    role: str
    content: str
    timestamp: datetime
    
    # Removed class Config to avoid conflict with model_config

class ChatCreate(BaseModel):
    chat_id: str
    title: str

class ChatResponse(BaseModel):
    id: int
    chat_id: str
    title: str
    created_at: datetime
    updated_at: datetime
    messages: List[MessageResponse] = []
    
    class Config:
        from_attributes = True

class ChatHistoryItem(BaseModel):
    id: int
    chat_id: str
    title: str
    updated_at: datetime
    
    class Config:
        from_attributes = True

class GenerateRequest(BaseModel):
    message: str
    chat_id: Optional[str] = None

class GenerateResponse(BaseModel):
    response: str
    chat_id: str

class ModelConfigCreate(BaseModel):
    name: str
    model_path: str
    context_size: int = 4096
    
    model_config = {'protected_namespaces': ()}

class ModelConfigResponse(BaseModel):
    id: int
    name: str
    model_path: str
    context_size: int
    is_active: bool
    created_at: datetime
    
    model_config = {'protected_namespaces': ()}
    
    # Removed class Config to avoid conflict with model_config

class ModelSwitchRequest(BaseModel):
    model_id: int
    model_config = {'protected_namespaces': ()}

class ModelInfoResponse(BaseModel):
    model_path: Optional[str]
    is_loaded: bool
    context_size: int
    model_config = {'protected_namespaces': ()}
