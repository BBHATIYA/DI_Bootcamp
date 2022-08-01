const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/aboutMe/:hobby", (req, res) => {
  console.log(req.params);

  if (!isNaN(req.params.hobby)) {
    res.status(404).send(404);
    console.log("entered if");
  }

  res.send(`Your hobbie is ${req.params.hobby}`);
});

app.get("/pic", (req, res) => {
  let imgsrc =
    "https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg";
  res.send(`<img src='${imgsrc}'></img>`);
});

app.use(express.static("public"));
app.get("/", (req, res) => {});

app.post("/formData", (req, res) => {
  res.send(`${req.body.email} sent you a message: ${req.body.message}`);
});

app.listen(3000);
