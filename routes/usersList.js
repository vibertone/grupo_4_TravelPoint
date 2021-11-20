const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/usersList_ctrl");

router.get(ENDPOINTS.USERSLIST, controllers.usersList);

module.exports = router;