let arr = [1, 2, 3, 4, 5];

// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((element) => element ** 2);

console.log(newArr)