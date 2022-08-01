const express = require("express");

const app = express();
const { products } = require("./products.js");

app.use("/", express.static(__dirname + "/public"));

app.listen(5000, () => {
  console.log("running on port 5000");
});
app.get("/api", (req, res) => {
  res.send("api route");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
