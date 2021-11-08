const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/productList_ctrl");

router.get(ENDPOINTS.PRODUCTLIST, controllers.productList);

module.exports = router;