const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const controllers = {
    index: async (req, res) => {
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
        res.render('index', {itineraries});
    }
};
module.exports = controllers;