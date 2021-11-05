const express = require("express");
const app = express();
const path = require("path");

const index_ctrl = require ("./controller/index_ctrl");
const login_ctrl = require ("./controller/login_ctrl");
const register_ctrl = require ("./controller/register_ctrl");
const ENDPOINTS = require("./routes/endpoints");
//


app.use(express.static(path.resolve(__dirname,"public")));
app.listen(5000, ()=> {console.log("Levantando un servidor con Express pto 5000")});



app.set("view engine", "ejs"); 
app.set('views',path.resolve(__dirname,"views"));



app.use(ENDPOINTS.index, index_ctrl);
app.use(ENDPOINTS.register, register_ctrl);
app.use(ENDPOINTS.login, login_ctrl);

