const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/admin_ctrl");
const validations = require('../middlewares/productCreatMiddleware');
const multerMiddleware = require('../middlewares/multerMiddlewareProducts')


router.get(ENDPOINTS.administrator.PRODUCT_LIST, controllers.productList);

router.get(ENDPOINTS.administrator.USERS_LIST, controllers.usersList);
router.get(ENDPOINTS.administrator.SEARCH_USERS, controllers.searchUsers)

router.get(ENDPOINTS.administrator.PRODUCT_CREATE, controllers.productCreate);
router.post(ENDPOINTS.administrator.PRODUCT_CREATE, multerMiddleware.single('productPicture'), validations, controllers.store);

router.get(ENDPOINTS.administrator.CONFIRM_PRODUCT_CREATE, controllers.confirmProductCreate);
router.post(ENDPOINTS.administrator.CONFIRM_PRODUCT_CREATE, controllers.succesProductCreation);

router.get(ENDPOINTS.administrator.PRODUCT_EDIT, controllers.productEdit);
router.put(ENDPOINTS.administrator.PRODUCT_EDIT, controllers.update);

router.get(ENDPOINTS.administrator.PRODUCT_REVIEW, controllers.productReview);
router.delete (ENDPOINTS.administrator.PRODUCT_DELETE, controllers.productDelete);

module.exports = router;