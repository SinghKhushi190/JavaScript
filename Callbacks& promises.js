console.log("hello wolrd");
console.log("Khushi is HAcker")
console.log("I am learning JS")

setTimeout(() => {
    console.log("I am inside setTimeout")
}, 2000);

console.log("The End")

const fn = (arg, fn) => {
  console.log("Nothing")
}

const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Khushi");
    document.head.append(sc)
}

loadScript("http://google.com", callback)
    
function getData(dataID , getNextData){
    setTimeout(() => {
        console.log("data" , dataId);
        if(getNextData){
            getNextData();
        }
    }
               getData(1 , () => {
        getData(2)l;
    });

