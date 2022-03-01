const db = require('../database/models');

function onlyAdminMiddleware(req, res, next) {

    if (!req.session.userLogged) {
        res.redirect('/')
    } else if (req.session.userLogged.category == "user") {
        res.redirect('/')
    }
    next();
}

module.exports = onlyAdminMiddleware;