from fastapi import APIRouter, HTTPException
from datetime import datetime
from typing import List

from app.core.config import settings
from app.schemas.schemas import (
    ModelConfigCreate,
    ModelConfigResponse,
    ModelSwitchRequest,
    ModelInfoResponse,
)
from app.services.model_loader import model_loader

router = APIRouter()

@router.get("/current", response_model=ModelInfoResponse)
async def get_current_model():
    """Get information about the currently loaded model"""
    try:
        info = model_loader.get_current_model_info()
        return ModelInfoResponse(**info)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/", response_model=List[ModelConfigResponse])
async def list_models():
    """List available models (single default model, no database)."""
    # Expose a single default model based on settings
    return [
        ModelConfigResponse(
            id=1,
            name="Default Model",
            model_path=settings.MODEL_PATH,
            context_size=settings.MODEL_CONTEXT_SIZE,
            is_active=True,
            created_at=datetime.utcnow(),
        )
    ]

@router.post("/", response_model=ModelConfigResponse)
async def create_model_config(model: ModelConfigCreate):
    """Adding models is disabled because the database has been removed."""
    raise HTTPException(
        status_code=501,
        detail="Model management via API is disabled (no database backing).",
    )

@router.post("/switch")
async def switch_model(request: ModelSwitchRequest):
    """Switching models by ID is disabled without database support."""
    raise HTTPException(
        status_code=501,
        detail="Switching models by ID is disabled (no database backing).",
    )

@router.delete("/{model_id}")
async def delete_model_config(model_id: int):
    """Deleting model configurations is disabled without database support."""
    raise HTTPException(
        status_code=501,
        detail="Deleting model configs is disabled (no database backing).",
    )
