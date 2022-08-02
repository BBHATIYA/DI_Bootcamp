const express = require("express");
const { products } = require("./modules/data.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/public"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/api/products/search", (req, res) => {
  const name = req.query.q;
  const filterProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filterProducts.length === 0) {
    return res.status(201).json({ msg: "Not Found" });
  }
  res.json(filterProducts);
});

app.get("/api/products/:id", (req, res) => {
  const pid = req.params.id;
  const product = products.find((item) => {
    return item.id == pid;
  });
  if (!product) {
    return res.status(404).json({ msg: "ID Not Found" });
  }
  res.json(product);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products", (req, res) => {
  console.log(res.body);
  const newproducts = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.name,
  };
  products.push(newproducts);
  res.json(products);
});
