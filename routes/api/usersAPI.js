const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

const ENDPOINTS = require("../endpoints");
const validations = require('../middlewares/registerMiddlewares');
const multerMiddleware = require('../middlewares/multerMiddleware');
const loggedMiddleware = require('../middlewares/loggedMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


router.get(ENDPOINTS.api.APIUSERS_LIST, usersAPIController.list);


module.exports = router;