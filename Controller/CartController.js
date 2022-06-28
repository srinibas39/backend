const getCart = (req, res) => {
    res.send({
        mesage: "cart page"
    })
}

module.exports = { getCart }