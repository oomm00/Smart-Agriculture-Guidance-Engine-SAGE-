from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from sqlalchemy.orm import declarative_base
from datetime import datetime

Base = declarative_base()

class ConversationLog(Base):
    __tablename__ = "conversation_logs"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, index=True, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow, nullable=False)
    user_message = Column(Text, nullable=False)
    assistant_response = Column(Text, nullable=False)
    language = Column(String, default="en")
    
    # Feedback fields for Phase 3 fine-tuning dataset
    feedback_positive = Column(Boolean, nullable=True)  # True = thumbs up, False = thumbs down
    feedback_notes = Column(Text, nullable=True)
