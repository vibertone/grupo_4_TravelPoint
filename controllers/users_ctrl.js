const controllers = {
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    },
    myAccount: (req, res) => {
        res.render ('myAccount');
    },
    createMyAccount: (req, res) => {
        res.redirect('/')
    }
};

module.exports = controllers;