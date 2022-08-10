const express = require("express");
const { db } = require("./connections/hrokupg.js");
const dotenv = require("dotenv");
const cors = require("cors");

const { getAllProducts } = require("./modules/products.js");

const products_router = require("./routes/products.js");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use("/api/products", products_router);
