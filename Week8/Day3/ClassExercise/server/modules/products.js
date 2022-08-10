const { db } = require("../connections/hrokupg.js");

const getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};

const getOneProducts = (product_id) => {
  return db("products").select("id", "name", "price").where({ id: product_id });
};

const searchProducts = (name) => {
  return db("products")
    .select("id", "name", "price")
    .whereILike("name", `${name}%`);
};

const insertProduct = (product) => {
  return db("products").insert(product).returning("*");
};

module.exports = {
  getAllProducts,
  getOneProducts,
  searchProducts,
  insertProduct,
};
