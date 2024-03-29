const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/api/hello", (req, res) => {
  res.send("Hello from express");
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
});
