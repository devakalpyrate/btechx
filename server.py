"""
BTechX Local Dev & API Server (Python)
--------------------------------------
Serves Newdesine static showcase pages + handles /api/feedback endpoint.
Usage:
    python server.py
"""

import os
import sys
import json
from http.server import SimpleHTTPRequestHandler, HTTPServer
from api.feedback import handler as FeedbackHandler

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class BTechXServerHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_OPTIONS(self):
        if self.path.startswith("/api/"):
            FeedbackHandler.do_OPTIONS(self)
        else:
            self.send_response(200)
            self.end_headers()

    def do_GET(self):
        if self.path == "/" or self.path == "":
            self.path = "/landing.html"

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
            self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode("utf-8"))

def main():
    print("=" * 64)
    print("           BTECHX PYTHON SERVER & FEEDBACK BACKEND              ")
    print("=" * 64)
    print(f" [+] Showcase Page:     http://localhost:{PORT}/landing.html")
    print(f" [+] Feedback Page:     http://localhost:{PORT}/feedback.html")
    print(f" [+] API Endpoint:      http://localhost:{PORT}/api/feedback")
    print("=" * 64)
    print(" Press Ctrl+C to stop the server.")
    print("=" * 64)

    server_address = ("", PORT)
    try:
        httpd = HTTPServer(server_address, BTechXServerHandler)
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n [*] Stopping BTechX server...")
    except Exception as e:
        print(f" [!] Server Error: {e}")

if __name__ == "__main__":
    main()
