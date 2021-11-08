const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/index_ctrl")

router.get(ENDPOINTS.INDEX, controllers.index);

module.exports = router;