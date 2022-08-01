const http = require("http");

const server = http.createServer((req, res) => {
  console.log("running inside server");

  res.setHeader("Content-Type", "text/html");
  res.end(
    `<html>
      <body>
        <h1>This is my first response</h1>
        <h1>This is my second response</h1>
        <h4>This is my third response</h4>
        
      </body>
    </html>`
  );
});

server.listen(3000);
