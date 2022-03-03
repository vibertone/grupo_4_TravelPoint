const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fetch = require("node-fetch");
const moment = require('moment');
const { validationResult } = require('express-validator');






const airlinesAPIController = {
    
    list:(req,res) => {
    db.Airlines
        .findAll() 


        .then(Airlines =>{
        return res.status(200).json({
            total: Airlines.length,
            data: Airlines,
            status:200
        })
    })},



}






module.exports = airlinesAPIController;