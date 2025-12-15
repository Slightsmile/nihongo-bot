import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from app.api import chat, models
from app.core.config import settings

app = FastAPI(
    title="Japanese Learning Assistant API",
    description="Japanese Learning Assistant Backend",
    version="1.0.0",
)

# Resolve frontend paths relative to this backend directory
BACKEND_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT_ROOT = os.path.abspath(os.path.join(BACKEND_DIR, ".."))
FRONTEND_DIR = os.path.join(PROJECT_ROOT, "frontend")

CSS_DIR = os.path.join(FRONTEND_DIR, "css")
JS_DIR = os.path.join(FRONTEND_DIR, "js")
INDEX_HTML = os.path.join(FRONTEND_DIR, "index.html")
KNOWLEDGE_HUB_HTML = os.path.join(FRONTEND_DIR, "knowledge-hub.html")
N4_LESSONS_HTML = os.path.join(FRONTEND_DIR, "n4-lessons.html")
N5_LESSONS_HTML = os.path.join(FRONTEND_DIR, "n5-lessons.html")
QUIZ_HTML = os.path.join(FRONTEND_DIR, "quiz.html")

# Mount frontend asset folders for direct paths in index.html
if os.path.isdir(CSS_DIR):
    app.mount("/css", StaticFiles(directory=CSS_DIR), name="css")
if os.path.isdir(JS_DIR):
    app.mount("/js", StaticFiles(directory=JS_DIR), name="js")

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
    return FileResponse(INDEX_HTML)

@app.get("/index.html", include_in_schema=False)
async def index_redirect():
    """Redirect index.html to root"""
    from fastapi.responses import RedirectResponse
    return RedirectResponse(url="/", status_code=301)

@app.get("/knowledge-hub", include_in_schema=False)
@app.get("/knowledge-hub.html", include_in_schema=False)
async def knowledge_hub():
    return FileResponse(KNOWLEDGE_HUB_HTML)

@app.get("/n4-lessons", include_in_schema=False)
@app.get("/n4-lessons.html", include_in_schema=False)
async def n4_lessons():
    return FileResponse(N4_LESSONS_HTML)

@app.get("/n5-lessons", include_in_schema=False)
@app.get("/n5-lessons.html", include_in_schema=False)
async def n5_lessons():
    return FileResponse(N5_LESSONS_HTML)

@app.get("/quiz", include_in_schema=False)
@app.get("/quiz.html", include_in_schema=False)
async def quiz_page():
    return FileResponse(QUIZ_HTML)

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

