const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fetch = require("node-fetch");
const moment = require('moment');
const { validationResult } = require('express-validator');






const citiesAPIController = {
    
    list:(req,res) => {
    db.Cities
        .findAll() 


        .then(Cities =>{
        return res.status(200).json({
            total: Cities.length,
            data: Cities,
            status:200
        })
    })},



}






module.exports = citiesAPIController;