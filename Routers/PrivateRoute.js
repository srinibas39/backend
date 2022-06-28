
const privateRoute = (req, res, next) => {
    if (req.cookies.isLoggedin) {
        next();
    }
    else {
        res.send({
            message: "please log in"
        })
    }
}

module.exports = privateRoute;