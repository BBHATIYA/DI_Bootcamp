const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "5433",
    user: "postgres",
    password: "Bhavesh03",
    database: "dvdrental",
  },
});

const getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};

const getProduct = (id) => {
  return db("products").select("id", "name", "price").where({ id: product_id });
};

const searchProduct = (prodcut_name) => {
  return db("products")
    .select("id", "name", "price")
    .whereILike("name", `${product_name}%`);
};

const insertProduct = (product) => {
  return db("products").inster(product).returning("*");
};

const updateProduct = (product_id, product) => {
  return db("products")
    .update(product)
    .where({ id: product_id })
    .returning("*");
};

module.exports = {
  getAllProducts,
  getProduct,
  searchProduct,
  insertProduct,
  updateProduct,
  updateProduct,
};

// db("products")
//   .select("name", "price")
//   .then((data) => {
//     console.log(data);
//   })

//   .catch((e) => {
//     console.log(e);
//   });
