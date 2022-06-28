
const express = require("express");

const cartRouter = express.Router();

const privateRoute = require("./PrivateRoute")

const getCart = (req, res) => {
    res.send({
        mesage: "cart page"
    })
}



cartRouter
    .route("/")
    .get(privateRoute, getCart)

module.exports = cartRouter;    
