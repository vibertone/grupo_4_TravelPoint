const { body } = require('express-validator');

const validations = [
    body('email').notEmpty().withMessage('Tienes que escribir un correo').bail()
                 .isEmail().withMessage('Tienes que escribir un correo válido').trim(),
    body('password').notEmpty().withMessage('Tienes que crear una contraseña').isLength({min: 4, max: 30}),
    body('repeatPassword').notEmpty().withMessage('Tienes que repetir la contraseña creada'),
    body('name').notEmpty().withMessage('Tienes que escribir tu nombre').isString(),
    body('lastName').notEmpty().withMessage('Tienes que escribir tu apellido').isString(),
    body('country').notEmpty().withMessage('Tienes que elegir un país')
];

module.exports = validations;