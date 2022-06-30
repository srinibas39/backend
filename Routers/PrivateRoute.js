const jwt = require('jsonwebtoken');
const SECRET_KEY = "davdsjkbvjsobuoo2uwejfwoehf";

const privateRoute = (req, res, next) => {
    if (req.cookies.token) {
        const isVerified = jwt.verify(req.cookies.token, SECRET_KEY);
        if (isVerified) {
            next();
        }
    }
    else {
        res.send({
            message: "please log in"
        })
    }
}

module.exports = privateRoute;