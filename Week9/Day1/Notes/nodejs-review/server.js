const express = require("express");
const dotenv = require("dotenv");
const customer_router = require("./routes/customer.js");
const { urlencoded } = require("express");
const knex = require("knex");
dotenv.config();

//connection to postgres
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5433,
    user: "postgres",
    password: "Bhavesh03",
    database: "dvdrental",
  },
});

const app = express();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", customer_router);

const products = [
  { id: 1, name: "iphone", price: 850 },
  { id: 2, name: "iPad", price: 850 },
  { id: 3, name: "iWatch", price: 850 },
];

//get city for postgres
app.get("/city", (req, res) => {
  db("city")
    .select("*")
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.listen(process.env.PORT || 5050, () => {
  console.log(`Run on port ${process.env.PORT || 5050}`);
});

//CRUD
//create- POST
//Read - GET
//Update - PUT
//Delete - DELETE

//user -> request -> middleware -> response

app.get("/products", (req, res) => {
  res.json(products);
});

// app.post("/products", (req, res) => {
//   res.json(products);
// });

// app.put("/products", (req, res) => {
//   res.json(products);
// });
