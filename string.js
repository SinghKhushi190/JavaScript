console.log("This is a strings tutorial");

let a = "Khushi";
console.log(a[0]); // Accessing the first character of the string
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[6]); // Undefined, as there is no sixth character

console.log(a.length); // Length of the string

let real_name = "Khushi";
let friend = "Kasish";
console.log(real_name + " is a friend of " + friend); // Concatenation of strings
console.log(`${real_name} is a friend of ${friend}`); // Template literals for string interpolation

let b = "Abhinav";
console.log(b.toUpperCase()); // Convert to uppercase
console.log(b.toLowerCase()); // Convert to lowercase
console.log(b.length);
console.log(b.slice(1, 5));
console.log(b.slice(1)); // Slice from index 1 to the end

console.log(b.replace("shav", "77"));
console.log(b.concat(a, "Abhi", "Rahul", "Priya")); // Concatenate multiple strings

console.log(b)

