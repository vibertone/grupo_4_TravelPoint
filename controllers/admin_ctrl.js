const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../database/models')
const { Op } = require("sequelize");
const fetch = require('node-fetch');


let flightsFilePath = path.join(__dirname, '../data/flights.json');
let flights = JSON.parse(fs.readFileSync(flightsFilePath, 'utf-8'));

const controllers = {

    productList: (req, res) => {
        res.render('productList', { data: flights });
    },
    usersList: (req, res) => {
        db.Users.findAll()
            .then(function (users) {
                res.render('usersList', { users })
            });
    },
    searchUsers: (req, res) => {
        db.Users.findAll({
            where: {
                [Op.or]: [{ name: { [Op.like]: '%' + req.query.searchUsers + '%' } }, { last_name: { [Op.like]: '%' + req.query.searchUsers + '%' } }]
            }
        })
            .then(userFounded => {
                res.json(userFounded)
            })
    },
    productCreate: async (req, res) => {

        let airlines = await db.Airlines.findAll();
        let airports = await db.Airports.findAll();
        let countries = await db.Countries.findAll();
        let cities = await db.Cities.findAll();
        res.render('productCreate2', { airlines , airports, countries, cities });
    },

    store: async (req, res) => {

        /*  let errors = validationResult(req);
         if (errors.errors.length > 0) {
             return res.render('productCreate', {
                 errors: errors.mapped(),
                 old: req.body
             });
         } */

        let flightToCreate = {
            flight_number: req.body.nroVuelo,
            duration: req.body.duration,
            airline_id: Number(req.body.airline),
            date: req.body.fechaVuelo,
            price: req.body.price
        }

        let originToCreate = {
            airport_id: Number(req.body.aeropuertoOrigen),
            country_id: Number(req.body.originCountry),
            city_id: Number(req.body.originCity)
        }

        let destinyToCreate = {
            airport_id: Number(req.body.aeropuertoDestino),
            country_id: Number(req.body.destinyCountry),
            city_id: Number(req.body.destinyCity)
        }

        let flight = db.Flights.create(flightToCreate);
        let origin = db.Origins.create(originToCreate);
        let destiny = db.Destinations.create(destinyToCreate);

        Promise.all([flight, origin, destiny]).then(data => { data });

        res.redirect('/admin/productList');
    },

    productEdit: (req, res) => {
        elID = req.params.id;
        let flightID = flights.find(oneFlight => {
            if (oneFlight.id == elID) {
                return oneFlight;
            }
        });
        res.render('productEdit', { flight: flightID });
    },

    update: (req, res) => {
        const {
            origen, destino, precio, tipo, ida, vuelta, horarioIda, horarioLlegadaIda,
            duracionIda, escalasIda, horarioVuelta, horarioLlegadaVuelta, duracionVuelta,
            escalasVuelta, aeropuertoOrigen, aeropuertoDestino
        } = req.body;
        elID = req.params.id;
        const newProduct = [];

        flights.map(data => {
            if (data.id == elID) {
                data.origen = origen, data.destino = destino, data.precio = precio, data.tipo = tipo, data.ida = ida,
                    data.vuelta = vuelta, data.horarioIda = horarioIda, data.horarioLlegadaIda = horarioLlegadaIda, data.duracionIda = duracionIda,
                    data.escalasIda = escalasIda, data.horarioVuelta = horarioVuelta, data.horarioLlegadaVuelta = horarioLlegadaVuelta,
                    data.duracionVuelta = duracionVuelta, data.escalasVuelta = escalasVuelta, data.aeropuertoOrigen = aeropuertoOrigen,
                    data.aeropuertoDestino = aeropuertoDestino
            };
            newProduct.push(data);
        });
        fs.writeFileSync(flightsFilePath, JSON.stringify(flights), 'utf-8');
        res.redirect('/admin/productList')
    },

    productReview: (req, res) => {
        elID = req.params.id;
        let flightID = flights.find(oneFlight => {
            if (oneFlight.id == elID) {
                return oneFlight;
            }
        });
        res.render('productReview', { flight: flightID });
    },

    productDelete: (req, res) => {
        let elID = req.params.id;
        flights = flights.filter(oneflight => {
            return oneflight.id != elID;
        })
        let newProductList = JSON.stringify(flights);
        fs.writeFileSync(flightsFilePath, newProductList)
        res.redirect("/admin/productlist")
    }
}


module.exports = controllers;