const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/users_ctrl");

router.get(ENDPOINTS.MYACCOUNT, controllers.myAccount);

module.exports = router;