const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/admin_ctrl");
const validations = require('../middlewares/productCreatMiddleware');

router.get(ENDPOINTS.administrator.PRODUCTLIST, controllers.productList);

router.get(ENDPOINTS.administrator.USERSLIST, controllers.usersList);

router.get(ENDPOINTS.administrator.PRODUCTCREATE, controllers.productCreate);
router.post(ENDPOINTS.administrator.PRODUCTCREATE, validations, controllers.store);

router.get(ENDPOINTS.administrator.PRODUCTEDIT, controllers.productEdit);
router.put(ENDPOINTS.administrator.PRODUCTEDIT, controllers.update);

router.get(ENDPOINTS.administrator.PRODUCTREVIEW, controllers.productReview);
router.delete (ENDPOINTS.administrator.PRODUCTDELETE, controllers.productDelete);

module.exports = router;