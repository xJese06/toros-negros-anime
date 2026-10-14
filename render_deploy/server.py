import os
import json
from http.server import SimpleHTTPRequestHandler
import socketserver

PORT = int(os.environ.get('PORT', 8080))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        url_path = self.path.split('?', 1)[0]
        if url_path == '/api/animes':
            db_file = os.path.join(BASE_DIR, 'animes_data.json')
            content = b'[]'
            if os.path.exists(db_file):
                try:
                    with open(db_file, 'rb') as f:
                        content = f.read()
                except Exception:
                    pass
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(content)
            return
        elif url_path == '/api/ip':
            data = {
                'url': '',
                'public_url': '',
                'local_url': ''
            }
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(data).encode('utf-8'))
            return
        return super().do_GET()

    def do_POST(self):
        url_path = self.path.split('?', 1)[0]
        if url_path == '/api/animes':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            db_file = os.path.join(BASE_DIR, 'animes_data.json')
            try:
                parsed = json.loads(post_data.decode('utf-8'))
                with open(db_file, 'w', encoding='utf-8') as f:
                    json.dump(parsed, f, ensure_ascii=False, indent=2)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "ok"}).encode('utf-8'))
                return
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(str(e).encode('utf-8'))
                return
        return super().do_POST()

if __name__ == '__main__':
    print(f"Starting server on port {PORT}...")
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()
