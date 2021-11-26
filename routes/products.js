const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/products_ctrl")

router.get(ENDPOINTS.flights.PRODUCTDETAIL, controllers.productDetail);

router.get(ENDPOINTS.flights.FLIGHTDETAIL, controllers.flightDetail);

/*** LISTADO DE PRODUCTOS ***/
router.get(ENDPOINTS.administrator.PRODUCTLIST, controllers.list);

/*** Formulario de creación de productos + Acción de creación***/
//router.get(ENDPOINTS.ADDPRODUCT,controllers.create)



/*** Detalle de un producto particular admin ***/
router.get(ENDPOINTS.administrator.PRODUCTREVIEW, controllers.productReview); 

/*** EDITAR UN PRODUCTO ***/
//router.get('/products/:id/edit', controllers.edit); 
//router.put('/products/:id', controllers.update); 


/*** DELETE UN PRODUCTO***/
//router.delete('/products/:id', controllers.destroy); 


module.exports = router;