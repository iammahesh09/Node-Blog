# Blog API
 nodejs blog api

## Global Object
    > NodeJs - 'global' is a global object
    > Javascript - 'window' is a global object

## File system
    const fs = require('fs');
    > Read File
        - fs.readFile(filePath, callbackFunction);

    > Write File 
        - fs.writeFile(filePath, write_content, callbackFunction)

    > Delete File
        - fs.unlink(filePath, callbackFunction)

    > Directories
        - fs.mkdir(folderPath, callbackFunction)
        - fs.rmdir(folderPath, callbackFunction)

    > Stream
        const readStream = fs.createReadStream('./docs/hello.txt', { encoding: "utf8" });
        const writeStream = fs.createWriteStream('./docs/blog.txt');

        readStream.on('data', (chunk) => {
            console.log("------ New Chunk ------");
            console.log(chunk);
            writeStream.write("\n-----New Chunk-----\n");
            writeStream.write(chunk);
        });

        //Piping
        readStream.pipe(writeStream)

## Http
    > const _http = require('http');

        const server = _http.createServer(requestListener);

        server.listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void)

    > Http request
        const server = _http.createServer((req, res) => {
            console.log(`
                Path: ${req.url},
                Method: ${req.method}`
            );
        });

    > Http response
        const server = _http.createServer((req, res) => {
            res.setHeader('Content-Type', 'text/plain');
            res.write('Hello! NodeJs Blog');
            res.end();
        });
