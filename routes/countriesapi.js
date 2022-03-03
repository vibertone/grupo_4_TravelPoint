const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/index_ctrl");
const APIController = require("../controllers/api/api");
const countriesAPIController =require ("../controllers/api/countriesapi_ctrl");

router.get(ENDPOINTS.api.COUNTRIESAPI, countriesAPIController.list);


module.exports = router;