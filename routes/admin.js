const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/admin_ctrl");
const { productCreate } = require("../controllers/admin_ctrl");


router.get(ENDPOINTS.administrator.PRODUCTLIST, controllers.productList);

router.get(ENDPOINTS.administrator.USERSLIST, controllers.usersList);

router.get(ENDPOINTS.administrator.PRODUCTCREATE, controllers.productCreate);
router.post(ENDPOINTS.administrator.PRODUCTCREATE, controllers.store);

router.get (ENDPOINTS.administrator.PRODUCTEDIT, controllers.productEdit);

module.exports = router;