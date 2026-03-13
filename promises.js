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
