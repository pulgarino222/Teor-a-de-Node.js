const http = require("http");// con esta linea adquirimos la libreria que nops permite interactuar con el protocolo https



const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  });
  
  server.listen(3001, () => {
    console.log("Server running at http://localhost:3001/");
  });


