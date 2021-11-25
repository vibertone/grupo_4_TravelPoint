const controllers = {
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    flightDetail: (req, res) => {
        res.render('flightDetail');
    }
};

module.exports = controllers;