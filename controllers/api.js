const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fetch = require("node-fetch");
const moment = require('moment');
const { validationResult } = require('express-validator');
const { user } = require('../endpoints');






const APIController = {
    
    list:(req,res) => {
    db.Users 
        .findAll({attributes: {exclude :['password']
    }
    }) 
        .then(Users =>{
        return res.status(200).json({
            total: Users.length,
            data: Users, 
            status:200
        })
    })
},

    show:(req,res) => {
        db.Users
        .findOne (req.param.id)
        .then( user =>{
            return res.status(200).json({
        data: user,
        status:200

            })
        })
    }



}
module.exports = APIController;