const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/users_ctrl");


router.get(ENDPOINTS.user.LOGIN, controllers.login);

router.get(ENDPOINTS.user.REGISTER, controllers.register);

router.post(ENDPOINTS.user.REGISTER, controllers.createMyAccount);

router.get(ENDPOINTS.user.MYACCOUNT, controllers.myAccount);

module.exports = router;