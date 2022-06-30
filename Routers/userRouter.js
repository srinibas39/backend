const express = require("express");
const { getUser, getAllUser, updateUser, deleteUser } = require("../Controller/UserController");
const privateRoute = require("./PrivateRoute");


const userRouter = express.Router();

// Router
userRouter
    .route("/")
    .get(getAllUser)

userRouter
    .route("/:_id")
    .get(privateRoute, getUser)
    .patch(privateRoute, updateUser)
    .delete(privateRoute, deleteUser)

userRouter
    .route("/forgotPassword")
    .post(forgotPassword)

userRouter
    .route("/ResetPassword")
    .post(resetPassword)

module.exports = userRouter;    