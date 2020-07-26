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

    > Directories
        - fs.mkdir(folderPath, callbackFunction)
        - fs.rmdir(folderPath, callbackFunction)