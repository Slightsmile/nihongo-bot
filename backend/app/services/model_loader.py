from llama_cpp import Llama
from app.core.config import settings
import os
from typing import Optional
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ModelLoader:
    """Singleton class to manage LLM model loading and switching"""
    
    _instance = None
    _model: Optional[Llama] = None
    _current_model_path: Optional[str] = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ModelLoader, cls).__new__(cls)
        return cls._instance
    
    def __init__(self):
        """Initialize the model loader"""
        if not hasattr(self, 'initialized'):
            self.initialized = True
            self._load_default_model()
    
    def _load_default_model(self):
        """Load the default model from settings"""
        try:
            model_path = self._resolve_path(settings.MODEL_PATH)
            self.load_model(model_path)
        except Exception as e:
            logger.error(f"Failed to load default model: {e}")
    
    def _resolve_path(self, path: str) -> str:
        """Resolve relative paths to absolute paths"""
        if os.path.isabs(path):
            return path
        
        # Resolve relative to backend directory
        backend_dir = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
        return os.path.abspath(os.path.join(backend_dir, path))
    
    def load_model(
        self,
        model_path: str,
        context_size: Optional[int] = None,
        gpu_layers: Optional[int] = None
    ) -> None:
        """
        Load a new model, unloading the previous one if it exists
        
        Args:
            model_path: Path to the GGUF model file
            context_size: Context window size (default from settings)
            gpu_layers: Number of layers to offload to GPU (default from settings)
        """
        resolved_path = self._resolve_path(model_path)
        
        if not os.path.exists(resolved_path):
            raise FileNotFoundError(f"Model file not found: {resolved_path}")
        
        # If same model is already loaded, skip
        if self._current_model_path == resolved_path and self._model is not None:
            logger.info(f"Model already loaded: {resolved_path}")
            return
        
        # Unload previous model
        if self._model is not None:
            logger.info(f"Unloading previous model: {self._current_model_path}")
            del self._model
            self._model = None
        
        # Load new model
        logger.info(f"Loading model: {resolved_path}")
        
        # Determine GPU layer offload based on settings and input
        selected_gpu_layers = (
            gpu_layers if gpu_layers is not None else (settings.GPU_LAYERS if settings.USE_GPU else 0)
        )

        # Log the device configuration intent
        if selected_gpu_layers and selected_gpu_layers > 0:
            logger.info(f"GPU requested: offloading {selected_gpu_layers} layers")
            try:
                import llama_cpp
                gpu_supported = getattr(llama_cpp, "llama_supports_gpu_offload", lambda: None)()
                logger.info(f"Backend GPU offload supported: {gpu_supported}")
                if gpu_supported is False:
                    logger.warning(
                        "GPU offload not supported by current llama.cpp build. Falling back to CPU despite request."
                    )
            except Exception:
                logger.warning("Could not verify llama.cpp GPU support at runtime.")
        else:
            logger.info("GPU disabled: running fully on CPU (n_gpu_layers=0)")

        self._model = Llama(
            model_path=resolved_path,
            n_ctx=context_size or settings.MODEL_CONTEXT_SIZE,
            n_gpu_layers=selected_gpu_layers,
            verbose=False
        )
        
        self._current_model_path = resolved_path
        logger.info(f"Successfully loaded model: {resolved_path}")
    
    def generate(
        self,
        prompt: str,
        max_tokens: Optional[int] = None,
        temperature: Optional[float] = None,
        top_p: Optional[float] = None,
        top_k: Optional[int] = None,
        stop: Optional[list] = None
    ) -> str:
        """
        Generate text using the loaded model
        
        Args:
            prompt: Input prompt
            max_tokens: Maximum tokens to generate
            temperature: Sampling temperature
            top_p: Nucleus sampling parameter
            top_k: Top-k sampling parameter
            stop: Stop sequences
        
        Returns:
            Generated text
        """
        if self._model is None:
            raise RuntimeError("No model loaded. Call load_model() first.")
        
        response = self._model(
            prompt,
            max_tokens=max_tokens or settings.MODEL_MAX_TOKENS,
            temperature=temperature or settings.MODEL_TEMPERATURE,
            top_p=top_p or settings.MODEL_TOP_P,
            top_k=top_k or settings.MODEL_TOP_K,
            stop=stop or ["</s>", "User:", "Human:"],
            echo=False
        )
        
        return response["choices"][0]["text"].strip()
    
    def get_current_model_info(self) -> dict:
        """Get information about the currently loaded model"""
        # Infer device mode from configuration used at load time
        try:
            import llama_cpp
            gpu_supported = getattr(llama_cpp, "llama_supports_gpu_offload", lambda: None)()
        except Exception:
            gpu_supported = None
        device_mode = "gpu" if (settings.USE_GPU and (settings.GPU_LAYERS or 0) > 0 and gpu_supported) else "cpu"
        return {
            "model_path": self._current_model_path,
            "is_loaded": self._model is not None,
            "context_size": settings.MODEL_CONTEXT_SIZE,
            "device": device_mode,
        }

# Global model loader instance
model_loader = ModelLoader()
