const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/users');

let usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controllers = {
    register: (req, res) => {
        res.render('register');
    },
    createMyAccount: (req, res) => {
        let errors = validationResult(req);
        if (errors.errors.length > 0) {
            return res.render('register', {
                errors: errors.mapped(),
                old: req.body
            });
        }
        let usersInData = User.findByEmail('email', req.body.email);
        if (usersInData) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                old: req.body
            });
        }
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: ""
        }
        User.create(userToCreate);
        res.redirect('/user/login')
    },
    login: (req, res) => {
        res.render('login');
    },
    processLogin: (req, res) => {
        let userToLogin = User.findByEmail('email', req.body.email);
        if (userToLogin) {
            let passwordValidation = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (passwordValidation) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                res.redirect('/user/myaccount')
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Los datos ingresados son incorrectos'
                    }
                }
            });
        }
        return res.render('login', {
            errors: {
                email: {
                    msg: 'El email ingresado es incorrecto'
                }
            }
        });
    },
    myAccount: (req, res) => {
        res.render('myAccount', {
            user: req.session.userLogged
        });
    },
    myProfilePicture: (req, res) => {
        if (req.file) {
            let profilePicture = req.body;

            res.redirect('myAccount')
        } else {
            res.redirect('myAccount')
        }
    }
};

module.exports = controllers;