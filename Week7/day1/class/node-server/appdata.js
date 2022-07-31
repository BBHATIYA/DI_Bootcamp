const app = require("./app.js");

app.getUsers().then((data) => {
  console.log(data);
});
