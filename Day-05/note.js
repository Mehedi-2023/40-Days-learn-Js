
console.log("Day-05");
console.log("Note part here");


console.log("***** for loop ******");


/***
 * "A for loop is best when we know exactlu how many times we need to run a block of code"
 * 
 * Syntex for loop: for(initialization; conditions; update){ // execution code}
 * 
 * Nested Loop: A loop inside another loop called Nested loop...
 * 
 * Break & Continue: 
 * 
 * While Loop : A while loop runs as long as a given condition is true. It's best when we don't know in advance how many iterations are needed.
 * 
 * Syntex while loop: while( conditions){ // execution code}
 * 
 * do..while Loop : A do while loop ensure that the code executes at least once  before checking the condition.
 * 
 * Syntex while loop: do{ // execution code} while( conditions) 
 */


for(let count = 1; count <= 5; count++){
    //console.log("Iteration/loop:",count);
}


// Problem No: 01 -- Addition of event number between 1 to 100; 

let sum_1 = 0, sum_2 = 0; // declare a variable and initialization to 1;

for(let i = 1; i <= 100; i++){
    //console.log(i);
    if(i % 2 == 0){
        //console.log("Event: ", i);

        //sum = sum + i; // sum add to all even number...
        sum_1 += i;
    }
    else{
        // console.log("odd: ", i);
        sum_2 += i;

    }

}
console.log("Addition of Even_number: ", sum_1);
console.log("Addition of Odd_number  : ", sum_2);




// Problem No: 02 -- Count of Alphabets; 

let language = "JavaScript";

for(let j = 0; j < language.length; j++){
    console.log(language.charAt(j));
}



// Nested Loop  -- problem - 01: 

for(let m = 1; m <= 3; m++){ // parant for-loop 

    for(let n = 1; n <= 3; n ++){ // child for-loop 

        console.log("Row", m, "column", n);
    }
}



// Break & Continue....

for(let i = 1; i < 5; i++){
    if(i == 3){
        break;
    }
    console.log(i);
}


for(let i = 1; i < 5; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
}


// Multriple conuter in single loop 

for(let i=1, j=10; i<=10, j>=1; i++, j--){
    console.log(i, j);
}

// Task-01 problem-02 pattern printing 

for(let i = 1; j<=5; i++){
    for(let j = 1; j<=i; i++){
        console.log("*");
    }
}



/****  Start a while loop *****/

let counter = 1;  // initialization 

while(counter <= 5){  // conditions
    console.log(counter);  // execution code..
    counter++;  // update values...
}


/****  Start a do...while loop *****/

let num = 1;  // initialization 

do{
    console.log(num);  // execution code..
    num++;  // update values...
}
while(num <= 5) // conditions


// Infinite Loop 
   
for( ; ; ){
    console.log("I am Looping forever!!!!");
}


while(true){
    console.log("I am looping forever");
}


do{
    console.log("I am Looping forever");
}while(true);




let userNumber = prompt("Enter a number to generate its multiplication table:");
let validatedNumber = parseInt(userNumber,  10); 

if (!isNaN(validatedNumber)) {
    console.log(`Multiplication Table for ${validatedNumber}`);
    for (let i = 1; i <= 10; i++) {
     console.log(`${validatedNumber} * ${i} = ${validatedNumber * i}`);
    }
} else {
    console.log("Please enter a valid number.");
}