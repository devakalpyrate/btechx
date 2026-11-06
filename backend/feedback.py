import json
import os
import re
import socket
import smtplib
import ssl
from datetime import datetime, timezone, timedelta
from http.server import BaseHTTPRequestHandler, HTTPServer
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Load .env locally if present
_current_dir = os.path.dirname(os.path.abspath(__file__))
_project_root = os.path.dirname(_current_dir)
_possible_env_paths = [
    os.path.join(_project_root, ".env"),
    os.path.join(_current_dir, ".env"),
    os.path.join(os.path.dirname(_project_root), ".env")
]

for _env_file in _possible_env_paths:
    if os.path.exists(_env_file):
        try:
            with open(_env_file, "r", encoding="utf-8") as _f:
                for _line in _f:
                    _line = _line.strip()
                    if _line and not _line.startswith("#") and "=" in _line:
                        _k, _v = _line.split("=", 1)
                        os.environ.setdefault(_k.strip(), _v.strip())
        except Exception:
            pass

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465
SENDER_EMAIL = os.environ.get("GMAIL_USER", "btechx.support@gmail.com")
SENDER_PASSWORD = os.environ.get("GMAIL_APP_PASSWORD", "cxjwvfkxrzkaeqdo").replace(" ", "")
RECEIVER_EMAIL = os.environ.get("RECEIVER_EMAIL", "subhammoharana07@zohomail.in")

FEEDBACKS_LOG_FILE = os.path.join(_project_root, "feedbacks.json")

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")

def is_valid_email(email):
    if not email or not EMAIL_REGEX.match(email):
        return False
    domain = email.split("@")[-1].strip().lower()
    try:
        socket.getaddrinfo(domain, None)
        return True
    except socket.gaierror:
        return bool(EMAIL_REGEX.match(email))
    except Exception:
        return True

def get_current_ist_time():
    ist_offset = timezone(timedelta(hours=5, minutes=30))
    now = datetime.now(ist_offset)
    return now.strftime("%d %B %Y, %I:%M:%S %p IST")

def log_feedback_locally(data):
    """Safely append feedback to feedbacks.json as local persistent archive"""
    try:
        feedbacks = []
        if os.path.exists(FEEDBACKS_LOG_FILE):
            with open(FEEDBACKS_LOG_FILE, "r", encoding="utf-8") as f:
                feedbacks = json.load(f)
        feedbacks.append(data)
        with open(FEEDBACKS_LOG_FILE, "w", encoding="utf-8") as f:
            json.dump(feedbacks, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f" [!] Local feedback logging notice: {e}")

def send_feedback_email(name, email, message, subject="BTechX Student Feedback"):
    timestamp = get_current_ist_time()

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[BTechX Feedback] {subject} - {name}"
    msg["From"] = f"{name} via BTechX <{SENDER_EMAIL}>"
    msg["To"] = RECEIVER_EMAIL
    msg["Reply-To"] = email

    text_content = f"""New Feedback Received via BTechX

Name: {name}
Email: {email}
Date: {timestamp}
Subject: {subject}

Feedback / Message:
{message}
"""

    html_content = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>BTechX Feedback</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0e0a; color: #f4efe6; padding: 28px; margin: 0;">
  <div style="max-width: 620px; margin: 0 auto; background-color: #121612; border: 1.5px solid #273024; border-radius: 12px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    
    <!-- Header -->
    <div style="border-bottom: 1.5px solid #232b21; padding-bottom: 18px; margin-bottom: 24px;">
      <div style="display: inline-block; font-family: monospace; font-size: 11px; font-weight: 700; color: #8ceb27; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
        [ PROTOCOL // 01 &bull; STUDENT DISPATCH ]
      </div>
      <h2 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">
        New BTechX Feedback Submission
      </h2>
    </div>

    <!-- Metadata Grid -->
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
      <tr>
        <td style="padding: 9px 0; color: #889284; width: 110px; font-weight: 600;">Student Name:</td>
        <td style="padding: 9px 0; color: #ffffff; font-weight: 600;">{name}</td>
      </tr>
      <tr>
        <td style="padding: 9px 0; color: #889284; font-weight: 600;">Email:</td>
        <td style="padding: 9px 0;"><a href="mailto:{email}" style="color: #8ceb27; text-decoration: none; font-weight: 600;">{email}</a></td>
      </tr>
      <tr>
        <td style="padding: 9px 0; color: #889284; font-weight: 600;">Timestamp:</td>
        <td style="padding: 9px 0; color: #d1d5db;">{timestamp}</td>
      </tr>
      <tr>
        <td style="padding: 9px 0; color: #889284; font-weight: 600;">Type:</td>
        <td style="padding: 9px 0; color: #facc15; font-weight: 600;">{subject}</td>
      </tr>
    </table>

    <!-- Message Box -->
    <div style="background-color: #070907; border: 1.5px solid #1e261b; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
      <div style="color: #889284; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 10px;">
        DISPATCH CONTENT:
      </div>
      <div style="color: #f4efe6; font-size: 14.5px; line-height: 1.65; white-space: pre-wrap;">{message}</div>
    </div>

    <!-- Footer Note -->
    <div style="border-top: 1px solid #1e261b; padding-top: 16px; font-size: 11.5px; color: #717d6d; display: flex; justify-content: space-between;">
      <span>BTechX Feedback System</span>
      <span style="color: #8ceb27;">Reply directly to this email to contact the student.</span>
    </div>

  </div>
</body>
</html>"""

    msg.attach(MIMEText(text_content, "plain"))
    msg.attach(MIMEText(html_content, "html"))

    if SENDER_PASSWORD:
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, context=context) as server:
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, msg.as_string())
    else:
        print(" [!] GMAIL_APP_PASSWORD not configured, email sending skipped.")

class handler(BaseHTTPRequestHandler):
    def send_json(self, status_code, data):
        response_body = json.dumps(data).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(response_body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        self.send_json(200, {
            "status": "online",
            "service": "BTechX Feedback Backend (Python)",
            "port": 8000,
            "endpoints": ["/api/feedback"],
            "timestamp": get_current_ist_time()
        })

    def do_POST(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            if content_length == 0:
                self.send_json(400, {"success": False, "error": "Request body is empty."})
                return

            body = self.rfile.read(content_length)
            data = json.loads(body.decode("utf-8"))

            name = data.get("name", "").strip()
            email = data.get("email", "").strip()
            message = data.get("message", "").strip()
            subject = data.get("subject", "Feedback / Note Request").strip()

            if not name:
                self.send_json(400, {"success": False, "error": "Name is required."})
                return

            if not email:
                self.send_json(400, {"success": False, "error": "Email is required."})
                return

            if not is_valid_email(email):
                self.send_json(400, {"success": False, "error": "Please provide a valid email address."})
                return

            if not message:
                self.send_json(400, {"success": False, "error": "Message is required."})
                return

            timestamp = get_current_ist_time()

            # 1. Log locally to feedbacks.json
            log_feedback_locally({
                "name": name,
                "email": email,
                "subject": subject,
                "message": message,
                "timestamp": timestamp
            })

            # 2. Transmit via SMTP Email
            email_sent = False
            try:
                send_feedback_email(name, email, message, subject)
                email_sent = True
            except Exception as mail_err:
                print(f" [!] Email delivery notice: {mail_err}")

            self.send_json(200, {
                "success": True,
                "message": "Feedback submitted successfully.",
                "email_dispatched": email_sent,
                "timestamp": timestamp
            })

        except Exception as e:
            self.send_json(500, {"success": False, "error": str(e)})

if __name__ == "__main__":
    server_address = ("", 8000)
    httpd = HTTPServer(server_address, handler)
    print(" [✓] BTechX Feedback API running on http://localhost:8000 ...")
    httpd.serve_forever()
