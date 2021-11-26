let fs =require('fs');
const path = require('path');

//listado de productos
let productListPath = path.join(__dirname,'../data/flights.json')
let productsListJSON = fs.readFileSync(productListPath, {encoding: 'utf-8'});
let productList = JSON.parse(productsListJSON);


const controllers = {
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    flightDetail: (req, res) => {
        res.render('flightDetail');
    },
    list: (req, res) => {
        res.render('productList',{productList})
      },
};

module.exports = controllers;