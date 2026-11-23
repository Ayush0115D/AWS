// @ts-ignore -- Node.js type declarations are not configured in this project.
import { createServer } from "node:http";

const server = createServer((_request: any, response: { end: (arg0: string) => void; }) => {
  response.end("Hello from TypeScript!");
});

server.listen(8000, "0.0.0.0", () => {
  console.log("Server running on port 8000");
});
