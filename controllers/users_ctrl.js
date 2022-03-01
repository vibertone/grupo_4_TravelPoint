const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const fetch = require('node-fetch');

const controllers = {
    register: (req, res) => {
        db.Countries.findAll({order: [['country', 'ASC']]}).then(countries => {
            res.render('register', { countries });
        });
    },
    createMyAccount: (req, res) => {

        let errors = validationResult(req);
        if (errors.errors.length > 0) {
            db.Countries.findAll().then(countries => {
                res.render('register', {
                    errors: errors.mapped(),
                    old: req.body,
                    countries
                });
            })
        }

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

                    let userToCreate = {
                        ...req.body,
                        country_id: Number(req.body.country),
                        password: bcryptjs.hashSync(req.body.password, 10),
                        image: "/perfil-sin-foto.jpg",
                        category: "user"
                    }

                    db.Users.create(userToCreate);

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
    myAccount: async (req, res) => {
        if (req.session.userLogged) {
            let country = await db.Countries.findOne({ where: { id: req.session.userLogged.country_id } });
            res.render('myAccount', { user: req.session.userLogged, country })
        };

    },
    editMyAccount: async (req, res) => {
        let countries = await db.Countries.findAll({order: [['country', 'ASC']]});
        res.render('editMyAccount', {
            user: req.session.userLogged,
            countries
        });
    },
    processEditMyAccount: (req, res) => {

        db.Users.update(
            {
                name: req.body.name,
                last_name: req.body.last_name,
                country_id: Number(req.body.country)
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

        db.Users.update(
            {
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