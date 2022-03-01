const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/index_ctrl");
const APIController = require("../controllers/api/api");
const usersAPIController =require ("../controllers/api/usersapi_ctrl");

router.get(ENDPOINTS.api.USERSAPI, usersAPIController.test);

module.exports = router;