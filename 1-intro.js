//intro to node js
// We can run javascript in terminal using node js 

console.log(__filename);
let interval = setInterval(() => {
    console.log('hello world');
}, 1000)

setTimeout(() =>{
    clearInterval(interval)
}, 5000)