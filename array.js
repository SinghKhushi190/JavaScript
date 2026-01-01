let arr = [1, 2, 3, 4, 5];
//   Index:0  1  2  3  4

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

console.log(arr.toString()); // Convert array to string

console.log(arr.join(" and ")); // Join array elements with a space

a = [1,2,3,4,5,6];
console.log(a.pop()); // Remove last element and return it

// console.log(a.push('Khushi')); // Add element at the end and return new length

console.log(a.shift()); // Remove first element and return it
console.log(a.unshift('Khushi')); // Add element at the beginning and return new length
console.log(a);
console.log(a[6]); // Accessing out of bounds index returns undefined
console.log(a.length); // Length of the array

let c1 = [1, 2, 3, 4, 5];
let c2 = [6, 7, 8, ];
let c3 =[9, 10, ];
let c = c1.concat(c2,c3); // Concatenate multiple arrays

let numbers = [1,2,3,4,5]

numbers.splice(1,44,444)

console.log(numbers) // Splice modifies the array in place


