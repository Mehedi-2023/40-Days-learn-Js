console.log("Day 03");

/*****
 * Master Operators & Expressions in JavaScript.
 * 
 * A. Operator ------> symbols: + - * / % 
 *      1. Arithmetic --> 
 *      2. Assignment --> 
 *      3. Comparison --> 
 *      4. Relation   -->  
 *      5. Logical    --> 
 *      6. Bitwise    --> 
 *      7. Conditional --> 
 *      8. Grouping    --> 
 *      9. typeOf      --> 
 *      10. instanceOf --> 
 * 
 * B. Operands    --> X + Y : X and Y are the operands.
 * C. Expressions --> X = 3;-: this is Expressions(differents expressions)
 * 
 */



/*** Arithmetic Operators */
console.log("******Arithmetic Operators*****");

let a = 20; 
let b = 20;

console.log(a+b); // Ans = 40
console.log(a-b); // Ans = 0
console.log(a*b); // Ans = 400
console.log(a/b); // Ans = 1
console.log(a%b); // Ans = 1

let f_name = "Mehedi";
let l_last = "Hasan";
console.log(f_name + l_last); // MehediHasan
console.log(f_name +" "+ l_last); // Mehedi Hasan

// 1. Increment ..... Pre- and post- 
let conut_I = 5; 
console.log(conut_I++); // Post-increment: count = cont + 1; --> first return value = 5; then increment count value is = 6;
console.log(conut_I++); 

let count_D = 10;
console.log(++count_D); // Pri-increment: first increment then print the values.....


// 2. Decrement..... Pre- and post- 
let conut_Pt = 5; 
console.log(conut_Pt--); // Post-increment: count = cont + 1; --> first return value = 5; then increment count value is = 6;
console.log(conut_Pt--);  // 4

let count_Pr = 10;
console.log(--count_Pr); // Pri-increment: first increment then print the values..... 9


/*** Assignment Operators */
// short hand operator 

console.log("******Assignment Operators*****");
let x = 4;  // x assign the values of 4;

x += 5; // x = x + 5; Ans: 4 + 5 = 9;
x -= 2; // x = x - 2; Ans: 4 - 2 = 2;
x *= 4; // x = x * 4; Ans: 4 * 4 = 16;
x /= 2; // x = x / 2; Ans: 4 / 2 = 2;
x %= 3; // x = x % 2; Ans: 4 % 3 = 1;


/*** Comarison Operators */
console.log("******Comparison Operators*****");

//console.log(4==5);
console.log(1==true); //  Non_zero of one (1) values is true --: true
console.log(0==false); // any kind of zero values is false --: true
console.log(3 == '3'); // true this conditioins because of don't care of data-type 
console.log(3 === '3'); // false this conditioins must be follow to same data type 


// check the 2 object same oe not same......

let obj_1 = {fiest_name: "Mehedi"};
let obj_2 = {last_name: "Hasan"};

console.log(obj_1 === obj_2);
console.log(obj_1 !== obj_2);


let m = 3;
let n = 2; 

console.log(m > n); // greter then 
console.log(m >= n); // greter then equal 
console.log(m < n);  // less then
console.log(m <= n); // less then equal


/** 
 * Logical Operator
 * 
 * Logical And --> &&
 * Logical OR  --> ||
 * Logical not --> !
 * Logical Nullish Coalescing   --> ??
 * 
 * 
 */

console.log("*****Logical Operator*****");

// Logical And operators
console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log("Cow" && "horse"); // horse


// Logical OR operators
console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true


console.log("Cow" || "horse"); // Cow


// Logical Nullish Coalescing  ??

let a1 = null ?? 1;  // 1
let a2 = undefined ?? 3; // 3
const a3 = false ?? "tapaScript"; // false
const a4  = 0 ?? "Hasan"; // 0




/**Conditional (Ternary) Operator */

console.log("***** Conditional Operator *****");

// condition ? val1 : val2

let age = 23;
age >= 60 ? "Senior Citizen" : "Non Senior citizen";




/** 
 * Bitwise Operator
 * 
 * Bitwise And --> &
 * Bitwise OR  --> |
 * Bitwise XOR --> ^
 * Bitwise not --> ~(tilda)
 * Bitwise left-shift --> <<
 * Bitwise Right-shift --> >>
 * 
 */

console.log("***** Bitwise Operator *****");

// 10 in decimal in 32 bits representation of 0, 1;

// 15 & 9 = 9  --> 1111 & 1001 = 1001 
// 15 | 9 = 15 --> 1111 | 1001 = 1111 
// 15 ^ 9 = 6  --> 1111 | 1001 = 0110 

console.log("***** Relational Operator *****");


console.log("***** Grouping Operator *****");

let p = 1; 
let q = 2; 
let r = 3; 

console.log(p+q*r); // 1+2*3 = 1+ 6 = 7

p + (q + r); // 7 group is higher precedence..

( p+ q) * r; // (1+2) * 3 = 3 * 3 = 9

console.log("***** typeOf Operator *****");

typeof "Mehedi" // string
typeof false // boolean 


let size = 100;
typeof size; // number

const numbers = [1, 2, 3, 4];
typeof numbers; // object

typeof null; // object 



console.log("***** instanceOf Operator *****");

// particular object instanceOf particular objectType
