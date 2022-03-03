const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/index_ctrl");
const APIController = require("../controllers/api/api");
const airlinesAPIController =require ("../controllers/api/airlinesapi_ctrl");

router.get(ENDPOINTS.api.AIRLINESAPI, airlinesAPIController.list);


module.exports = router;