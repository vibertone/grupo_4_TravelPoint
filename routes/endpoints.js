const express = require ('express');

const ENDPOINTS = express.Router();
const index_ctrl = require("../controllers/index_ctrl");
const login_ctrl = require("../controllers/login_ctrl");
const register_ctrl = require("../controllers/register_ctrl");


ENDPOINTS.get('/',index);
ENDPOINTS.get('/login',login);
ENDPOINTS.get('/register',register);


module.exports=ENDPOINTS;