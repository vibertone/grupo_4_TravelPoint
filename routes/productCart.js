const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers//productCart");

router.get(ENDPOINTS.PRODUCTCART, controllers.productCart);

module.exports = router;