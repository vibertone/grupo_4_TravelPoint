const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/users_ctrl");

router.get(ENDPOINTS.LOGIN, controllers.login);

module.exports = router;