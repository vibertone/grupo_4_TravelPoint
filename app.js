const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors")
const methodOverride = require("method-override");
const session = require('express-session')
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')

// middlewares
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({secret: "Secreto", resave: false, saveUninitialized: false}));
app.use(cookies());
app.use(cors());
app.use(express.static('./public'));
app.use(userLoggedMiddleware);


// rutas
const indexRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const adminRoutes = require("./routes/admin");

app.listen(5000, () => {
    console.log("Levantando un servidor con Express pto 5000")
});


//template engine
app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, "views"));

// rutas generales
app.use('/', indexRoutes);
app.use('/user', usersRoutes);
app.use('/products', productsRoutes);
app.use('/admin', adminRoutes);

//error 404 
app.use((req, res, next) => {
    res.status(404).render('not-found')
});