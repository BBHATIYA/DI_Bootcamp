const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Hello there ");
  res.end("Hello my first server");
});

server.listen(5000);
