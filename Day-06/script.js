console.log("Day-06");

// Task-01 Convert Celsius to Fahrenheit....

console.log("Task-01");


function convert(Celsius){
    let converted = (Celsius * 9)/5 + 32;
    return converted;
}

let result_1 = convert(100);
console.log(result_1);


// Task-02 find the Maximum of two Numbers....

console.log("Task-02");

function maximum(x, y){
    if(x > y){
        console.log("X is maximum:", x);
    }
    else{
        console.log("Y is maximum:", y);
    }

   // return  x>y, y; 

}

let result_2 = maximum(7, 3);
console.log(result_2);


// Task-03 check if a string is a palindrome.... 

console.log("Task-03");

function isPalindrome(str){

    return str;
}

console.log(isPalindrome("121"));
console.log(isPalindrome("madam"));


// Task-04 Find Factorial of a number....; 

console.log("Task-04");

function factorial(n){
    let sum = 1;
    for(let i = n; i>=1; i--){
        sum *= i;
    }
    // console.log(sum);
    return sum;


}

let result_A = factorial(4);
let result_B = factorial(5);
let result_C = factorial(6);
let result_D = factorial(7);
let result_E = factorial(8);
let result_F = factorial(9);
let result_G = factorial(15);
console.log(result_A);
console.log(result_B);
console.log(result_C);
console.log(result_D);
console.log(result_E);
console.log(result_F);
console.log(result_G);


// Task-05 count vowels .... (help from google)
console.log("Task-05");

function countVowels(str){

    const ch = "aklieoijejroiaakkjci";
    let count = 0;

    for(let i = 0; i <= str.length; i++){
      if(ch.includes(str[i])){
        count ++;
      }
    }
    return count;

}

console.log(countVowels("aeiou"));



// Task-06 Capitalize the first letter of each word in a sentence....  (not complete)

console.log("Task-06");

function CapitalizeWords(sentence){
    let ref = sentence.toUpperCase();
    return ref;
}

console.log(CapitalizeWords("the yourman is good man"));



// Task-07 IIFE to print "Hello, JavaScript!"....

console.log("Task-07");

(function (){
    console.log("Hello, JavaScript!");
})()



// Task-08 create a simple Callback function.... (not complete)

console.log("Task-08");

function greet(callback){
     console.log("Mehedi")
    callback();
}

greet( function(){
    console.log("Hasan");
})



// Task-09 create a Call Stack Execution Diagram for this flow.... (not complete)

console.log("Task-09");

function f1() {}  // function 1 declare 
function f2() {  // function 2 declare
    f1();   // call the first function......
}

f2();   // call the 2nd function....



// Task-10 create a Call Stack Execution Diagram for this flow.... (not complete)

console.log("Task-10");

function f1() {}
function f2() {}
function f3() {
    f1();
}

f2();
f3();
f1();




