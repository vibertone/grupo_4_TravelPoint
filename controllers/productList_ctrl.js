const fs = require('fs');
const path=require('path');
const productsFilePath = path.join(__dirname, '../data/flights.json');

const controllers = {
    // Root - Show all products
    productList: (req, res) => {
        res.render('productList');
    },
    // Detail - Detail from one product
    detail: (req, res) => {
		idProd=req.params.id;
		producto = products.find(function(producto){
			return producto.id==idProd;
		})
		res.render('detail',{producto})
	},
    // Create - Form to create
create: (req, res) => {
    res.render('product-create-form')
},

    // Create -  Method to store
store: (req, res) => {
    // Do the magic
},

    // Update - Form to edit
edit: (req, res) => {
    res.render('product-edit-form')
},
    // Update - Method to update
update: (req, res) => {
    res.render('product-edit-form')
},

// Delete - Delete one product from DB
destroy : (req, res) => {
    res.render('product-edit-form')
}

};




module.exports = controllers;