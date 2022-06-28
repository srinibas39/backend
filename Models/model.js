// DATABASE
// --------
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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

// Model
const userModel = mongoose.model("userModel", userSchema);


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

module.exports=userModel