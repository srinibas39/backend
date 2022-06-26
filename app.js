
const express = require("express");
const app = express();

app.listen(3000);


app.get('/', (req, res) => {
    res.sendFile("./pages/index.html", { root: __dirname })
});

app.get('/amazon', (req, res) => {
    res.sendFile("./pages/Amazon.html", { root: __dirname });
});

app.get('/flipkart', (req, res) => {
    res.sendFile("./pages/Flipkart.html", { root: __dirname });
})


// Redirect

app.get("/amazonaa", (req, res) => {
    res.redirect("/amazon")
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile("./pages/404.html", { root: __dirname })
})



