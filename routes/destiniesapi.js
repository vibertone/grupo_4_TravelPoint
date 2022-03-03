const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/index_ctrl");
const APIController = require("../controllers/api/api");
const destiniesAPIController =require ("../controllers/api/destiniesapi_ctrl");

router.get(ENDPOINTS.api.DESTINIESAPI, destiniesAPIController.list);


module.exports = router;