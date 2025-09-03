//100 Small Code Snippets: JavaScript vs TypeScript

//1. Variable Declaration

let userAge : number = 31;
let userName : string = "Alice";
let isAdmin : boolean = true;

//Array

let numbers : number[] = [1,2,3,4,5]


// unsafe type, avoids strict typing

let value :  any = 10;
value = "Hello";



// Function With Types

function add(a:number, b:number): number {
    return a + b;
}
//Function With String
function greet(name:string):string{
    return "hello " + name;
}

//Union Types
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

let id:number | string= 101;
  id="101"


  //Object
  let user:{name:string;age:number}={
    name:'venugopal',
    age:31
  }

  //Optional Property

  let anotherPerson:{name:string ; age?:number}={
    name:'venug'
  }

//Interface

interface Employee{
    id:number;
    name:string;
    age:number;
}
let emp : Employee={
    id:1,
    name:'venug',
    age:31
};

//Type Alias

type Car = {
    brand:string;
    model:string;
    year:number;
}

let car :Car={
    brand:'Toyota',
    model:'Camry',
    year:2020   
};

//Function Returning Void

function logMessage(msg:string):void{
    console.log(msg)
}

//Default Parameters

function multiply(a:number, b:number=1):number{
    return a * b;
}

//Rest Parameters

function sum(...nums:number[]):number{
    return nums.reduce((acc,curr)=>acc+curr,0)
}


//Class


class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}

//Class with Method

class Dog{
    bark():string{
        return "Woof!";
    }
}


//Access Modifiers

class Student{
    private name:string;
    constructor(name:string){
        this.name = name;
    }
}

//Inheritance

class Bird{
    fly():string{
        return "Flapping wings";
    }
}

class Sparrow extends Bird{}

//Generics

function identity<T>(arg:T):T{
    return arg;
}

//Tuple

let user:[string,number]=["Alice",31]

//Enum

enum Colors{Red,Green,Blue }
let c:Colors = Colors.Red;  

//String Enum

enum Fruits {Apple = "Apple", Banana = "Banana", Cherry = "Cherry"}
let f:Fruits = Fruits.Banana;

//25. Type Assertion

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;


//Literal Types

type Direction = "up" | "down" | "left" | "right";

let dir: Direction = "up";