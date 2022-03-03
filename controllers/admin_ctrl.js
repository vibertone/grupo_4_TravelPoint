const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../database/models')
const { Op } = require("sequelize");
const fetch = require('node-fetch');


const controllers = {

    productList: async (req, res) => {
        let itineraries = await db.Itineraries.findAll({
            include: [
                {
                    association: "flights", include: [
                        { association: "airlines" }
                    ]
                },
                {
                    association: "origins", include: [
                        { association: "airports" },
                        { association: "cities" },
                        { association: "countries" }
                    ]
                },
                {
                    association: "destinations", include: [
                        { association: "airports" },
                        { association: "cities" },
                        { association: "countries" }]
                }]
        });
        res.render('productList', { itineraries });
    },
    usersList: (req, res) => {
        db.Users.findAll({include: [{association: "countries"}]})
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

        let airlines = await db.Airlines.findAll({order: [['airline', 'ASC']]});
        let airports = await db.Airports.findAll({order: [['airport', 'ASC']]});
        let countries = await db.Countries.findAll({order: [['country', 'ASC']]});
        let cities = await db.Cities.findAll({order: [['city', 'ASC']]});

        res.render('productCreate', { airlines, airports, countries, cities });
    },

    store: async (req, res) => {

        let airlines = await db.Airlines.findAll({order: [['airline', 'ASC']]});
        let airports = await db.Airports.findAll({order: [['airport', 'ASC']]});
        let countries = await db.Countries.findAll({order: [['country', 'ASC']]});
        let cities = await db.Cities.findAll({order: [['city', 'ASC']]});

        let errors = validationResult(req);
         if (errors.errors.length > 0 && airlines && airports && countries && cities) {
             return res.render('productCreate', {
                 errors: errors.mapped(),
                 old: req.body,
                 airlines,
                 countries,
                 airports,
                 cities
             });
         } 

        let flightToCreate = {
            flight_number: req.body.nroVuelo,
            duration: req.body.duration,
            airline_id: Number(req.body.airline),
            date: req.body.fechaVuelo,
            time: req.body.horarioVuelo,
            price: req.body.price
        }

        let originToCreate = {
            airport_id: Number(req.body.aeropuertoOrigen),
            country_id: Number(req.body.originCountry),
            city_id: Number(req.body.originCity)
        }

        if (req.file) {
            var destinyToCreate = {
                airport_id: Number(req.body.aeropuertoDestino),
                country_id: Number(req.body.destinyCountry),
                city_id: Number(req.body.destinyCity),
                image: req.file.filename
            }
        } else {
            var destinyToCreate = {
                airport_id: Number(req.body.aeropuertoDestino),
                country_id: Number(req.body.destinyCountry),
                city_id: Number(req.body.destinyCity)
            }
        }

        // Aca arranca la creaction de itineraries que no funciona la concha de su madre

        let lastOrigin = db.Origins.findOne({
            where: {
                airport_id: Number(req.body.aeropuertoOrigen),
                country_id: Number(req.body.originCountry),
                city_id: Number(req.body.originCity)
            }
        });

        let lastDestiny = db.Destinations.findOne({
            where: {
                airport_id: Number(req.body.aeropuertoDestino),
                country_id: Number(req.body.destinyCountry),
                city_id: Number(req.body.destinyCity)
            }
        });

        let flightCreated = db.Flights.findOne({
            where: {
                flight_number: req.body.nroVuelo
            }
        })

        let itineraryToCreate = {
            origin_id: Number(lastOrigin.id),
            destiny_id: Number(lastDestiny.id),
            flight_id: Number(flightCreated.id)
        }

        function itinerary() {
            db.Itineraries.create(itineraryToCreate)
        }

        let creaton = async () => {
            db.Flights.create(flightToCreate);
            db.Origins.create(originToCreate);
            db.Destinations.create(destinyToCreate);
            await itinerary().then(data => { data });
        }

        creaton();

        res.redirect('/admin/productList');
    },

    productEdit: async (req, res) => {
        let itineraries = await db.Itineraries.findByPk(req.params.id, {
            include: [
                {
                    association: "flights", include: [
                        { association: "airlines" }
                    ]
                },
                {
                    association: "origins", include: [
                        { association: "airports" },
                        { association: "cities" },
                        { association: "countries" }
                    ]
                },
                {
                    association: "destinations", include: [
                        { association: "airports" },
                        { association: "cities" },
                        { association: "countries" }]
                }]
        });
        let airlines = await db.Airlines.findAll({order: [['airline', 'ASC']]});
        let airports = await db.Airports.findAll({order: [['airport', 'ASC']]});
        let allCountries = await db.Countries.findAll({order: [['country', 'ASC']]});
        let cities = await db.Cities.findAll({order: [['city', 'ASC']]});
        res.render('productEdit', { itineraries, airlines, airports, allCountries, cities });
    },

    update: async (req, res) => {
        let flightToUpdate = {
            flight_number: req.body.nroVuelo,
            duration: req.body.duration,
            airline_id: Number(req.body.airline),
            date: req.body.fechaVuelo,
            time: req.body.horarioVuelo,
            price: req.body.price
        }

        let originToUpdate = {
            airport_id: Number(req.body.aeropuertoOrigen),
            country_id: Number(req.body.originCountry),
            city_id: Number(req.body.originCity)
        }

        let destinyToUpdate = {
            airport_id: Number(req.body.aeropuertoDestino),
            country_id: Number(req.body.destinyCountry),
            city_id: Number(req.body.destinyCity)
        }
        
        let flights = await db.Flights.update({  });
        let origin = await db.Origins.update({  });
        let destiny = await db.Destinations.update({  });
        let itinerary = await db.Itineraries.update({itineraryToUpdate, where: {id: req.params.id}})


        db.Flights.update({ flightToUpdate });
        db.Origins.update({ originToUpdate });
        db.Destinations.update({ destinyToUpdate });
        db.Itineraries.update({itineraryToUpdate, where: {id: req.params.id}})

        res.redirect('/admin/productList')
    },

    productReview: async (req, res) => {
        let itineraries = await db.Itineraries.findByPk(req.params.id, {
            include: [
                {
                    association: "flights", include: [
                        { association: "airlines" }
                    ]
                },
                {
                    association: "origins", include: [
                        { association: "airports" },
                        { association: "cities" },
                        { association: "countries" }
                    ]
                },
                {
                    association: "destinations", include: [
                        { association: "airports" },
                        { association: "cities" },
                        { association: "countries" }]
                }]
        });
        res.render('productReview', { itineraries });
    },

    productDelete: (req, res) => {
        db.Itineraries.destroy({where: {id: req.params.id}})
        res.redirect("/admin/productlist")
    }
}


module.exports = controllers;