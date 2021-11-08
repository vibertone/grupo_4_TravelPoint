const express = require("express");
const app = express();
const path = require("path");
const controllers = require("./controllers/index_ctrl");

const indexRoutes = require("./routes/index");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register")
const productDetailRoutes = require("./routes/productDetail");
const productCartRoutes = require("./routes/productCart");
const flightDetail = require("./routes/flightDetail");

app.use(express.static('./public'));
app.listen(5000, () => {
    console.log("Levantando un servidor con Express pto 5000")
});

app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, "views"));

app.use(('/', indexRoutes));
app.use(('/login'), loginRoutes);
app.use(('/register'), registerRoutes);
app.use(('/productDetail'), productDetailRoutes);
app.use(('/productCart'), productCartRoutes);
app.use(('/flightDetail'), flightDetail);