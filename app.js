const _http = require("http");
const _fs = require('fs');

const server = _http.createServer((req, res) => {

    console.log(`Path: ${req.url} \nMethod: ${req.method}`);

    res.setHeader('Content-Type', 'text/html');

    _fs.readFile('./views/index.html', (error, data) => {
        error ? console.log(error) : res.write(data);
        res.end();
    });

});

server.listen("4000", "localhost", () => {
    console.log("listening for requests on port 4000");
});