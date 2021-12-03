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
};

module.exports = controllers;