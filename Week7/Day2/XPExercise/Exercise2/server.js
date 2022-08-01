const http = require("http");

const user = {
  firstname: "John",
  lastname: "Doe",
};

// const data = JSON.stringify({ user });
const server = http.createServer((req, res) => {
  console.log("running in server");

  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify({ user }));
});

server.listen(8080);
