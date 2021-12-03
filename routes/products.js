const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/products_ctrl")

router.get(ENDPOINTS.flights.PRODUCTDETAIL, controllers.productDetail);

router.get(ENDPOINTS.flights.SHOPPINGDETAIL, controllers.shoppingDetail);


module.exports = router;