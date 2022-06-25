
const express = require("express");

const app = express();
app.listen(3000);
app.use(express.json())



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
const getUser = (req, res) => {

    res.send(users);

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

// Mounting
const userRouter = express.Router();
app.use("/users", userRouter)

userRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

userRouter
    .route("/:id")
    .get(getUserById)



