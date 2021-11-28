const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/admin_ctrl");


router.get(ENDPOINTS.administrator.PRODUCTLIST, controllers.productList);

router.get(ENDPOINTS.administrator.USERSLIST, controllers.usersList);

router.get(ENDPOINTS.administrator.PRODUCTCREATE, controllers.productCreate);
router.post(ENDPOINTS.administrator.PRODUCTCREATE, controllers.store);

module.exports = router;