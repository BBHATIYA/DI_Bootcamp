const {
  getAllProducts,
  getOneProducts,
  searchProducts,
  insertProduct,
} = require("../modules/products.js");

//get all products
//CURD - Read

const _getAllProducts = (req, res) => {
  getAllProducts()
    .then((ret) => {
      res.json(ret);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _getOneProducts = (req, res) => {
  getOneProducts(req.params.id)
    .then((ret) => {
      res.json(ret);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _searchProducts = (req, res) => {
  searchProducts(req.query.q)
    .then((ret) => {
      res.json(ret);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _insertProduct = (req, res) => {
  insertProduct(req.body)
    .then((ret) => {
      res.json(ret);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

// app.post("/api/products", (req, res) => {
//   console.log(req.body);
//   insertProduct(req.body)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });

module.exports = {
  _getAllProducts,
  _getOneProducts,
  _searchProducts,
  _insertProduct,
};
