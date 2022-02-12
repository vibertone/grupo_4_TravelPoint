const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models')
const { Op } = require("sequelize");
const fetch = require('node-fetch')

const controllers = {
    register: async (req, res) => {
        let countries = await fetch('https://restcountries.com/v3.1/all').then(response => response.json());
        res.render('register', { countries });
    },
    createMyAccount: (req, res) => {
        /*   let errors = validationResult(req);
          if (errors.errors.length > 0) {
              res.render('register', {
                  errors: errors.mapped(),
                  old: req.body
              });
          } */

        db.Users.findOne({ where: { email: req.body.email } })
            .then(usersInData => {
                if (usersInData) {
                    res.render('register', {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado'
                            }
                        },
                        old: req.body
                    });

                } else if (req.body.password !== req.body.repeatPassword) {
                    res.render('register', {
                        errors: {
                            repeatPassword: {
                                msg: 'Las contraseñas deben coincidir'
                            }
                        }
                    })

                } else {

                    let countryToCreate = {
                        id: Number(req.body.country),
                        country: req.body.countryId
                    }

                    let userToCreate = {
                        ...req.body,
                        country_id: Number(req.body.country),
                        password: bcryptjs.hashSync(req.body.password, 10),
                        image: "/perfil-sin-foto.jpg"
                    }

                    let newCountry = db.Countries.create(countryToCreate);
                    let newUser = db.Users.create(userToCreate);
                    Promise.all([newCountry, newUser]).then(data => { data });
                    res.redirect('/user/login');
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
        db.Users.findOne({ where: { email: req.body.email } }).then(userToLogin => {
            if (userToLogin) {
                let passwordValidation = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if (passwordValidation) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;

                    //cookie
                    if (req.body.remember_checkbox) {
                        res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 })
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
        let countries = db.Countries.findOne({where: {id: req.session.userLogged.country_id}});
        let country = JSON.stringify(countries)
        res.render('myAccount', {
            user: req.session.userLogged,
            country
        });
    },
    editMyAccount: async (req, res) => {
        let countries = await fetch('https://restcountries.com/v3.1/all').then(response => response.json());
        res.render('editMyAccount', {
            user: req.session.userLogged,
            countries
        });
    },
    processEditMyAccount: (req, res) => {
        const {
            name, last_name, country
        } = req.body;

        db.Users.update({
            name: name,
            last_name: last_name,
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

        db.Users.update({
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