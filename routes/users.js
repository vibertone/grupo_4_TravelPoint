const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/users_ctrl");
const validations = require('../middlewares/registerMiddlewares');
const multerMiddleware = require('../middlewares/multerMiddleware')


router.get(ENDPOINTS.user.LOGIN, controllers.login);

router.get(ENDPOINTS.user.REGISTER, controllers.register);
router.post(ENDPOINTS.user.REGISTER, validations, controllers.createMyAccount);

router.get(ENDPOINTS.user.MYACCOUNT, controllers.myAccount);
router.post(ENDPOINTS.user.MYACCOUNT, multerMiddleware.single('profilePicture'), controllers.myProfilePicture)


module.exports = router;