const userModel = require("../Models/model");


const getAllUser = async (req, res) => {
    try {
        const user = await userModel.find();
        res.send(user);
    }
    catch (err) {
        res.send(err.message)
    }
}

const getUser = async (req, res) => {
    const id = req.params;
    try {
        const user = await userModel.findById(id);
        res.send(user)
    }
    catch (err) {
        res.send(err.message)
    }

}

const updateUser = async (req, res) => {
    const id = req.params;
    const data = req.body;
    try {
        if (data) {
            const user = await userModel.findByIdAndUpdate(id, data);
            res.send({
                message: "data updated successfully"
            })
        }
        else {
            res.send({
                message: "please send the data to be updated"
            })
        }
    }
    catch (err) {
        res.send(err.message);
    }
}

const deleteUser = async (req, res) => {
    const id = req.params;
    try {
        const user = await userModel.findByIdAndDelete(id);
        res.send({
            message: "user deleted successfully "
        })
    }
    catch (err) {
        res.send(err.message)
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email: email });
        if (user) {
            const resetToken = user.createResetToken();
            const resetPasswordLink = `${req.protocol}://${req.get("host")}/${resetToken}`;
            // send email to user using nodemailer
        }
        else {
            res.send({
                message: "user does not exist"
            })
        }

    }
    catch (err) {
        res.send(err.message)
    }
}

const resetPassword = async (req, res) => {
    try {
        const token = user.params.token;
        const { password, confirmPassword } = req.body;
        const user = await userModel.findOne({ resetToken: token });
        if (user) {
            user.resetPasswordHandler(password, confirmPassword);
            await user.save();
        }
        else {
            res.send({
                message: "user not found"
            })
        }

    }
    catch (err) {
        res.send(err.message)
    }
}

const logout = async (req, res) => {
    try {
        res.cookie("token", "");
        res.send({
            message: "logout successfully"
        })
    }
    catch (err) {
        res.send(err.message)
    }
}

module.exports = { getUser, getAllUser, updateUser, deleteUser, forgotPassword, resetPassword, logout }