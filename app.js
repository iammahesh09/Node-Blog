let title = "NodeJs";
console.log(`Welcome to ${title}`);


// Global Object
// console.log(global);

// Asynchronous
// setTimeout(() => {
//     console.log(`this is setTimeout function`);
//     clearInterval(setInter);
// }, 3000);

// const setInter = setInterval(() => {
//     console.log(`this is setInterval function`)
// }, 1000);


// File System
const fs = require('fs');

// Read File
fs.readFile('./hello.txt', (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 4e 6f 64 65 4a 73>
    console.log(data.toString()); // Hello World NodeJs
});

// Write File
fs.writeFile('./hello.txt', 'Hello! I am Mahesh', () => {
    console.log("file was written");
});
fs.writeFile('./demo.txt', 'Hello! Nodejs', () => {
    console.log("file was written");
});

// Create Directory
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }
        console.log("Assets folder is created");
    });
} else{
    console.log("Assets folder already exists");
}

// Remove Directory
if (fs.existsSync('./assets')) {
    fs.rmdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }
        console.log("Assets folder is deleted");
    });
} else{
    console.log("Assets folder already deleted");
}