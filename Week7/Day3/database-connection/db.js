const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "5432",
    user: "postgres",
    password: "Bhavesh03",
    database: "dvdrental",
  },
});

db("country")
  .select("country_id", "country")
  .then((data) => {
    console.log(data);
  })

  .catch((e) => {
    console.log(e);
  });
