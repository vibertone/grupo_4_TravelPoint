const ENDPOINTS = {
    index: {
        "INDEX": "/"
    },
    user: {
        "REGISTER": "/register",
        "LOGIN": "/login",
        "MYACCOUNT": "/myaccount"
    },
    flights: {
        "FLIGHTDETAIL": "/flightdetail",
        "PRODUCTDETAIL": "/productdetail"
    },
    administrator: {
        "USERSLIST": "/userlist",
        "PRODUCTLIST": "/productlist",
        "PRODUCTCREATE": "/productcreate",
        "PRODUCTREVIEW":"/productreview/:id",
        "PRODUCTEDIT": "/productedit/:id"
    }
};


module.exports = ENDPOINTS;