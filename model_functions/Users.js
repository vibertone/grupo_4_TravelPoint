const fs = require('fs');
const path = require('path');
const db = require('../database/models')


const User = {
    usersJson: path.join(__dirname, '../data/users.json'),
    usersData: function() {
        return JSON.parse(fs.readFileSync(this.usersJson, 'utf-8'))
    },
    
    usersDataBase: function() {
        return db.User.findAll();
    },

    generateId: function() {
        let allUsers = this.usersData();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },

    findById: function(id) {
        let allUsers = this.usersData();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound
    },

    findByEmail: function(email, text) {
        let allUsers = this.usersData();
        let userFound = allUsers.find(oneUser => oneUser[email] === text);
        return userFound
    },

    create: function(newUser) {
        let allUsers = this.usersData();
        let user = {
            id: this.generateId(),
            ...newUser
        }
        allUsers.push(user);
        fs.writeFileSync(this.usersJson, JSON.stringify(allUsers, null, ' '), 'utf-8');
        return user
    },

    delete: function(id) {
        let allUsers = this.usersData();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.usersJson, JSON.stringify(finalUsers, null, ' '), 'utf-8');
        return true
    }
}

module.exports = User;