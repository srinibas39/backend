
const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("request made by client to server");
    // console.log(req.method);
    // console.log(req.url);

    res.setHeader('content-type', 'text/html');
    // res.write(`<h1>Hello computer</h1>`);
    let path="./pages"
    switch (req.url) {
        case "/":
            path += "/index.html";
            res.statusCode=200;
            break;
        case '/flipkart':
            path += '/Flipkart.html';
            res.statusCode=200
            break;
        case `/amazon`:
            path += "/Amazon.html";
            res.statusCode=200
            break;
        case "/amazonaa":
            res.statusCode=301;
            res.setHeader("location","/amazon");
            res.end();
            break;
        default:
            path += "/404.html"
            res.statusCode=400;
            break;
    }

    
    fs.readFile(path, (error, fileData) => {
        if (error) {
            console.log(error);
        }
        else {
            res.end(fileData);
        }
    })
    
})


server.listen(3000, `localhost`, () => {
    console.log("server is listening on port 3000");
})