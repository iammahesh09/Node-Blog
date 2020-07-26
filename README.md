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

        > Response returning html pages

            res.setHeader('Content-Type', 'text/html');

            _fs.readFile('./views/index.html', (error, data) => {
                if (error) {
                    console.log(error);
                    res.end();
                } else {
                    res.write(data);
                    res.end();
                }
            });

    > Http status codes
        1. Informational responses (100–199),
            **100** Continue
            **101** Switching Protocol
            **102** Processing (WebDAV)
            **103** Early Hints

        2. Successful responses (200–299),
            **200** OK - The request has succeeded. 
            **201** Created - The request has succeeded and a new resource has been created as a result. 
            **202** Accepted - The request has been received but not yet acted upon.
            **203** Non-Authoritative Information
            **204** No Content - There is no content to send for this request, but the headers may be useful. 
            **205** Reset Content - Tells the user-agent to reset the document which sent this request.
            **206** Partial Content

        3. Redirects (300–399),
            **300** Multiple Choice - The request has more than one possible response.
            **301** Moved Permanently - The URL of the requested resource has been changed permanently.
            **302** Found - This response code means that the URI of requested resource has been changed temporarily.
            **303** See Other - The server sent this response to direct the client to get the requested resource at another URI with a GET request.
            **304** Not Modified

        4. Client errors (400–499),
            **400** Bad Request - The server could not understand the request due to invalid syntax.
            **401** Unauthorized - Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". 
            **402** Payment Required - This response code is reserved for future use.
            **403** Forbidden - The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.
            **404** Not Found - The server can not find the requested resource. 
            **405** Method Not Allowed - The request method is known by the server but has been disabled and cannot be used. 
            **406** Not Acceptable - This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
            **407** Proxy Authentication Required - This is similar to 401 but authentication is needed to be done by a proxy.
            **408** Request Timeout

        5. Server errors (500–599).
            **500** Internal Server Error - The server has encountered a situation it doesn't know how to handle.
            **501** Not Implemented - The request method is not supported by the server and cannot be handled.
            **502** Bad Gateway - This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
            **503** Service Unavailable - The server is not ready to handle the request.
            **504** Gateway Timeout - This error response is given when the server is acting as a gateway and cannot get a response in time.
            **505** HTTP Version Not Supported

        
## Routing
    > basic routing
