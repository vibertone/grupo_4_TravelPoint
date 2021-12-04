const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

let usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controllers = {
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    },
    myAccount: (req, res) => {
        res.render('myAccount');
    },
    myProfilePicture: (req, res) => {
        if (req.file) {
            let profilePicture = req.body;

            res.redirect('myAccount')
        } else {
            res.redirect('myAccount')
        }
    },
    createMyAccount: (req, res) => {
        let errors = validationResult(req);
        if (errors.errors.length > 0) {
            return res.render('register', {
                errors: errors.mapped(),
                old: req.body
            });
        } else {
            const lastIndex = users.length - 1;
            const id = users[lastIndex].id + 1;

            const {
                email, password, name, lastName, country
            } = req.body;

            const data = {
                id: id, email: email, password: bcryptjs.hashSync(password, 10), name: name, lastName: lastName, country: country, image: "../public/uploads/perfil-sin-foto.jpg"
            };

            users.push(data);

            fs.writeFileSync(usersFilePath, JSON.stringify(users), 'utf-8');

            res.redirect('/user/login');
        }
    }
};

module.exports = controllers;