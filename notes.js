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

