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

//7. Conditionals

// if condition.

let num = 10;
if(num > 5){
    console.log("Greater than 5");
}

// if-else.

if(num > 15){
    console.log("big")
}else{
    console.log("small")
}


// Ternary operator (short if-else).

let result = num > 5 ? "yes": "no"
console.log(result);//yes

// switch statement.

switch(num){
    case 10 : console.log("ten"); break; // 10
    default : console.log("others"); // 0
}

// Boolean conversion.

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

// 8. Loops

// For loop.

for(let i = 0 ; i < 5 ; i++){
    console.log(i); // 0 1 2 3 4
}

// While loop.

let  i = 0;
 while(i < 3){
    console.log(i); // 0 1 2
    i++;
 }


 // Do-while loop (runs at least once).
  let j = 0 ;
  do{
    console.log(j);// 0
    j++
  }while(j < 3);// 0 1 2

  // for-of loop → values.
  for(let x of [1,2,3]){
    console.log(x);// 1 2 3
  }

  // for-in loop → keys.
  for(let key in  {a:1,b:2}){
    console.log(key);// a b
  }

  // 9. Functions

  // Normal function.

  function add(a,b){
    return a+ b;
  }
  console.log(add(2,3));// 5

  // Arrow function.

  let sub = (a,b)=>{
    return a - b;
  }
  console.log(sub(5,2));// 3

  // Default parameter.

  function greet(name = "guest"){
    console.log("hi",name);// hi venu
  }
  greet("venu")

  // Short arrow function.

  let square = x => x * x;
  console.log(square(4));// 16

  // IIFE = Immediately Invoked Function Expression.
  (function(){
    console.log("IIFE executed");
  })();

  //ES6 Features

  // Array destructuring.

  let [x1,y1]  = [10,20];
  console.log(x1,y1);// 10 20

  // Object destructuring.

  let {name:n , city:c} = {name:"venugopal",city:"hyderabad"};
  console.log(n,c);// venugopal hyderabad

  // Rest operator (...).

  function sum(...numbers){
    return numbers.reduce((a,b)=>a+b,0);
  }
  console.log(sum(1,2,3,4));// 10


  // Spread operator.
  let arr1 = [1,2,3];
  let arr2 = [4,5];
  console.log(...arr1,...arr2);//[1,2,3,4,5]

  // Spread for objects.

  let person2 = {
    name:"venu",
  }
  console.log({...person2,age:30});// {name: "venu", age: 30}   

  // Current date & time.
  let d  = new Date();
  console.log(d);// current date & time

  // Year, Month, Date, Day.
  console.log(d.getFullYear());// 2023
  console.log(d.getMonth() + 1);// 10
  console.log(d.getDate());// 5
  console.log(d.getDay());// 4


  // Time & ISO format.
  console.log(d.getHours());// 14
  console.log(d.getMinutes());// 30
  console.log(d.getSeconds());// 0
  console.log(d.toISOString());// 2023-10-05T14:30:00.000Z
// Current timestamp.
console.log(Date.now());//1696516200000 (milliseconds since 1970-01-01)

// Custom date.
console.log(new Date("2025-01-01"))// Mon Jan 01 2025 00:00:00 GMT+0000 (Coordinated Universal Time)

//12. Promises & Async

let promise = new Promise(res => res("done"));
promise.then(console.log);// done

// Async function returns Promise.

async function f(){
    return 'hello!';
}
f().then(console.log);// hello!

// await waits for Promise.

async function g(){
    let  data  =  await Promise.resolve(100);
    console.log(data)//100
}
g();//100

// Run after 1 second.

setTimeout(()=>{
    console.log('after 1s')
}, 1000)// after 1s

// Repeat every second.
setInterval(()=>{
    console.log('tick')
}, 1000)// tick

//13. Miscellaneous
// Spread into array of characters.

console.log([..."hello"]);// ["h", "e", "l", "l", "o"]

// Set removes duplicates.
console.log(new Set([1,1,2,2,3,3]));// Set(3) {1, 2, 3}


// Map for key-value pairs.
console.log(new Map([['a',1],['b',2],['c',3]]));// Map(3) {"a" => 1, "b" => 2, "c" => 3}

// Convert object to JSON string.

console.log(JSON.stringify({a:1,b:2}));// "{"a":1,"b":2}"

// Convert JSON string to object.
console.log(JSON.parse('{"a":1,"b":2}'));// {a: 1, b: 2}

console.log('end of notes.js')