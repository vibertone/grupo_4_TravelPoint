function loggedMiddleware(req, res, next){
    if(req.session.userLogged){
        res.redirect('/user/myaccount')
    }
    next();
}

module.exports = loggedMiddleware;