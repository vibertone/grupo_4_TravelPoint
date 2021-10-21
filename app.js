const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname,'./public');
app.use(express.static(publicPath));


app.listen(5000, ()=> {console.log("Levantando un servidor con Express")});

app.get("/", (req, res) => {
    let index = path.resolve(__dirname, "views/index.html");
    res.sendFile(index)
});

app.get("/register", (req, res) => {
    let register = path.resolve(__dirname, "views/register.html");
    res.sendFile(register)
})

app.get("/login", (req, res) => {
    let login = path.resolve(__dirname, "views/login.html");
    res.sendFile(login)
})

app.get("/productCart", (req, res) => {
    let productCart = path.resolve(__dirname, "views/productCart.html");
    res.sendFile(productCart)
})

app.get("/productDetail", (req, res) => {
    let productDetail = path.resolve(__dirname, "views/productDetail.html");
    res.sendFile(productDetail)
})
