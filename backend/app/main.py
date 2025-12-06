from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.api import chat, models
from app.core.config import settings

app = FastAPI(
    title="Japanese Learning Assistant API",
    description="Japanese Learning Assistant Backend",
    version="1.0.0"
)

# Mount frontend asset folders for direct paths in index.html
app.mount("/css", StaticFiles(directory="/home/thedoublea/Downloads/Nihongo Bot/frontend/css"), name="css")
app.mount("/js", StaticFiles(directory="/home/thedoublea/Downloads/Nihongo Bot/frontend/js"), name="js")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS + [
        "http://0.0.0.0:8000"
    ],
    allow_origin_regex=r"https?://(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(chat.router, prefix="/api/chat", tags=["chat"])
app.include_router(models.router, prefix="/api/models", tags=["models"])

@app.get("/", include_in_schema=False)
async def root():
    return FileResponse("/home/thedoublea/Downloads/Nihongo Bot/frontend/index.html")

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
