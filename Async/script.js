async function getdata() {
  return new Promise ((resolve, reject)=>{

  
  setTimeout(() => {
    resolve(455)
  }, 3500);
   })
}
async function getdata() {
  simulates getting data from a server
let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
let data = await x.json()
console.log(data)
console.log(x)
return data


let x = await fetch('https://jsonplaceholder.typicode.com/todos/1',{
method: 'POST',
bosy:JSON.stringify({
  title:'foo',
  body:'bar',
  userId:1,

}),

headers: {
  'content-type': 'application/json; charset = UTF- 8'
},

})
let data = await x.json()
return data
}
// settle means resolve or rejects.
// resolve means promise has settles sucessfully.
// rejects means promise has not settled successfully.
async function main(){
console.log("Loading modules")

console.log("Do Something else")

console.log("Load data")

let data = await getdata()

 console.log(data)

  console.log("Process data")

  console.log("task 2")

}

main()


data.then((value) => {
  console.log(data)

  console.log("Process data")

  console.log("task 2")

})

// Sync code
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function higherOrderFunction(callback){
    const name = 'Vishwas'
    callback(name)
}
higherOrderFunction(greet)













