
const express = require("express");
const bcrypt = require('bcryptjs');


const app = express();
app.listen(3000);
app.use(express.json());

// DATABASE
// --------
const mongoose = require("mongoose");

// IzroW91caV9P0P5g
const db_link = "mongodb+srv://admin:AV7ocFpDfNjAFltq@cluster0.wydsr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db_link)
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log(err);
    })


// Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 8
    },
    confirmPassword: {
        type: String,
        require: true,
        min: 8
    }
})

// Hooks in mongoose


userSchema.pre('save', function () {
    console.log("before saving in the database")
});
userSchema.pre('save', async function () {

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    this.confirmPassword = hashedPassword;

});

userSchema.post('save', () => console.log("after saving in the database"));

// model
const userModel = mongoose.model("userModel", userSchema);





// ----------------------------------------------------------------



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

const middleware1 = (req, res, next) => {
    console.log("middleware1 encountered");
    next();
}

const middleware2 = (req, res) => {
    console.log("middleware2 encounteres");
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

// Mounting
const userRouter = express.Router();
const authRouter = express.Router();

app.use("/users", userRouter)
app.use("/auth", authRouter)

userRouter
    .route("/")
    .get(middleware1, getUser, middleware2)
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
    .patch(updateSignup)
    .delete(deleteSignup)





