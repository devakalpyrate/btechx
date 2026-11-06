import os
import sys

_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if _root not in sys.path:
    sys.path.insert(0, _root)

from backend.feedback import handler

if __name__ == "__main__":
    from http.server import HTTPServer
    server_address = ("", 8000)
    httpd = HTTPServer(server_address, handler)
    print(" [✓] API running on http://localhost:8000 ...")
    httpd.serve_forever()
