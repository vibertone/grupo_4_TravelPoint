const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/products")

router.get(ENDPOINTS.flights.PRODUCTDETAIL, controllers.productDetail);

router.get(ENDPOINTS.flights.FLIGHTDETAIL, controllers.flightDetail);

/*** LISTADO DE PRODUCTOS ***/
//router.get('/products', controllers.products); 

/*** Formulario de creación de productos + Acción de creación***/
//router.get(ENDPOINTS.ADDPRODUCT,controllers.create)



/*** Detalle de un producto particular ***/
//router.get('/products/:id/', controllers.detail); 

/*** EDITAR UN PRODUCTO ***/
//router.get('/products/:id/edit', controllers.edit); 
//router.put('/products/:id', controllers.update); 


/*** DELETE UN PRODUCTO***/
//router.delete('/products/:id', controllers.destroy); 


module.exports = router;