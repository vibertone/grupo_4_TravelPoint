const { body } = require('express-validator');

const validations = [
    body('tipo').notEmpty().withMessage('Selecciona un tipo de producto'),
    body('origen').notEmpty().withMessage('Ingresa el lugar de origen'),
    body('aeropuertoOrigen').notEmpty().withMessage('Ingresa el aeropuerto de origen'),
    body('destino').notEmpty().withMessage('Ingresa el destino'),
    body('aeropuertoDestino').notEmpty().withMessage('Ingresa el aeropuerto del destino'),
    body('ida').notEmpty().withMessage('Ingresa la fecha de ida'),
    body('vuelta').notEmpty().withMessage('Ingresa la fecha de vuelta'),
    body('horarioIda').notEmpty().withMessage('Ingresa el horario de la ida'),
    body('horarioLlegadaIda').notEmpty().withMessage('Ingresa el horario de llegada'),
    body('escalasIda').notEmpty().withMessage('Selecciona la cantidad de escalas'),
    body('duracionIda').notEmpty().withMessage('Ingresa la duracion del vuelo de ida'),
    body('horarioVuelta').notEmpty().withMessage('Ingresa el horario de la vuelta'),
    body('horarioLlegadaVuelta').notEmpty().withMessage('Ingresa el horario de llegada'),
    body('escalasVuelta').notEmpty().withMessage('Selecciona la cantidad de escalas'),
    body('duracionVuelta').notEmpty().withMessage('Ingresa la duracion del vuelo de vuelta'),
    body('precio').notEmpty().withMessage('Ingresa el valor')
];

module.exports = validations;