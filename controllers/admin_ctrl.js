const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../database/models')
const { Op } = require("sequelize");
const fetch = require('node-fetch');

const Product = require('../model_functions/Products')

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

        let airlines = await fetch('https://airlabs.co/api/v9/airlines?api_key=2be1ed3e-fcdc-496b-b266-ef53411c6522').then(response => response.json());
        let airports = await fetch('https://airlabs.co/api/v9/airports?api_key=2be1ed3e-fcdc-496b-b266-ef53411c6522').then(response => response.json());
        let countries = await db.Countries.findAll();
        res.render('productCreate2', { airlines: airlines.response , airports: airports.response, countries });

    },

    store: async (req, res) => {

        /*  let errors = validationResult(req);
         if (errors.errors.length > 0) {
             return res.render('productCreate', {
                 errors: errors.mapped(),
                 old: req.body
             });
         } */

        let airportToCreate = {
            airport: [req.body.aeropuertoOrigen,
                      req.body.aeropuertoDestino],
            code: [req.body.codAeropuertoOrigen,
                   req.body.codAeropuertoDestino]
        }

        let airlineToCreate = {
            airline: req.body.airline
        }

        let countryToCreate = {
            id: [Number(req.body.origen),
                 Number(req.body.destino)],
            country: [req.body.origen,
                      req.body.destino]
        }

        let productToCreate = {
            ...req.body,
            flight_number: req.body.nroVuelo,

        }
        Product.create(productToCreate);

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