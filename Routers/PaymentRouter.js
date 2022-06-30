const express = require("express");
const createSession = require("../Controller/paymentController");
const privateRoute = require("./PrivateRoute");
const path = require("path")


const paymentRouter = express.Router();

paymentRouter
    .route("/")
    .get((req, res) => {
        res.sendFile("./payment.html", { root: __dirname })
    })

paymentRouter
    .route("/:id")
    .post(privateRoute, createSession)


module.exports = paymentRouter    