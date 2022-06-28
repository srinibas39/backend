const express = require("express");

const userRouter = express.Router();

// functions
let users = [
    {
        id: "1",
        name: "ram"
    },
    {
        id: "2",
        name: "sam"
    },
    {
        id: "3",
        name: "bam"
    }
];
// get
const getUser = (req, res, next) => {

    res.send(users);
    console.log("get user encountered");
    next();

}

// post
const postUser = (req, res) => {

    users = { ...req.body };
    res.send(users);

}
// update
const updateUser = (req, res) => {

    const newUsers = { ...req.body, name: "lion" };
    res.send(newUsers)

}
// delete
const deleteUser = (req, res) => {

    users = {};
    res.send(users);

}
// parameter
const getUserById = (req, res) => {

    const id = req.params.id
    const user = users.filter((el) => el.id === id)
    res.send({ ...user })

}
// Query

// app.get("/users", (req, res) => {
//     console.log(req.query)
// })

const middleware1 = (req, res, next) => {
    console.log("middleware1 encountered");
    next();
}

const middleware2 = (req, res) => {
    console.log("middleware2 encounteres");
}



// Router


userRouter
    .route("/")
    .get(middleware1, getUser, middleware2)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

userRouter
    .route("/:id")
    .get(getUserById)

module.exports=userRouter;    