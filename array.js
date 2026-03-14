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

let marks = [97,78,67,99,67,89];

console.log(marks);
console.log(typeof marks);
console.log(marks.length);        // length property


console.log(marks[0]);          // accessing elements

let heros = ["ironman","spiderman","thor","hulk"];
console.log(heros);
console.log(heros.length);

marks[0] = 100;// updating elements                
console.log(marks);

for(let idex=0; idex < heros.length; idex++){
    console.log(heros[idex]);            // through for loop
}

// for of loop

for(let hero of heros){
    console.log(hero);
}

let cities = ["pune","mumbai","banglore","chennai"];

for(let city of cities){
    console.log(city.toUpperCase());
}

let marks = [85,97, 44, 37, 76, 60];

let sum = 0;

for(let val of marks){
     sum += val;
}
console.log(`sum of marks = ${sum}`);
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

let items = [250,645,300,900,50];

let i = 0;
for(let val of items){
    // console.log(`value of index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}

 for(let i =0 ; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
    // console.log(`value after offer = ${items[i]}`);
 }

 console.log(items);

// Array Method
let veggies = ["onion","tomato","potato","cabbage"];
console.log(veggies);

veggies.push("chips", "burger","panner");   // adds elements at the end
console.log(veggies);

veggies.pop();           // removes last element
console.log(veggies);

let deletedveggies = veggies.pop();  // removes last element and returns it
console.log(veggies);
console.log("Deleted", deletedveggies);

console.log(veggies.toString());  // converts array to string

let marks = [23,45,67,89,12];
console.log(marks.toString());


let marvelHeroes = ["thor", "ironman", "captain america"];
let dcHeroes = ["superman", "batman", ];

let heroes = marvelHeroes.concat(dcHeroes);  // merges two arrays
console.log(heroes);


let val = marvelHeroes.shift();  // removes first element and returns it
console.log(marvelHeroes);
console.log("deleted", val);

console.log(marvelHeroes.slice(1,2));  // returns elements from start index1 to end index-1


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.splice(2, 2, 101, 102); // at index 2, removes 2 elements and adds 101, 102
//Add Element
// arr.splice(2, 0, 101);

//Delete Element
// arr.splice(3, 1);


//Replace Element
arr.splice(3, 1, 103);


let company = ["Bloomberg", "Microsoft", "uber", "google", "IBM","Netflix"]

company.splice(2, 1, "Ola");
company.pop();
company.push("AMZON");
company.shift();
