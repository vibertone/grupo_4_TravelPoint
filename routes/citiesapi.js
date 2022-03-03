const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/index_ctrl");
const APIController = require("../controllers/api/api");
const citiesAPIController =require ("../controllers/api/citiesapi_ctrl");

router.get(ENDPOINTS.api.CITIESAPI, citiesAPIController.list);


module.exports = router;