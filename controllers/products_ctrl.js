let fs = require('fs');
const path = require('path');

const flightsFilePath = path.join(__dirname, '../data/flights.json');
const flights = JSON.parse(fs.readFileSync(flightsFilePath, 'utf-8'));

const controllers = {
    productDetail: (req, res) => {
        res.render('productDetail', {data: flights});
    },
    shoppingDetail: (req, res) => {
        res.render('shoppingDetail');
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