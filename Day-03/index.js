console.log("Day  03");


// Task-01 Odd or Even ?

let a = 13;
 let check = a%2 == 0 ? "Even" : "Odd" ;
// print(a);

//console.log(check);


// Task-02 Do you have a driving License ? 

let age = 17;
let elligible = age >= 18 ? "Elligible" : "Not-elligible";
//console.log(elligible);0


// Task-03 Calculate CTC with a Bonus
 
let salary = 12300;
let Bonus = 12300 * 0.2;
let CTC = 12*salary + Bonus*12;
//console.log(CTC);


// Task-04 write a program for the Traffic Light Simulation...

let color = "Red";

let color_s = "Red";
let color_G = "Green";


let decision = color == color_s ? "Go" : "stop";
// console.log(decision);


// Task-05 Create an Electricity Bill Calculator 

let units = 20;
let month_cost = 30 * 150 * units;
let year_dis = month_cost * 12 - month_cost * 12 * 0.2; 
// console.log(year_dis);


// Task-06 Leap Year Checker

let Year = 2025;

let check_y = Year % 400 == 0 ? "Leap Year" : Year % 4 == 0 && Year % 100 != 0 ? "Leap Year" : "Not Leap-year" ;

// console.log(check_y);


// Task-07 Max of Three Numbers 

let p = 50;
let q = 20;
let r = 30;

let Max_value = p > q ? "p" : q > r ? "q" : "r";
//console.log(Max_value);

// Another way to solve this problem

 p = p > q;

 q = q > r;

 r = r > q;

 // console.log(p);


// Task-08 Bitwise Doubling 

let count = 5;
let shifting = count << 1;
//console.log(shifting);
