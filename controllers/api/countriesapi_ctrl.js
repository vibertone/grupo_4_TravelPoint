const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fetch = require("node-fetch");
const moment = require('moment');
const { validationResult } = require('express-validator');






const countriesAPIController = {
    
    list:(req,res) => {
    db.Countries
        .findAll() 


        .then(Countries =>{
        return res.status(200).json({
            total: Countries.length,
            data: Countries,
            status:200
        })
    })},



}






module.exports = countriesAPIController;