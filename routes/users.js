const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/users_ctrl");
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const {body} = require('express-validator');

const validations = [
    body('email').notEmpty().withMessage('Tienes que escribir un mail'),
    body('password').notEmpty().withMessage('Tienes que crear una contraseña'),
    body('name').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir tu apellido')
]


var multerConfig = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/uploads')
    },
    filename: function(req, file, cb){
        cb(null, uuidv4() + "." + file.originalname)
    }
});

var multerMiddleware = multer({storage: multerConfig})

router.get(ENDPOINTS.user.LOGIN, controllers.login);

router.get(ENDPOINTS.user.REGISTER, controllers.register);
router.post(ENDPOINTS.user.REGISTER, validations, controllers.createMyAccount);

router.get(ENDPOINTS.user.MYACCOUNT, controllers.myAccount);
router.post(ENDPOINTS.user.MYACCOUNT, multerMiddleware.single('profilePicture'), controllers.myProfilePicture)


module.exports = router;