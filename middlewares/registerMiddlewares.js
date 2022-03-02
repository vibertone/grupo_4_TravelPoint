const { body } = require('express-validator');

const validations = [
    body('email').notEmpty().withMessage('Tienes que escribir un correo').bail()
        .isEmail().withMessage('Tienes que escribir un correo válido').trim(),
    body('password').notEmpty().withMessage('Tienes que crear una contraseña').bail()
        .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
        .isStrongPassword({minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})
            .withMessage('La contraseña debe tener mayúsculas, minúsculas, un número y un carácter especial.').bail(),
    body('repeatPassword').notEmpty().withMessage('Tienes que repetir la contraseña creada'),
    body('name').notEmpty().withMessage('Tienes que escribir tu nombre').isString().bail()
        .isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres').trim(),
    body('last_name').notEmpty().withMessage('Tienes que escribir tu apellido').isString().bail()
        .isLength({min: 2}).withMessage('El apellido debe tener al menos 2 caracteres').trim(),
    body('country').notEmpty().withMessage('Tienes que elegir un país')
];

module.exports = validations;