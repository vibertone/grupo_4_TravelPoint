const User = require('../models/Users');

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;
    let emailCookie = req.cookies.userEmail;
    let userFromCookie = User.findByEmail('email', emailCookie);

    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports = userLoggedMiddleware;