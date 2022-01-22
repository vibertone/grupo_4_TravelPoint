const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/users_ctrl");
const validations = require('../middlewares/registerMiddlewares');
const multerMiddleware = require('../middlewares/multerMiddleware')
const loggedMiddleware = require('../middlewares/loggedMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')


router.get(ENDPOINTS.user.LOGIN, loggedMiddleware, controllers.login);
router.post(ENDPOINTS.user.LOGIN, controllers.processLogin);

router.get(ENDPOINTS.user.REGISTER, loggedMiddleware, controllers.register);
router.post(ENDPOINTS.user.REGISTER, validations, controllers.createMyAccount);
router.get(ENDPOINTS.user.EDITMYACCOUNT, guestMiddleware, controllers.editMyAccount)
router.post(ENDPOINTS.user.EDITMYACCOUNT, controllers.processEditMyAccount)

router.get(ENDPOINTS.user.MYACCOUNT, guestMiddleware, controllers.myAccount);
router.post(ENDPOINTS.user.MYACCOUNT, multerMiddleware.single('image'), controllers.myProfilePicture)


module.exports = router;