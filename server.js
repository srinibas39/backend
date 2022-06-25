
const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("request made by client to server");
    // console.log(req.method);
    // console.log(req.url);

    res.setHeader('content-type', 'text/html');
    // res.write(`<h1>Hello computer</h1>`);
   
    switch (req.url) {
        case "/":
            path = "./pages/index.html";
        case '/flipkart':
            path = './pages/Flipkart.html'
        case `/amazon`:
            path = "./pages/Amazon.html"
        default:
            path = "./pages/404.html"
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