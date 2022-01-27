const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/products_ctrl")

router.get(ENDPOINTS.flights.PRODUCT_DETAIL, controllers.productDetail);

router.get(ENDPOINTS.flights.SHOPPING_DETAIL, controllers.shoppingDetail);


module.exports = router;