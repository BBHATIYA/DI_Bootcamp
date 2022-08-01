const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());

app.get("/", (req, res) => {
  //   res.send("<h1>Hello there</h1>");

  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  //   res.json(user);
  res.send(user);
});

// exercise 2
app.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.json(req.params);
});

// exercise 3
app.use("/", express.static("public"));

// module.exports = {
//   user: user,
// };
app.listen(3000);
