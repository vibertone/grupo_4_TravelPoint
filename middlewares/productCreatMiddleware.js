const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('originCountry').notEmpty().withMessage('Ingresa el pais de origen'),
    body('originCity').notEmpty().withMessage('Ingresa la ciudad de origen'),
    body('aeropuertoOrigen').notEmpty().withMessage('Ingresa el aeropuerto de origen'),
    body('destinyCountry').notEmpty().withMessage('Ingresa el pais de destino'),
    body('destinyCity').notEmpty().withMessage('Ingresa la ciudad de destino'),
    body('aeropuertoDestino').notEmpty().withMessage('Ingresa el aeropuerto del destino'),
    body('fechaVuelo').notEmpty().withMessage('Ingresa la fecha del vuelo'),
    body('horarioVuelo').notEmpty().withMessage('Ingresa el horario del vuelo'),
    body('duration').notEmpty().withMessage('Ingresa la duración del vuelo'),
    body('price').notEmpty().withMessage('Ingresa el valor del vuelo'),
    body('airline').notEmpty().withMessage('Ingresa la aerolínea'),
    body('nroVuelo').notEmpty().withMessage('Ingresa el número de vuelo'),
    body('productPicture').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', 'gif'];

        if(file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de imagen permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true
    })
];

module.exports = validations;