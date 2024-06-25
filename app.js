const http = require("http");

const PORT = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Becoming full stack!');
});
server.listen(PORT);

console.log(`Server started on port ${PORT}`);
