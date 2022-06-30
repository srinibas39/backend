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

module.exports = { getUser, getAllUser, updateUser, deleteUser }