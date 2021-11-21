const fs = require('fs');
const path = require('path');

const flightsFilePath = path.join(__dirname, '../data/flights.json');
const flights = JSON.parse(fs.readFileSync(flightsFilePath, 'utf-8'));

const controllers = {
    index: (req, res) => {
        res.render('index', {data: flights})
    }
};
module.exports = controllers;