const express = require("express");

const authRouter = express.Router();

const { postSignup, getSignup, updateSignup, deleteSignup, getLogin } = require("../Controller/AuthController")

authRouter
    .route("/signup")
    .post(postSignup)
    .get(getSignup)
    .patch(updateSignup)
    .delete(deleteSignup)

authRouter
    .route("/login")
    .post(getLogin)

module.exports = authRouter;    