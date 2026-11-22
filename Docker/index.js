const http = require("node:http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end("<h1>Hello from Node.js!</h1>\n<p>This website is running in Docker.</p>");
});

const port = process.env.PORT || 8000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Website listening on port ${port}`);
});
