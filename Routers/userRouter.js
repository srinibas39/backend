const express = require("express");
const { getUser, getAllUser, updateUser, deleteUser } = require("../Controller/UserController");

const userRouter = express.Router();

// Router
userRouter
    .route("/")
    .get(getAllUser)

userRouter
    .route("/:_id")
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = userRouter;    