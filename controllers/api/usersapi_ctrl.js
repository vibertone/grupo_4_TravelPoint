const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fetch = require("node-fetch");
const moment = require('moment');
const { validationResult } = require('express-validator');






const usersAPIController = {
    
    test:(req,res) => {
    db.UsersAPI
        .findAll() 
        .then(Users =>{
        return res.status(200).json({
            total: Users.length,
            data: Users,
            status:200
        })
    })
}
}
    

//     list: (req,res) => {
//         db.Users.findAll()
//         .then(users=>{
//         let respuesta = {
//             meta: {
//                 status:200,
//                 total: users.length,
//                 url: 'api/users'
//             },
//             data: users
//         }
//         res.json(respuesta);
//     })

// },

//     detail: (req, res) => {
//         db.Users.findByPk(req.params.id)
//         .then(user => {
//             console.log(user)
//             let respuesta = {
//                 meta: {
//                     status: 200,
//                     total: user.length,
//                     url: '/api/users/:id'
//                 },
//                 data: user
//             }
//             res.json(respuesta);
//         });
// }


module.exports = usersAPIController;