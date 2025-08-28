// 1. Basics (Variables & Data Types)

// Prints text to the console.
console.log("Hello, World!");

// 'let' is used to declare variables that can change.
let UserName  = "venugopal";
console.log(UserName);
// 'const' is used for constants (values that don't change).
const Pi = 3.14;
console.log(Pi);

// 'var' is old way of declaring variables (not recommended now).
var age = 25;
console.log(age);

// Multiple variables in one line.

let x =10 , y = 20;
console.log(x + y);

// Shorthand for a = a + 5.

let a = 10 ;
 a+= 10;
 console.log(a);

// 'typeof' tells the type of a value.

console.log(typeof 'js');// string
console.log(typeof 100);// number
console.log(typeof true);// boolean
console.log(typeof []);// object
console.log(typeof {});// object
console.log(typeof null);// object
console.log(typeof undefined);// undefined


// 2. Strings

// length gives number of characters.
let str = "javascript";
console.log(str.length);

// Changing case.

console.log(str.toUpperCase());// JAVASCRIPT
console.log(str.toLowerCase());// javascript

// Checking presence, start, end.
console.log(str.includes("script"));// true
console.log(str.startsWith('java'));// true
console.log(str.endsWith('js'));// false

// String concatenation.
console.log("learn"+"js");// learnjs

// Template literal (easy concatenation).
console.log(`my name is ${str}`)

// Accessing characters and substring.
console.log(str.charAt(2)) // v
console.log(str.slice(0,4)) // java

// Numbers & Math


// Division and remainder.
console.log(10/2);// 5
console.log(10%3)//1


// Floor (down), Ceil (up), Round (nearest).

console.log(Math.floor(4.7))//4
console.log(Math.ceil(4.2))//5
console.log(Math.round(4.5))//5


// Random number between 0 and 1.

console.log(Math.random())//0.123456789

// Highest & lowest values.

console.log(Math.max(3,7,2))//7
console.log(Math.min(3,7,2))//2


// Power and number to string.


console.log(Math.pow(2,6))//64
console.log((10).toString())//"10"

//4. Arrays

// Arrays store multiple values.
let arr = [10,20,30,40];
console.log(arr.length)//4

arr.push(50);console.log(arr)// add at end
arr.pop();console.log(arr)// remove from end
arr.shift();console.log(arr)// remove from start    
arr.unshift(5);console.log(arr)// add at start

// Searching values in array.
 console.log(arr.includes(20))// true
 console.log(arr.indexOf(30))// 2
 console.log(arr.lastIndexOf(40))// 3

 // Combining, joining, reversing arrays.

 console.log([1,2,3].concat([4,5]))// [1,2,3,4,5]
 console.log([1,2,3].join('-'))// "1-2-3"
 console.log([1,2,3].reverse())// [3,2,1]

 //5. Array Methods

 // map → transform, filter → condition.
 console.log([1,2,3].map(x=>x * 2))// [2,4,6]
 console.log([1,2,3].filter(x => x > 1))// [2,3]

 // reduce → sum all values.
 console.log([1,2,3].reduce((a,b)=>a+b,0)); // 6
 // find, some, every → search conditions.
 console.log([1,2,3].find(x => x > 1))// 2
 console.log([1,2,3].some(x => x > 2))// true
 console.log([1,2,3].every(x => x > 0))// true
 // sort, includes, slice (copy), splice (cut).
 console.log([3,1,2].sort())// [1,2,3]
 console.log([1,2,3].includes(2))// true
 console.log([1,2,3].slice(1,2))// [2]
 console.log([1,2,3].splice(1,1))// [2]

// 6. Objects


// Objects store key-value pairs.


let person = {
    name : "jayasurya",
    age : 31
};

// Access properties.

console.log(person.name);// jayasurya
console.log(person["age"]);// 31

// Add, delete, list keys/values.

console.log(person.city="narasingolu");// narasingolu
console.log(delete person.age);// true
console.log(Object.keys(person));// ["name","city"]
console.log(Object.values(person));// ["jayasurya","narasingolu"]
console.log(Object.entries(person));// [["name","jayasurya"],["city","narasingolu"]]

// in operator, spread operator.


console.log("name" in person);// true
let p2 = {...person, state : "AP"}
console.log(p2);// {name: "jayasurya", city: "narasingolu", state: "AP"}