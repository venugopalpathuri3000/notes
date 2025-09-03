//Q1.For Loop – Print Numbers

for(let i = 0; i<=10;i++){
    console.log(i);
}
//What will this print?
//1 2 3 4 5


//Q2. String Reverse Using Loop

let str = "hello";
let t = '';
for(let i = str.length - 1;i>=0;i--){
    t = t + str[i];
    console.log(t)
}
//What will be the output?
// "olleh"

// Q3. Equality vs Strict Equality

let x= 5;
let y = '5';

console.log(x==y); // true
console.log(x===y); // false

//Q4. Array Push Method

let arr = [1,2,3];
arr.push(4);
console.log(arr); // [1,2,3,4]

//Q5. Array Pop Method
let arr1 = [10,20,30];
arr1.pop();
console.log(arr1); // [10,20]



let num = 7;
if(num %2===0){
    console.log("even");//even  
}else{
    console.log("odd");//odd
}
//0dd

//Q7. String Length Property

let str1 = 'JavaScript';
console.log(str1.length);// 10


//Q8. Array Length After Push

let arr2  = [1,2,3,4];
arr2.push(5);
console.log(arr2.length); // 5

//Q9. Typeof Operator
let a = 42;
console.log(typeof a); // number


//Q10. Undefined Variable
let x1;
console.log(typeof x1); // undefined

//Q11. Array Shift Method

let arr3 = [1,2,3];
arr3.shift();
console.log(arr3); // [2,3]

//Q12. Array Unshift Method
let arr4 = [10, 20];
arr4.unshift(5);
console.log(arr4); // [5,10,20]

//Q13. for...of Loop (Array Iteration)

let nums = [1,2,3];
for(let n of nums){
    console.log(n);// 1 2 3
}

//Q14. for...in Loop (Object Keys)
let obj = {
    a:1,
    b:2
};
for(let key in obj){
    console.log(key +''+ obj[key]);// a 1 b 2
}
//Q15. Template Literals

let name = "venu";
console.log(`hello ${name}`);// hello venu

//Q16. Math Random (Range 0–1)

console.log(Math.random());// 0.234234 (varies) 

//What will be the output?
//C. A number between 0 and 1 (not including 1)

//Q17. Math.floor Example

console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.3)); // 4
console.log(Math.floor(-4.7)); // -5

//Q18. typeof null

console.log(typeof null); // object 


//Q19. isNaN Function

console.log(isNaN("123")); // false
console.log(isNaN("abc")); // true


//Q20. parseInt Function

console.log(parseInt("100px")); // 100