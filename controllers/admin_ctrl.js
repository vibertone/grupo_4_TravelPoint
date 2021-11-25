const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/flights.json');

const controllers = {

    productList: (req, res) => {
        res.render('productList');
    },
    usersList: (req, res) => {
        res.render('usersList');
    },

    //Nuevos metodos Sprint #4
    // Root - Show all products


    // Detail - Detail from one product
    //detail: (req, res) => {
    //	idProd=req.params.id;
    //	producto = products.find(function(producto){
    //		return producto.id==idProd;
    //	})
    //	res.render('detail',{producto})
    //},

    // Create - Form to create
    /* addProduct: (req, res) => {
            res.render('addProduct');
            }, */


    // Create -  Method to store
    // store: (req, res) => {

    // },

    // Update - Form to edit
    // edit: (req, res) => {
    // res.render('product-edit-form')
    //},
    // Update - Method to update
    //update: (req, res) => {
    //res.render('product-edit-form')
    //},

    // Delete - Delete one product from DB
    //  destroy : (req, res) => {
    //  res.render('product-edit-form')
    //}

};




module.exports = controllers;