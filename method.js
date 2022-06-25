
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

const postSignup = (req, res) => {
    res.json({
        message: "signed up succesful"
    })
}

const getSignup = (req, res) => {
    res.sendFile("./pages/signupForm.html", { root: __dirname });
}

// Mounting
const userRouter = express.Router();
const authRouter = express.Router();

app.use("/users", userRouter)
app.use("/auth", authRouter)

userRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

userRouter
    .route("/:id")
    .get(getUserById)

authRouter
    .route("/signup")
    .post(postSignup)
    .get(getSignup)



