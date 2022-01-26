const User = require('../model_functions/Users');
const db = require('../database/models')

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;
    
    let emailCookie = req.cookies.userEmail;
    db.User.findOne({ where: { email: emailCookie } }).then(userFromCookie => {
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
});
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports = userLoggedMiddleware;