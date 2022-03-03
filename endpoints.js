const ENDPOINTS = {
    index: {
        "INDEX": "/"
    },
    user: {
        "REGISTER": "/register",
        "LOGIN": "/login",
        "MY_ACCOUNT": "/myaccount",
        "EDIT_MY_ACCOUNT": "/myaccount/edit",
        "LOGOUT": "/logout",
        
    },
    flights: {
        "SHOPPING_DETAIL": "/shoppingdetail/:id",
        "PRODUCT_DETAIL": "/productdetail/:id"
    },
    administrator: {
        "USERS_LIST": "/userslist",
        "PRODUCT_LIST": "/productlist",
        "PRODUCT_CREATE": "/productcreate",
        "PRODUCT_REVIEW":"/productreview/:id",
        "PRODUCT_EDIT": "/productedit/:id",
        "PRODUCT_DELETE":"/productdelete/:id",
        "SEARCH_USERS": "/search-users",
        "CONFIRM_PRODUCT_CREATE": "/confirm-productcreate"
    },
    api:{
        "API":"/users",
        "API2":"/users/:id",
        "USERSAPI": "/list",
        "FLIGHTSAPI": "/list",
        "FLIGHTSAPI2": "/list/:id",
        "CITIESAPI":"/list",
        "COUNTRIESAPI": "/list",
        "DESTINIESAPI": "/list",
        "AIRLINESAPI":"/list",

      
    },
};


module.exports = ENDPOINTS;