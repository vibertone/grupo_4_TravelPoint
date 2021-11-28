const fs = require('fs');
const path = require('path');

const flightsFilePath = path.join(__dirname, '../data/flights.json');
const flights = JSON.parse(fs.readFileSync(flightsFilePath, 'utf-8'));

const controllers = {

    productList: (req, res) => {
        res.render('productList', {data: flights});
    },
    usersList: (req, res) => {
        res.render('usersList');
    },
    productCreate: (req, res) => {
        res.render('productCreate')
    },
    store: (req, res) => {
        const { origen, destino, precio, tipo, ida, vuelta, horarioIda, horarioVuelta, escalas } = req.body;

        const data = {
            origen: origen,
            destino: destino,
            precio: precio,
            tipo: tipo,
            ida: ida,
            vuelta: vuelta,
            horarioIda: horarioIda,
            horarioVuelta: horarioVuelta,
            escalas: escalas
        };

        flights.push(data);

        fs.writeFileSync(flightsFilePath, JSON.stringify(flights), 'utf-8');

        res.redirect('/admin/productlist');
    }
}


module.exports = controllers;