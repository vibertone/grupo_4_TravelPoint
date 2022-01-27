const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/admin_ctrl");
const validations = require('../middlewares/productCreatMiddleware');

router.get(ENDPOINTS.administrator.PRODUCT_LIST, controllers.productList);

router.get(ENDPOINTS.administrator.USERS_LIST, controllers.usersList);
router.get(ENDPOINTS.administrator.SEARCH_USERS, controllers.searchUsers)

router.get(ENDPOINTS.administrator.PRODUCT_CREATE, controllers.productCreate);
router.post(ENDPOINTS.administrator.PRODUCT_CREATE, validations, controllers.store);

router.get(ENDPOINTS.administrator.PRODUCT_EDIT, controllers.productEdit);
router.put(ENDPOINTS.administrator.PRODUCT_EDIT, controllers.update);

router.get(ENDPOINTS.administrator.PRODUCT_REVIEW, controllers.productReview);
router.delete (ENDPOINTS.administrator.PRODUCT_DELETE, controllers.productDelete);

module.exports = router;