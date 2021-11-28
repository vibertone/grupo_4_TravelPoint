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
        "SHOPPINGDETAIL": "/shoppingdetail",
        "PRODUCTDETAIL": "/productdetail/:id"
    },
    administrator: {
        "USERSLIST": "/userlist",
        "PRODUCTLIST": "/productlist",
        "PRODUCTCREATE": "/productcreate",
        "PRODUCTREVIEW":"/productreview/:id"
    }
};


module.exports = ENDPOINTS;