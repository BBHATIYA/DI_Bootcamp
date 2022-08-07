console.log("Hello from shopping page");

const fs = require("fs");

function seeList() {
  try {
    let shoppinglist = fs.readFileSync(
      __dirname + "/shoppinglist.json",
      "utf-8"
    );
    return JSON.parse(shoppinglist);
  } catch (e) {
    console.log(e);
    return [];
  }
}

function updateList(arr) {
  try {
    fs.writeFileSync(__dirname + "/shoppinglist.json", JSON.stringify(arr));
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  seeList,
  updateList,
};
