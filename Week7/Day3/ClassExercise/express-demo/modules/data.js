// const products = [
//   {id:1, name:'iPhone',price:800},
//   {id:2, name:'iMac',price:1600},
//   {id:3, name:'iWatch',price:650},
//   {id:4, name:'iPad',price:1650}
// ]



const fs = require("fs");

const getProducts = () => {
  try {
    const products = fs.readFileSync(__dirname + "/products.json", "utf-8");
    return JSON.parse(products);
  } catch (error) {
    return [];
  }
};

const setProducts = (arr) => {
  try {
    fs.writeFileSync(__dirname + "/products.json", JSON.stringify(arr));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  setProducts,
};
