const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/all", productsController.allProducts);

module.exports = router;
