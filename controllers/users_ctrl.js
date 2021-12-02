const fs = require('fs');
const path = require('path');

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
        res.render ('myAccount', {data: users});
    },
    createMyAccount: (req, res) => {
        const {
            email, password, name, lastName, pais
        } = req.body;

        const data = {
            email: email, password: password, name: name, lastName: lastName, pais: pais
        };
        
        users.push(data);

        fs.writeFileSync(usersFilePath, JSON.stringify(users), 'utf-8');

        res.redirect('/user/login');
    }
};

module.exports = controllers;