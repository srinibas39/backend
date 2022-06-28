const express = require("express");

const authRouter = express.Router();
const userModel = require("../Models/model");
var jwt = require('jsonwebtoken');
const SECRET_KEY = "davdsjkbvjsobuoo2uwejfwoehf";

const postSignup = async (req, res) => {

    const user = {
        username: "srinibas",
        email: "srinibas@gmail.com",
        password: "12345678",
        confirmPassword: "12345678"
    }
    const userData = await userModel.create(user);
    res.json(userData);
}

const getSignup = async (req, res) => {
    // res.sendFile("./pages/signupForm.html", { root: __dirname });
    // const data = await userModel.find();
    const data = await userModel.findOne({ username: "srinibas" })
    res.send(data);

}


const updateSignup = async (req, res) => {
    const updateUser = req.body;
    const data = await userModel.findOneAndUpdate({ username: "srinibas" }, updateUser);
    res.send(data);
}

const deleteSignup = async (req, res) => {
    const deletedUser = await userModel.findOneAndDelete({ username: "srinibas" });
    res.send({
        mesage: "deleted succesfully"
    })
}

const getLogin = async (req, res) => {

    const data = req.body;
    const user = await userModel.findOne({ email: data.email });

    if (user) {
        if (user.password === data.password) {

            const uId = user._id;
            const token = jwt.sign({ payload: uId }, SECRET_KEY);
            res.cookie("token", token);

            res.send({
                message: "loggedin successfully",
            })
        }
        else {
            res.send({
                message: "incorrect password"
            })
        }
    }
    else {
        res.send({
            message: "user not found"
        })
    }
}

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