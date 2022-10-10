const express = require("express");
const router = express.Router();

const requestController = require("../controllers/requestController");

router.get("/request", requestController.requests);

module.exports = router;
