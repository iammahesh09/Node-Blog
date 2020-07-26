let title = "NodeJs";
console.log(`Welcome to ${title}`);


// Global Object
console.log(global);

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
})