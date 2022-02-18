const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fetch = require("node-fetch");
const moment = require('moment');
const { validationResult } = require('express-validator');

//llamado a modelos
const Users = db.Users;


const usersAPIController = {
    list: (req,res) => {
        db.Users.findAll()
        .then(users=>{
        let respuesta = {
            meta: {
                status:200,
                total: users.length,
                url: 'api/users'
            },
            data: users
        }
        res.json(respuesta);
    })

},

    detail: (req, res) => {
        db.Users.findByPk(req.params.id)
        .then(user => {
            console.log(user)
            let respuesta = {
                meta: {
                    status: 200,
                    total: user.length,
                    url: '/api/users/:id'
                },
                data: user
            }
            res.json(respuesta);
        });
}
};

module.exports = usersAPIController;