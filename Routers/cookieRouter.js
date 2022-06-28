const express = require("express");
const cookiesRouter = express.Router();

const setCookies = (req, res) => {
    // res.setHeader('Set-Cookie',"isLoggedIn=true");
    res.cookie("isLoggedIn", false, { maxAge: 1000 * 60 * 60, secure: true, httpOnly: true })
    res.send("cookie has been sent");

}

const getCookies = (req, res) => {
    const cookies = req.cookies.isLoggedIn;
    res.send(cookies);
}


cookiesRouter
    .route("/getCookies")
    .get(getCookies)

cookiesRouter
    .route("/setCookies")
    .get(setCookies)

module.exports = cookiesRouter;    