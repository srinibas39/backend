
const express = require("express");

const app = express();
app.listen(3000);
app.use(express.json())

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
app.get("/users", (req, res) => {
    res.send(users);
})

// post
app.post("/users", (req, res) => {
    users = { ...req.body };
    res.send(users);
})

// update

app.patch("/users", (req, res) => {
    const newUsers = { ...req.body, name: "lion" };
    res.send(newUsers)
})

// delete
app.delete("/users/:id", (req, res) => {
    users = {};
    res.send(users);
})


// parameter

app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.filter((el) => el.id === id)
    res.send({ ...user })
})

// Query

// app.get("/users", (req, res) => {
//     console.log(req.query)
// })
