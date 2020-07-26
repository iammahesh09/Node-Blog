const _http = require("http");
const _fs = require("fs");

const server = _http.createServer((req, res) => {

    console.log(`Path: ${req.url} \nMethod: ${req.method}`);

    res.setHeader("Content-Type", "text/html");

    let _path = "./views/";

    switch (req.url) {
        case "/":
            _path += 'index.html';
            res.statusCode = 200;
            break;
        case "/about":
            _path += 'about.html';
            res.statusCode = 200;
            break;
        case "/blog":
            _path += 'blog.html';
            res.statusCode = 200;
            break;
        default:
            _path += '404.html';
            res.statusCode = 404;
            break;
    }

    _fs.readFile(_path, (error, data) => {
        error ? console.log(error) : res.write(data);
        res.end();
    });

});

server.listen("4000", "localhost", () => {
    console.log("listening for requests on port 4000");
});