"""
===================================================================
           BTechX Multi-Threaded Platform Dev Server
===================================================================
A high-performance threaded server that serves static frontend files 
concurrently (from ./frontend) and handles Python backend requests (from ./backend).

Usage:
    python main.py
"""

import os
import sys
import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

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

class BTechXUnifiedHandler(FeedbackHandler, SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        SimpleHTTPRequestHandler.__init__(self, *args, directory=FRONTEND_DIR, **kwargs)

    def end_headers(self):
        # Send Connection: close to avoid socket hanging in keep-alive
        self.send_header("Connection", "close")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def do_OPTIONS(self):
        if self.path.startswith("/api/"):
            FeedbackHandler.do_OPTIONS(self)
        else:
            self.send_response(200)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
            self.end_headers()

    def do_GET(self):
        # Strip query parameters for static routing
        clean_path = self.path.split("?")[0]

        # Route default root and favicon
        if clean_path in ("", "/"):
            self.path = "/index.html"
        elif clean_path == "/favicon.ico":
            self.path = "/favicon.ico"

        if self.path.startswith("/api/feedback"):
            FeedbackHandler.do_GET(self)
        else:
            SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        if self.path.startswith("/api/feedback"):
            FeedbackHandler.do_POST(self)
        else:
            self.send_json(404, {"error": "API route not found"})

def main():
    print("=" * 66)
    print("        BTECHX MULTI-THREADED PLATFORM RUNNER (CONCURRENT)        ")
    print("=" * 66)
    print(f" [+] Showcase Frontend:   http://localhost:{PORT}")
    print(f" [+] Student Dispatch:    http://localhost:{PORT}/feedback.html")
    print(f" [+] Python Backend API:  http://localhost:{PORT}/api/feedback")
    print("=" * 66)
    print(" Concurrent Multi-Threading: Active (Zero Blocking)")
    print(" Press Ctrl+C in this terminal to stop.")
    print("=" * 66)

    server_address = ("", PORT)
    try:
        httpd = ThreadingHTTPServer(server_address, BTechXUnifiedHandler)
        httpd.daemon_threads = True
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n [*] Stopping BTechX dev server...")
    except Exception as e:
        print(f" [!] Dev Server Error: {e}")

if __name__ == "__main__":
    main()
