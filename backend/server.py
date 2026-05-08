from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
import html
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL')

app = FastAPI(title="ICELAB API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=160)
    inquiry_type: str = Field(..., max_length=80)
    message: str = Field(..., min_length=1, max_length=4000)


class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    inquiry_type: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False


# ---------- Helpers ----------
def _build_email_html(inq: Inquiry) -> str:
    name = html.escape(inq.name)
    email = html.escape(inq.email)
    company = html.escape(inq.company) if inq.company else ""
    inquiry_type = html.escape(inq.inquiry_type)
    message = html.escape(inq.message)
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E1726;padding:32px 0;font-family:Arial,Helvetica,sans-serif;color:#FFFFFF;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#162338;border:1px solid #243754;">
          <tr><td style="padding:32px 32px 8px 32px;">
            <p style="margin:0;color:#8BD7FF;font-size:12px;letter-spacing:3px;text-transform:uppercase;">ICELAB &mdash; New Inquiry</p>
            <h1 style="margin:8px 0 0 0;color:#FFFFFF;font-size:28px;font-weight:300;letter-spacing:-0.5px;">Invisible Yet Extraordinary</h1>
          </td></tr>
          <tr><td style="padding:24px 32px;border-top:1px solid #243754;">
            <p style="margin:0 0 6px 0;color:#8BA1C1;font-size:11px;letter-spacing:2px;text-transform:uppercase;">From</p>
            <p style="margin:0;color:#FFFFFF;font-size:18px;">{name}</p>
            <p style="margin:4px 0 0 0;color:#8BD7FF;font-size:14px;">{email}</p>
            {f'<p style="margin:4px 0 0 0;color:#8BA1C1;font-size:13px;">{company}</p>' if company else ''}
          </td></tr>
          <tr><td style="padding:0 32px 24px 32px;">
            <p style="margin:0 0 6px 0;color:#8BA1C1;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Inquiry Type</p>
            <p style="margin:0;color:#FFFFFF;font-size:15px;">{inquiry_type}</p>
          </td></tr>
          <tr><td style="padding:0 32px 32px 32px;">
            <p style="margin:0 0 6px 0;color:#8BA1C1;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Message</p>
            <p style="margin:0;color:#FFFFFF;font-size:15px;line-height:1.6;white-space:pre-wrap;">{message}</p>
          </td></tr>
          <tr><td style="padding:16px 32px;border-top:1px solid #243754;background:#0E1726;">
            <p style="margin:0;color:#8BA1C1;font-size:11px;letter-spacing:2px;text-transform:uppercase;">ICELAB &middot; From Gwalior to the world</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "ICELAB API", "tagline": "Invisible Yet Extraordinary"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "icelab-api"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate):
    inquiry = Inquiry(**payload.model_dump(), email_sent=False)

    # Try to send the email first; persist the result
    email_sent = False
    if resend.api_key and RECIPIENT_EMAIL:
        try:
            params = {
                "from": f"ICELAB <{SENDER_EMAIL}>",
                "to": [RECIPIENT_EMAIL],
                "reply_to": inquiry.email,
                "subject": f"ICELAB Inquiry — {inquiry.inquiry_type} — {inquiry.name}",
                "html": _build_email_html(inquiry),
            }
            await asyncio.to_thread(resend.Emails.send, params)
            email_sent = True
        except Exception as e:
            logger.error(f"Resend send failed: {e}")
            email_sent = False
    else:
        logger.warning("Resend not configured; storing inquiry only")

    inquiry.email_sent = email_sent
    doc = inquiry.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.inquiries.insert_one(doc)
    return inquiry


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries(limit: int = 50):
    rows = await db.inquiries.find({}, {"_id": 0}).sort("timestamp", -1).to_list(limit)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
