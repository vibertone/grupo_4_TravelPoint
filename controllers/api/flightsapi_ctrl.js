const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fetch = require("node-fetch");
const moment = require('moment');
const { validationResult } = require('express-validator');






const flightsAPIController = {
    
    list:(req,res) => {
    db.Flights
        .findAll() 


        .then(Flights =>{
        return res.status(200).json({
            total: Flights.length,
            data: Flights,
            url: "/flightsapi/list" ,
            status:200
        })
    })},


        show:(req,res) => {
            db.Flights
            .findOne (req.param.id)
            .then( flight =>{
                return res.status(200).json({
            data: flight,
            url:"/flightsapi/list/:id" ,
            status:200

                })
            })
            }

}






module.exports = flightsAPIController;