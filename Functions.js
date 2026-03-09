function nice(name) {
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are  also nice!")
    console.log("Hey" + name + "you are good!")
    console.log("Hey" + name + "you are  not nice!")
    console.log("Hey" + name + "your course id too good!")
}

function Sum(a, b, c = 45) {
    // console.log(a+b)
    return a + b + c
}
result1 = Sum(3, 5)
result2 = Sum(35, 5)
result3 = Sum(36, 5)


console.log("The sum of these numbers is:", result1)

console.log("The sum of these numbers is:", result2)

console.log("The sum of these numbers is:", result3)

// Arrow Function
const func1 = (x)=>{
    console.log("I am an arrow Function",x)
}

func1(24);
func1(54);
func1(25);
// Another Example:
function getMilk(){
    console.log("leave house");
    console.log("move right");
    console.log("move up");
    console.log("move Right");
    console.log("buyMilk");
    console.log("move left");
}
getMilk();

// Block Scope
if(true){
    const myName = 'fuck'
    console.log(myName)
}

// function Scope
function testFn(){
    const myName = 'toggle'
    console.log(myName)
}
testFn()

// Global Scope
const myNum = 100;
function testFn(){
        const myName = 'toggle'
    console.log(myName)
}
testFn()

// Nested function's scope
let a = 10
function outer(){
    let b = 20
    function inner(){
        let c = 30
        console.log(a , b , c)
    }
    inner()
}
outer()

// function carrying 
function sum(a, b , c){
    return a+ b+ c   // here we are take three different aragument at a time
}
console.log(sum(2 , 3, 5 ))  // 10

// sum(2 , 3, 5) -> sum(2)(3)(5)

function curry(fn){
   return function(a){
    return function(b){
        return function(c){
            return fn(a ,b , c)
        }
    }
   }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))  // 10

// here we are broken down into three separate function calls

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)  // 10

// "this -> keyword" 
// implicit binding
const person = {
    name : 'fuck-you',
    sayMyName : function(){
        console.log(`your name is ${this.name}`)
    },

}
person.sayMyName()

function sayMyName(){
    console.log(`your name is ${this.name}`)
}
   sayMyName.call(person) // Explicite Binding

function person(name){
    this.name = name
}
const p1 = new person('vishwas')
const p2 = new person('chutiya')   // New Binding


// prototype 
function person(fName , lName){
  this.firstName = fName
  this.lastName = lName
}

const person1 = new person('bruce' , 'wayne')
const person2 = new person('clark' , 'Kent')

person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}
console.log(person1.getFullName())
console.log(person2.getFullName())

// Prototype Inheritance

function person(fName , lName){
    this.firstName = fName
    this.lastName = lName
} 

person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

function SuperHero(){
    person.call(this , fName , lName)
    this.isSuperHero = true
}
SuperHero.prototype.fightCrime  = function(){
    console.log('Fighting crime')
}
SuperHero.prototype = Object.create(person.prototype)

const batman = new SuperHero('Bruce' , 'Wayne')
SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName())  // Bruce Wayne
// Classes
class Person{
    constructor(fName , lName){
        this.firstName = fName
        this.lastName  = lName
    }

    sayMyName(){
        return this.firstName + ' ' + this.lastName
    }
}

const classP1 = new Person('Bruce' , 'Wayne')
console.log(classP1.sayMyName()) // Bruce Wayne
