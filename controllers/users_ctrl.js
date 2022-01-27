const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../model_functions/Users');
const { user } = require('../endpoints');
const db = require('../database/models')
const { Op } = require("sequelize");
const fetch = require ('node-fetch')

const controllers = {
    register: async (req, res) => {
        let countries = await fetch('https://restcountries.com/v3.1/all').then(response => response.json());
        console.log(countries);
        res.render('register', {countries});
    },
    createMyAccount: (req, res) => {
        let errors = validationResult(req);
        if (errors.errors.length > 0) {
            res.render('register', {
                errors: errors.mapped(),
                old: req.body
            });
        }

        db.User.findOne({ where: { email: req.body.email } }).then(usersInData => {
            if (usersInData) {
                res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    old: req.body
                });

            } else {

                let userToCreate = {
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    image: "/perfil-sin-foto.jpg"
                }
                db.User.create(userToCreate);
                res.redirect('/user/login')
            }
        });
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
        db.User.findOne({ where: { email: req.body.email } }).then(userToLogin => {
            if (userToLogin) {
                let passwordValidation = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if (passwordValidation) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;

                    //cookie
                    if (req.body.remember_checkbox) {
                        res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60})
                    };

                    res.redirect('/user/myaccount')
                }
                res.render('login', {
                    errors: {
                        email: {
                            msg: 'Los datos ingresados son incorrectos'
                        }
                    }
                });
            }
            res.render('login', {
                errors: {
                    email: {
                        msg: 'El email ingresado es incorrecto'
                    }
                }
            });
        });
    },
    myAccount: (req, res) => {
        res.render('myAccount', {
            user: req.session.userLogged
        });
    },
    editMyAccount: (req, res) => {
        res.render('editMyAccount', {
            user: req.session.userLogged
        });
    },
    processEditMyAccount: (req, res) => {
        const {
            name, lastName, country
        } = req.body;

        db.User.update({
            name: name,
            lastName: lastName,
            country: country
        },
            {
                where: {
                    id: req.session.userLogged.id
                }
            })
            .then()
        res.redirect('/user/myaccount')
    },
    myProfilePicture: (req, res) => {

        db.User.update({
            image: req.file.filename
        },
            {
                where: {
                    id: req.session.userLogged.id
                }
            })
            .then()
        res.redirect('/user/myaccount')
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
};

module.exports = controllers;