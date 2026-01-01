// PROMISES

console.log('Welcome to Promises');

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I am inside Promise");
        resolve(true);
    }, 2000);
});

prom1.then((a) => {
    console.log(a);
})