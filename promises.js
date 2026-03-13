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

function getData(dataId , getNextData){
    return new promise((resolve , reject) => {
        setTimeout(() => {
            console.log("data" , dataId)
            // resolve("success")
            reject("error")
            if(getNextData){
                getNextData();
            }
        }, 2000);
    });
}

function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async function1 executed');
            resolve('Async function completed');
        }, 2000);
    });
}
// use .then and .catch
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async function1 executed');
            resolve('Async function completed');
        }, 2000);
    });
}
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async function2 executed');
            resolve('Async function completed');
        }, 2000);
    });
}

console.log("fetching data1...");
asyncFunction1().then(res=> {
    console.log("fetching data2...");
     asyncFunction2().then(res=> { })
})
