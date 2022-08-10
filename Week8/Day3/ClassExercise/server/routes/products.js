const express = require("express");
const router = express.Router();

const {
  _getAllProducts,
  _getOneProducts,
  _searchProducts,
  _insertProduct,
} = require("../controllers/product.js");

router.get("/search", _searchProducts);
router.get("/all/:id", _getOneProducts);
router.get("/all", _getAllProducts);
router.post("/add", _insertProduct);

module.exports = router;
