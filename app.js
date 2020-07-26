const express = require('express');

const _app = express();

_app.listen(4000);

_app.get('/', (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
});

_app.get('/about', (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
});

_app.get('/blog', (req, res) => {
    res.sendFile("./views/blog.html", { root: __dirname });
});

_app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

_app.use((req, res)=>{
    res.status(404).sendFile("./views/404.html", { root: __dirname });
})




// const _http = require("http");
// const _fs = require("fs");

// const server = _http.createServer((req, res) => {

//     console.log(`Path: ${req.url} \nMethod: ${req.method}`);

//     res.setHeader("Content-Type", "text/html");

//     let _path = "./views/";

//     switch (req.url) {
//         case "/":
//             _path += "index.html";
//             res.statusCode = 200;
//             break;
//         case "/about":
//             _path += "about.html";
//             res.statusCode = 200;
//             break;
//         case "/about-me":
//             res.statusCode = 301;
//             res.setHeader("Location", "/about")
//             break;
//         case "/blog":
//             _path += "blog.html";
//             res.statusCode = 200;
//             break;
//         default:
//             _path += "404.html";
//             res.statusCode = 404;
//             break;
//     }

//     _fs.readFile(_path, (error, data) => {
//         error ? console.log(error) : res.write(data);
//         res.end();
//     });

// });

// server.listen("4000", "localhost", () => {
//     console.log("listening for requests on port 4000");
// });

