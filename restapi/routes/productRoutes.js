const productController = require("../controllers/productController");

const express = require("express");

const router = express.Router;


router.post("/addproduct", productController.addProduct);
router.get("/getAll", productController.getAllProducts);
router.get("/published", productController.getPublishedProduct);
router.get("/:id", productController.getOnePRoduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
