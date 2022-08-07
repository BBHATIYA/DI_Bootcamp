const express = require("express");
const fs = require("fs");
const app = express();

app.listen(3000, () => {
  console.log("running in server port 3000");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", express.static(__dirname + "/public/login.html"));
app.use("/register", express.static(__dirname + "/public/register.html"));

let array = [];

app.post("/users", (req, res) => {
  console.log(req.body);

  let user = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  array.push(user);
  res.send("Hello! Your account is now created!");
  let string = JSON.stringify(array, null, 2);
  fs.writeFileSync("./public/users.txt", string, (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.post("logged", (req, res) => {
  fs.readFile("./public/users.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.stringify());
      let parse = JSON.parse(data);
      console.log(parse);
      for (let i = 0; i < parse.letgth; i++) {
        console.log(parse[i].username);
        if (
          req.body.username === parse[i].username &&
          req.body.password === parse[i].password
        ) {
          res.send(`Welcome back ${req.body.username}`);
        } else if (
          req.body.username === parse[i].username &&
          req.body.password != parse[i].password
        ) {
          res.send("Wrong password!");
        } else if (req.body.username != parse[i].username) {
          res.send("Username is not registered!");
        }
      }
    }
  });
});
