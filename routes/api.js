const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/index_ctrl");
const APIController = require("../controllers/api");

router.get(ENDPOINTS.api.API, APIController.list);
router.get(ENDPOINTS.api.API2, APIController.show);

module.exports = router;