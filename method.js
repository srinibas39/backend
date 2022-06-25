
const express = require("express");

const app = express();
app.listen(3000);
app.use(express.json())

let users = {};
// get
app.get("/users", (req, res) => {
    res.send(users);
})

app.post("/users", (req, res) => {
    users={...req.body};
    res.send(users);
})

// update

app.patch("/users", (req, res) => {
    const newUsers = { ...req.body, name: "lion" };
    res.send(newUsers)
})

// delete
app.delete("/users", (req, res) => {
    users = {};
    res.send(users);
})

