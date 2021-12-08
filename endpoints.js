const ENDPOINTS = {
    index: {
        "INDEX": "/"
    },
    user: {
        "REGISTER": "/register",
        "LOGIN": "/login",
        "MYACCOUNT": "/myaccount",
        "EDITMYACCOUNT": "/myaccount/edit"
    },
    flights: {
        "SHOPPINGDETAIL": "/shoppingdetail",
        "PRODUCTDETAIL": "/productdetail/:id"
    },
    administrator: {
        "USERSLIST": "/userslist",
        "PRODUCTLIST": "/productlist",
        "PRODUCTCREATE": "/productcreate",
        "PRODUCTREVIEW":"/productreview/:id",
        "PRODUCTEDIT": "/productedit/:id",
        "PRODUCTDELETE":"/productdelete/:id"
    }
};


module.exports = ENDPOINTS;