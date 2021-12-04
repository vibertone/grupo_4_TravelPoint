const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

let flightsFilePath = path.join(__dirname, '../data/flights.json');
let flights = JSON.parse(fs.readFileSync(flightsFilePath, 'utf-8'));

const controllers = {

    productList: (req, res) => {
        res.render('productList', { data: flights });
    },
    usersList: (req, res) => {
        res.render('usersList');
    },
    productCreate: (req, res) => {
        res.render('productCreate')
    },
    productEdit: (req, res) => {
        elID = req.params.id;
        let flightID = flights.find(oneFlight => {
            if(oneFlight.id == elID) {
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
            if(data.id == elID) {
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
    store: (req, res) => {
        let errors = validationResult(req);
        if (errors.errors.length > 0) {
            return res.render('productCreate', {
                errors: errors.mapped(),
                old: req.body
            });
        } else {
            const lastIndex = flights.length - 1;
            const id = flights[lastIndex].id + 1;
    
            const {
                origen, destino, precio, tipo, ida, vuelta, horarioIda, horarioLlegadaIda,
                duracionIda, escalasIda, horarioVuelta, horarioLlegadaVuelta, duracionVuelta,
                escalasVuelta, aeropuertoOrigen, aeropuertoDestino
            } = req.body;
    
            const data = {
                id: id, origen: origen, destino: destino, precio: precio, tipo: tipo, ida: ida,
                vuelta: vuelta, horarioIda: horarioIda, horarioLlegadaIda: horarioLlegadaIda, duracionIda: duracionIda,
                escalasIda: escalasIda, horarioVuelta: horarioVuelta, horarioLlegadaVuelta: horarioLlegadaVuelta,
                duracionVuelta: duracionVuelta, escalasVuelta: escalasVuelta, aeropuertoOrigen: aeropuertoOrigen,
                aeropuertoDestino: aeropuertoDestino
            };
    
            flights.push(data);
    
            fs.writeFileSync(flightsFilePath, JSON.stringify(flights), 'utf-8');
    
            res.redirect('/admin/productlist');
        }
    },

    productReview: (req, res) => {
                elID = req.params.id;
                let flightID = flights.find(oneFlight => {
                    if(oneFlight.id == elID) {
                        return oneFlight;
                    }
                });
                res.render('productReview', { flight: flightID });
            },
    productDelete:(req,res) =>{
                        let elID=req.params.id;
                         flights = flights.filter(oneflight =>{
                            return oneflight.id !=elID;
                        })
                let newProductList= JSON.stringify(flights);
                fs.writeFileSync(flightsFilePath, newProductList)
                res.redirect("/admin/productlist")
                    }
}


module.exports = controllers; 