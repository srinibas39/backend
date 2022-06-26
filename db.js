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

const userScheme = {
    user: {
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
}
// model
const userModel = mongoose.model("userModel", userScheme);

// IIFE function 
(async () => {
    try {

        const user = {
            name: "sriyasri",
            email: "sriyasri191@gmail.com",
            password: "12345678",
            confirmPassword: "12345678"
        }
        const data = await userModel.create(user);
        console.log("data uploadted");
    }
    catch (err) {
        console.log(err);
    }

})()