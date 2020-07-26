const _http = require("http");

const server = _http.createServer((req, res) => {
    console.log(`Path: ${req.url} \nMethod: ${req.method}`);
});

server.listen("4000", "localhost", () => {
    console.log("listening for requests on port 4000");
});