console.log("Day 02");

/**
 * Today's Topic: 
 * Variable: Variables are userd to store data in Javascript
 * 
 * Variable Keyword: 
 * 1. var   --> Function-scoped, can be redeclared (not recommended)
 * 2. let   --> Block-scoped, can be reassigned..
 * 3. const --> Block-scoped, **cannot** be reassigned
 * 
 * A.Systex: let/const storage_name = value; 
 * example: let fruit = "mango"; (declaration & = assignment oparator)
 *  let vagetable = "carrots";
 * fruit + vegetable (variable) assign--> fruit = vegetable; // fruit = carrots.

 * B.Variable Declaretioin rules: 
 * 1. The name must have digits(0-9) or letters.
 * 2. The names can have special character Dollar sign($) and underscope ( _ ).
 * 3. The first character must not be a digit.
 * 4. No Reserved keywords.. (search google for keywordss..)
 * exm: let $ = 'dollar'; let 2morroe;(worng) let _ = 'underscore'; let react-play;(worng)
 *
 * C.Variable are case scencetive: Must Standards
 * 1. Use camelCase... like myName --> vaiables name...
 * 2. Human Readable
 * 3. The name shoud match the cause..
 *
 * D. Types of Variables: 
 * 1. Primitive values -> Number, String & boolean -- variable store (stack Memory)
 *  - 'Number'    --> Numeric values (25, 3.1416)
 *  - 'String'    --> Text values must contain inside quotation 'singal' or "double"
 *  - 'Boolean'   --> True/False 
 *  - 'Undefined' --> A variable declared but not assigned (let x;)
 *  - 'Null'      --> Represents "nothing" (let y = null;)
 *  - 'BigInt'    --> Large numbers ('BigInt(0123456789101112131415)')
 *  - 'Symbol'    -->  Unique Identifiers ('symbols("id")');
 * 
 * 2. Non-primitive values -> function, objects & Arrays -- variable store (Heap Memory)
 *  - 'Function' --> Code that can be executed
 *  - 'Array'    --> Ordered list of values
 *  - 'Object'   --> Collection of key-value pairs (properties)..
 * 
 * E. How javascript see code...?
 *  1. Tokenizing   (code snippet)
 *  2. Parsing      (Abstract Syntext Tree)
 *  3. Interpreting (Machine language / code generation)
 * 
 */



// // 1. use var keyword to declare variables...

// var address = "Bangladesh";
// console.log(address);

// var address = "USA";  // redeclare variables...
// console.log(address);



// // 2. use let keyword to declare variables...

// //let address = "Bangladesh"; // don't allow to re_declared variables
// //console.log(address);

// let space_Name = "Canada";  // declare variables and assign values....
// console.log(address);

// space_Name = "German";  // re_assign values...
// console.log(space_Name);


// // 3. use const keyword to declare variables...

// const myName = "Mehedi Hasan"; // declare variable
// console.log(myName);

// // myName = "Rakib"; // can't re-assign values...



/**  The End Notes..... The End. notes.... The End. notes.... The End notes..... The End notes..... */



/** Statr Day-02 Assignment Start here....... Topic: Variable & Data Types */


/*
// 1. variable declaretion... (var_keyword)
var name, age, isStudent, favorite;  

// value assign...
name = "Mehedi";
age = 22;
isStudent = true;
favorite_language = "JavaScipt";

// print out ...
// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(favorite_language);


// Another way to declaration(decla+assig) that call redeclare ... (var_keyword)

var name = "Hasan";
var age = 22;
var isStudent = true;
var favorite_language = "javascript";

// print the value of re-declaretion variables

// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(favorite_language);

 */



/**
// 2. variable declaretion... (let_keyword)

let name, age, isStudent, favorite;  


// can't re-declare variables.......
// let name = "hasan";
// let age = 34;
// let isStudent = false;
// let favorite_language = "KotLean";

// value assign...
name = "Mehedi";
age = 21;
isStudent = true;
favorite_language = "JavaScipt";

// print out ...
console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(favorite_language);


// re-assign the values..
name = "Hasan";
age = 22;
isStudent = false;
favorite_language = "C++";

// Re-assign values print out

// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(favorite_language); 

 */



/*** 
// 3.variable declaretion... (let_keyword)

const name = "Mehedi Hasan";
const age = 24;
const isStudent = true;
const favorite_language =  "Java";

// can't re-assign & redeclare...
// name = "Mehedi";
// age = 25;
// isStudent = false;
// favorite_language = "Python";



// print out ...
// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(favorite_language);

*/



// Create an Array ........

let arr = [ 1, 2, 3, 4, 5, 6, 'Mehedi', true];
console.log(arr);
console.log(arr[7]);




// Create an Objects ........

let obj = {
    nam1 : "Mehedi",
    age : 43,
    favorite : "sleeping"
}

console.log(obj);
console.log(obj.age);









