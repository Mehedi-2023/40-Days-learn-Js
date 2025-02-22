console.log("Day - 04");

// Task-01 what will be the output of this code snippet and why ?

let day = "Monday"; // javaScript is a case sensitive 

switch (day) {
   case "monday":
     // console.log("It's the start of the week.");
       break;
   default:
       // console.log("It's a normal day.");
}



// Task-02 Build a Calculator withdrawal system.. if..else statement 

let withdrawal = 100;


if(withdrawal == 100){
    console.log("withdrawal successful");
}

else{
    console.log("Invalid amount");
}

// Task-02 Build a Calculator withdrawal system.. Another way to solve this problem by using switch case

let withdraw = 1000;


switch(withdraw){
    case 100:
        console.log("withdrawal successful");
        break;

    default:
        console.log("Invalid amount");
        
}







// Task-03 Build a Calculator with switch-case

let a = 10;
let b = 20;
let add = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let rem = a / b;

let operator = "*"

switch(operator){
    case '+':
        console.log(add);
        break;
    case '-':
        console.log(sub);
        break;
    case '*':
        console.log(mult);
        break;
    case '/':
        console.log(div);
        break;
    case '%':
        console.log(rem);
        break;
    default:
        console.log("Invalid Operator");
}



// Task-04 Pay for your movie ticket....

let age = 55; 
if(age < 10){
    console.log("$3");
}

else if(age >=12 && age <= 60){
    console.log("$10");
}

else{
    console.log("$8");
}



// Task-05 Horoscope Sign Checker 

let month = "April";

switch(month){
    case "March":
        console.log("Aries");
        break;
        
    case "April":
        console.log("Aries");
        break;

    case "May":
        console.log("Taurus");
        break;

    case "June":
        console.log("Taurus");
        break;
    case "July":
        console.log("Geminis");
        break;
    default:
        console.log("Invalid Month");
}




// Task-06 Which Triangle 

let side_one = 6;
let side_two = 6;
let side_three = 6;

if( side_one == side_two && side_two == side_three){
    console.log("Equilateral Triangle");
}

else if(side_one == side_two || side_one == side_three || side_two == side_three ){
    console.log("Isosceles Triangle");
}

else{
    console.log("Scalene Triangle");
}