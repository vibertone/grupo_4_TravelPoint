const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Model = require('../models/Model');

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
        let usersInData = Model.findByEmail('email', req.body.email);
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
        Model.create(userToCreate);
        res.redirect('/user/login')
    },
    login: (req, res) => {
        res.render('login');
    },
    processLogin: (req, res) => {
        if(req.body.email == 0){
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Ingrese un email registrado'
                    }
                }
            });
        }
        let userToLogin = Model.findByEmail('email', req.body.email);
        if (userToLogin) {
            let passwordValidation = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (passwordValidation) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                //cookie
                if(req.body.remember_checkbox) {
                    res.cookie('userEmail', req.body.email, {maxAge: 1000})
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