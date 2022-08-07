/*

1. npm init -y 
1. express - npm i express
3. nodemon - live server 
4 npm i - to install if you get/download(from slack, email or etc..) folder with codes 
//check dependance and install needed package 
5 control+C - to go out from running server

6. const express = require('express');
7. init express

8. create routes - 

9. knex & pg - connect to the database
*/

console.log("Hello there ");

const express = require("express");
const knex = require("knex");
const bcrypt = require("bcrypt");
const app = express();

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

//Serving html file
app.use("/", express.static(__dirname + "/public"));

//this is to extract the data from the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("server is running from port 5000");
});

//creating route
app.get("/userlogin", (req, res) => {
  //   res.send("login page");
  console.log(req.query);
  res.json({ msg: "login success", status: 200 });
  //   if(req.params === 1){} if you want to set condition and then send the file
  //   res.sendFile(__dirname + "/public/login.html");
});

// app.post("/login", (req, res) => {
//   console.log(req.body);
//   res.json({ msg: "OK get it form a post request" });
// });

app.post("/register", async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  saveUser(req.body.email, hashPassword)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.json({ msg: "Email exist" });
    });
});

app.post("/login", async (req, res) => {
  getUser(req.body.email)
    .then(async(data) => {
      console.log(data);
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      if (data.length == 0) {
        res.json({ msg: "email not exist" });
      } else {
        console.log(data[0].password);
        const match = await bcrypt.compare(req.body.password, data[0].password )
        if (!match){
            res.json({msg:'Wrong password'})
        }else{
            res.json({msg:"Login OK"})
        }
        res.json({ msg: "OK" });
      }
    });
});

function saveUser(email, password) {
  return db("myusers")
    .insert({ email: email, password: password })
    .returning("*");
}

function getUser(email) {
  return db("myuser").select("id", "email", "password").where({ email: email });
}
