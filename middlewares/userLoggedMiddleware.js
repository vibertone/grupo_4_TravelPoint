const Model = require('../models/Model')

function userLoggedMiddleware(req, res, next){
    let emailCookie = req.cookies.userEmail;
    let userFromCookie = Model.findByEmail('email', emailCookie);

    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.isLogged;
    }
    next();
}

module.exports = userLoggedMiddleware;