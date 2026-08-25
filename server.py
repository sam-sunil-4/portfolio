import http.server
import socketserver
import os

PORT = 8080

class PortfolioHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code == 404 and os.path.exists("404.html"):
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            with open("404.html", "rb") as f:
                content = f.read()
            self.send_header("Content-Length", str(len(content)))
            self.end_headers()
            self.wfile.write(content)
            return
        super().send_error(code, message, explain)

socketserver.TCPServer.allow_reuse_address = True

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), PortfolioHTTPRequestHandler) as httpd:
        print(f"🕸️ Spidey DevOps Server active on http://localhost:{PORT}")
        httpd.serve_forever()
