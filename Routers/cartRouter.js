
const express = require("express");

const {getCart}=require("../Controller/CartController")

const cartRouter = express.Router();

const privateRoute = require("./PrivateRoute")


cartRouter
    .route("/")
    .get(privateRoute, getCart)

module.exports = cartRouter;    
