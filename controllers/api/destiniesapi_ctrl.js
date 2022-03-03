const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fetch = require("node-fetch");
const moment = require('moment');
const { validationResult } = require('express-validator');






const destiniesAPIController = {
    
    list:(req,res) => {
    db.Destinations
        .findAll() 


        .then(Destinations =>{
        return res.status(200).json({
            total: Destinations.length,
            data: Destinations,
            status:200
        })
    })},



}






module.exports = destiniesAPIController;