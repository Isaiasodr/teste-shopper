const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.get("/login", authController.login);
router.get("/register", authController.adduser);
router.post("/register", authController.adduserSave);

module.exports = router;
