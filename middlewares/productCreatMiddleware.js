const { body } = require('express-validator');

const validations = [
    body('originCountry').notEmpty().withMessage('Ingresa el lugar de origen'),
    body('aeropuertoOrigen').notEmpty().withMessage('Ingresa el aeropuerto de origen'),
    body('destinyCountry').notEmpty().withMessage('Ingresa el destino'),
    body('aeropuertoDestino').notEmpty().withMessage('Ingresa el aeropuerto del destino'),
    body('fechaVuelo').notEmpty().withMessage('Ingresa la fecha del vuelo'),
   // body('vuelta').notEmpty().withMessage('Ingresa la fecha de vuelta'),
   // body('horarioIda').notEmpty().withMessage('Ingresa el horario de la ida'),
   // body('horarioLlegadaIda').notEmpty().withMessage('Ingresa el horario de llegada'),
   // body('escalasIda').notEmpty().withMessage('Selecciona la cantidad de escalas'),
    body('duration').notEmpty().withMessage('Ingresa la duracion del vuelo'),
   // body('horarioVuelta').notEmpty().withMessage('Ingresa el horario de la vuelta'),
   // body('horarioLlegadaVuelta').notEmpty().withMessage('Ingresa el horario de llegada'),
   // body('escalasVuelta').notEmpty().withMessage('Selecciona la cantidad de escalas'),
   // body('duracionVuelta').notEmpty().withMessage('Ingresa la duracion del vuelo de vuelta'),
    body('price').notEmpty().withMessage('Ingresa el valor'),
    body('airline').notEmpty().withMessage('Ingresa la aerolínea')
];

module.exports = validations;