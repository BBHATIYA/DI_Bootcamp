const main = require("./main.js");
const b = 5;
const { currentDate } = require("./main.js");
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("this is from inside the server");

  res.setHeader("Content-Type", "text/html");
  res.end(
    `<html>
      <body>
        <p>My Module is</p>
        <p>${main.largeNumber + b}</p>
        <h1>Hi there at the frontend</h1>
        <p>The date and time are currently: ${main.currentDate()}</p>
      </body>
    </html>`
  );
  //
});
server.listen(3001);
