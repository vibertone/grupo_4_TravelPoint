const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/Users');
const { user } = require('../endpoints');

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
            image: "/perfil-sin-foto.jpg"
        }
        User.create(userToCreate);
        res.redirect('/user/login')
    },
    login: (req, res) => {
        res.render('login');
    },
    processLogin: (req, res) => {
        if (req.body.email == 0) {
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Ingrese un email registrado'
                    }
                }
            });
        }
        let userToLogin = User.findByEmail('email', req.body.email);
        if (userToLogin) {
            let passwordValidation = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (passwordValidation) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                //cookie
                if (req.body.remember_checkbox) {
                    res.cookie('userEmail', req.body.email, { maxAge: 1000 })
                };

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
    editMyAccount: (req, res) => {
        res.render('editMyAccount');
    },
    processEditMyAccount: (req, res) => {
        const {
            name, email, nacionalidad
        } = req.body;
;
        const editProfile = [];

        users.map(data => {
            if (req.session.userLogged.id == data.id) {
                data.name = name, data.email = email, data.nacionalidad = nacionalidad
            };
            editProfile.push(data);
        });
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '), 'utf-8');
        res.redirect('/user/myaccount')
    },
    myProfilePicture: (req, res) => {
        const newPicture = [];

        users.map(data => {
            if (req.session.userLogged.id == data.id) {
                data.image = req.file.filename
            };
            newPicture.push(data);
        });
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '), 'utf-8');

        res.redirect('/user/myaccount')
    }
};

module.exports = controllers;