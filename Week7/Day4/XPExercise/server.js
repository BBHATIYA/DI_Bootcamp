const express = require("express");
const fs = require("fs");
const app = express();

const { seeList, updateList } = require("./public/script.js");

let list = seeList();

app.use("/", express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Running in server port 3000");
});

app.post("/shopping", (req, res) => {
  let obj = {
    id: list.length + 1,
    item: req.body.item,
    amount: req.body.amount,
  };
  list.push(obj);
  updateList(list);
  res.json(list);
});

app.get("/shopping", (req, res) => {
  //   res.send("Shopping page");
  console.log(list);
  res.json(list);
});
