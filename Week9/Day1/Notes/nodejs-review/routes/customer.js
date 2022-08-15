const express = require("express");
const knex = require("knex");

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

const router = express.Router();

router.get("/customer/:id", (req, res) => {
  db("customer")
    .select("*")
    .where({ customer_id: req.params.id })
    .then((ret) => {
      res.json(ret);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
