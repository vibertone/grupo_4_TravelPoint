const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/users_ctrl");
const validations = require('../middlewares/registerMiddlewares');
const multerMiddleware = require('../middlewares/multerMiddlewareUsers')
const loggedMiddleware = require('../middlewares/loggedMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const profilePictureMiddlewares = require('../middlewares/profilePictureMiddlewares')


router.get(ENDPOINTS.user.LOGIN, loggedMiddleware, controllers.login);
router.post(ENDPOINTS.user.LOGIN, controllers.processLogin);

router.get(ENDPOINTS.user.REGISTER, loggedMiddleware, controllers.register);
router.post(ENDPOINTS.user.REGISTER, validations, controllers.createMyAccount);
router.get(ENDPOINTS.user.EDIT_MY_ACCOUNT, guestMiddleware, controllers.editMyAccount)
router.post(ENDPOINTS.user.EDIT_MY_ACCOUNT, controllers.processEditMyAccount)

router.get(ENDPOINTS.user.MY_ACCOUNT, guestMiddleware, controllers.myAccount);
router.post(ENDPOINTS.user.MY_ACCOUNT, multerMiddleware.single('image'), profilePictureMiddlewares, controllers.myProfilePicture)

router.get(ENDPOINTS.user.LOGOUT, controllers.logout)


module.exports = router;