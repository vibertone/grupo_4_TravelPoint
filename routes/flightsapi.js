const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/index_ctrl");
const APIController = require("../controllers/api/api");
const flightsAPIController =require ("../controllers/api/flightsapi_ctrl");

router.get(ENDPOINTS.api.FLIGHTSAPI, flightsAPIController.list);
router.get(ENDPOINTS.api.FLIGHTSAPI2, flightsAPIController.show);

module.exports = router;