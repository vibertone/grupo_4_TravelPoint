const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/product_ctrl");

router.get(ENDPOINTS.PRODUCTCART, controllers.product_ctrl);

module.exports = router;