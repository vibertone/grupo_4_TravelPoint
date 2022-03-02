const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/admin_ctrl");
const validations = require('../middlewares/productCreatMiddleware');
const multerMiddleware = require('../middlewares/multerMiddlewareProducts')
const onlyAdminMiddleware = require('../middlewares/onlyAdminMiddleware')


router.get(ENDPOINTS.administrator.PRODUCT_LIST, onlyAdminMiddleware, controllers.productList);

router.get(ENDPOINTS.administrator.USERS_LIST, onlyAdminMiddleware, controllers.usersList);
router.get(ENDPOINTS.administrator.SEARCH_USERS, controllers.searchUsers)

router.get(ENDPOINTS.administrator.PRODUCT_CREATE, onlyAdminMiddleware, controllers.productCreate);
router.post(ENDPOINTS.administrator.PRODUCT_CREATE, multerMiddleware.single('productPicture'), validations, controllers.store);

router.get(ENDPOINTS.administrator.PRODUCT_EDIT, onlyAdminMiddleware, controllers.productEdit);
router.put(ENDPOINTS.administrator.PRODUCT_EDIT, controllers.update);

router.get(ENDPOINTS.administrator.PRODUCT_REVIEW, onlyAdminMiddleware, controllers.productReview);
router.delete (ENDPOINTS.administrator.PRODUCT_DELETE, controllers.productDelete);

module.exports = router;