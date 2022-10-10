const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");
const checkAuth = require("../helpers/auth").checkAuth;

router.get("/products", checkAuth, productsController.allProducts);

module.exports = router;
