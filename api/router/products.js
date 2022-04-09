const express = require("express");
const router = express.Router();
const { auth } = require("../utils");

const productController = require("../controllers/productController.js");

router.post("/", auth(), productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/list", productController.getProductList);

router.get("/my-products", auth(), productController.getMyProducts);
router.put("/finish", auth(), productController.finishingOrder);

router.get("/:productId", productController.getSingleProduct);
router.put("/:productId", auth(), productController.editProduct);
router.delete("/:productId", auth(), productController.deleteProduct);

module.exports = router;
