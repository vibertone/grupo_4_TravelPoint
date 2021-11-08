const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/shoppingDetails");

router.get(ENDPOINTS.PRODUCTDETAIL, controllers.productDetail);

module.exports = router;