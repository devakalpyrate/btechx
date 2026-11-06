"""
===================================================================
                BTechX Full-Stack Platform Runner
===================================================================
A unified local development server that serves the static frontend
(from ./frontend) and powers the Python backend API (from ./backend).

Usage:
    python main.py
"""

import os
import sys
import json
from http.server import SimpleHTTPRequestHandler, HTTPServer

# 1. Ensure root directory is on Python path
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

FRONTEND_DIR = os.path.join(PROJECT_ROOT, "frontend")
PORT = 8000

# 2. Import backend handler
try:
    from backend.feedback import handler as FeedbackHandler
except ImportError:
    from api.feedback import handler as FeedbackHandler

class BTechXUnifiedHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=FRONTEND_DIR, **kwargs)

    def do_OPTIONS(self):
        if self.path.startswith("/api/"):
            FeedbackHandler.do_OPTIONS(self)
        else:
            self.send_response(200)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
            self.end_headers()

    def do_GET(self):
        # Route "/" to landing page
        if self.path == "/" or self.path == "":
            self.path = "/index.html"

        if self.path.startswith("/api/feedback"):
            FeedbackHandler.do_GET(self)
        else:
            super().do_GET()

    def do_POST(self):
        if self.path.startswith("/api/feedback"):
            FeedbackHandler.do_POST(self)
        else:
            self.send_response(404)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": "API route not found"}).encode("utf-8"))

def main():
    print("=" * 66)
    print("           BTECHX ACADEMIC PLATFORM // UNIFIED RUNNER             ")
    print("=" * 66)
    print(f" [+] Showcase Frontend:   http://localhost:{PORT}")
    print(f" [+] Student Dispatch:    http://localhost:{PORT}/feedback.html")
    print(f" [+] Python Backend API:  http://localhost:{PORT}/api/feedback")
    print("=" * 66)
    print(" Serving from ./frontend and ./backend ...")
    print(" Press Ctrl+C in this terminal to stop.")
    print("=" * 66)

    server_address = ("", PORT)
    try:
        httpd = HTTPServer(server_address, BTechXUnifiedHandler)
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n [*] Stopping BTechX dev server...")
    except Exception as e:
        print(f" [!] Dev Server Error: {e}")

if __name__ == "__main__":
    main()
