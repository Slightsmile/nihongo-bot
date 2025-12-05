from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db.models import ModelConfig
from app.schemas.schemas import (
    ModelConfigCreate,
    ModelConfigResponse,
    ModelSwitchRequest,
    ModelInfoResponse
)
from app.services.model_loader import model_loader
from typing import List

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
async def list_models(db: Session = Depends(get_db)):
    """List all available models"""
    models = db.query(ModelConfig).all()
    return models

@router.post("/", response_model=ModelConfigResponse)
async def create_model_config(
    model: ModelConfigCreate,
    db: Session = Depends(get_db)
):
    """Add a new model configuration"""
    # Check if name already exists
    existing = db.query(ModelConfig).filter(ModelConfig.name == model.name).first()
    if existing:
        raise HTTPException(status_code=400, detail="Model name already exists")
    
    new_model = ModelConfig(**model.dict())
    db.add(new_model)
    db.commit()
    db.refresh(new_model)
    return new_model

@router.post("/switch")
async def switch_model(
    request: ModelSwitchRequest,
    db: Session = Depends(get_db)
):
    """Switch to a different model"""
    try:
        result = model_loader.switch_model(request.model_id)
        return result
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/{model_id}")
async def delete_model_config(
    model_id: int,
    db: Session = Depends(get_db)
):
    """Delete a model configuration"""
    model = db.query(ModelConfig).filter(ModelConfig.id == model_id).first()
    if not model:
        raise HTTPException(status_code=404, detail="Model not found")
    
    if model.is_active:
        raise HTTPException(
            status_code=400,
            detail="Cannot delete active model. Switch to another model first."
        )
    
    db.delete(model)
    db.commit()
    return {"message": "Model configuration deleted successfully"}
