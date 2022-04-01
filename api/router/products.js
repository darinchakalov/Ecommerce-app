const express = require("express");
const router = express.Router();
const { auth } = require("../utils");

const productController = require("../controllers/productController.js");

router.post("/", auth(), productController.createProduct);
router.get("/", productController.getAllProducts);

router.get("/my-products", auth(), productController.getMyProducts);
router.get("/:productId", productController.getSingleProduct);

module.exports = router;
