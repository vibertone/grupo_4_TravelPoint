const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/users_ctrl");

router.get(ENDPOINTS.REGISTER, controllers.register);

router.post(ENDPOINTS.REGISTER, controllers.createMyAccount);

module.exports = router;