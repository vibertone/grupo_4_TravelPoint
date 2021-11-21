const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors")
const controllers = require("./controllers/index_ctrl");
const methodOverride = require("method-override");

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRoutes = require("./routes/index");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register")
const productDetailRoutes = require("./routes/productDetail");
const productCartRoutes = require("./routes/productCart");
const flightDetail = require("./routes/flightDetail");
const productListRoutes = require("./routes/productList");
const usersListRoutes = require("./routes/usersList");
const myAccountRoutes = require("./routes/myAccount")

app.use(cors());
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
app.use(('/productList'), productListRoutes);
app.use(('/usersList'), usersListRoutes);
app.use(('/myaccount'), myAccountRoutes);

app.use((req, res, next) => {
    res.status(404).render('not-found')
});