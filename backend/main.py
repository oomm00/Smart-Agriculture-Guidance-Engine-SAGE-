import os
import uuid
from dotenv import load_dotenv

load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai

app = FastAPI(title="Smart Agriculture Guidance Engine (SAGE)")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash")

SYSTEM_PROMPT = """You are SAGE (Smart Agriculture Guidance Engine), an expert crop advisory assistant for Indian farmers.
Only answer questions related to agriculture, crops, farming practices, pest control, soil health,
weather impact on farming, fertilizers, and government agricultural schemes.
If asked anything outside agriculture, politely decline and steer the conversation back to farming.
Always end your response with: \n\n---\n*Disclaimer: This advice is for informational purposes only. Consult local agricultural experts for farm-specific decisions.*"""


class ChatRequest(BaseModel):
    message: str
    session_id: str | None = None


class ChatResponse(BaseModel):
    reply: str
    turn_id: str


@app.post("/api/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    turn_id = str(uuid.uuid4())
    prompt = f"{SYSTEM_PROMPT}\n\nUser: {req.message}\nSAGE:"
    response = model.generate_content(prompt)
    return ChatResponse(reply=response.text, turn_id=turn_id)
