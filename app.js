let title = "NodeJs";
console.log(`Welcome to ${title}`);


// Global Object
console.log(global);

// Asynchronous
setTimeout(() => {
    console.log(`this is setTimeout function`);
    clearInterval(setInter);
}, 3000);

const setInter = setInterval(() => {
    console.log(`this is setInterval function`)
}, 1000);