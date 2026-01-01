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
