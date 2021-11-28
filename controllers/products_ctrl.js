let fs = require('fs');
const path = require('path');

//listado de productos
/* let productListPath = path.join(__dirname,'../data/flights.json')
let productsListJSON = fs.readFileSync(productListPath, {encoding: 'utf-8'});
let productList = JSON.parse(productsListJSON);
 */

const controllers = {
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    flightDetail: (req, res) => {
        res.render('flightDetail');
    }
    /*
    list: (req, res) => {
        res.render('productList',{productList})
      },
    productReview:(req,res)=>{
        let id =req.params.id
        let productToShow =id -1
        res.render('productreview',{productList:productList[productToShow]})
    }, */
};

module.exports = controllers;