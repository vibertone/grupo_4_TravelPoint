const db = require("../database/models");


const controllers = {
    productDetail: async (req, res) => {
        let itineraries = await db.Itineraries.findByPk(req.params.id,
            {
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
        res.render('productDetail', { itineraries });
    },
    shoppingDetail: async (req, res) => {
        let itineraries = await db.Itineraries.findByPk(req.params.id,
            {
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
        res.render('shoppingDetail', { itineraries });
    }
};

module.exports = controllers;