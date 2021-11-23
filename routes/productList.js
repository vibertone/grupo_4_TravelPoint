const express = require("express");
const router = express.Router();
const ENDPOINTS = require("../endpoints");
const controllers = require("../controllers/productList_ctrl");

router.get(ENDPOINTS.PRODUCTLIST, controllers.productList);

/*** LISTADO DE PRODUCTOS ***/ 
router.get('/products', controllers.products); 

/*** Formulario de creación de productos + Acción de creación***/ 
router.get('/products/create', controllers.create); 
router.post('/products', controllers.store); 


/*** Detalle de un producto particular ***/ 
router.get('/products/:id/', controllers.detail); 

/*** EDITAR UN PRODUCTO ***/ 
router.get('/products/:id/edit', controllers.edit); 
router.put('/products/:id', controllers.update); 


/*** DELETE UN PRODUCTO***/ 
router.delete('/products/:id', controllers.destroy); 


module.exports = router;