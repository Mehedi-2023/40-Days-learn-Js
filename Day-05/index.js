
console.log("Day-05");


// Task-01  pyramid pattern printing ...
console.log("Task-01");


for(let i = 1; i <= 5; i++){ //l for row print 

    for(let j = 1; j <= i; j++){ // for column print 
        let starts = "* ".repeat(i);
        console.log(starts);
    }
}


// Task-02 Create Multiplicatio Table (complete hoi nai)

console.log("Task-02");


let num = 3;

for(let i = 1; i <=10; i++){

    console.log(`${num} * ${i} = ${num * i}`);
}


// Task-03 Finding the summation of all odd numbers between 1 to 500
console.log("Task-03");

let odd_sum = 0; 
for(let i = 1; i <= 500; i++){
    if(i % 2 == 0){
    
    }
    else{
        
        odd_sum += i; 
    }
}
 console.log(odd_sum);



// Task-04 Skipping Multiples of 3; 
console.log("Task-04");


for(let i = 1; i <= 20; i++){
  
    if( i % 3  == 0)
        continue;
    
    console.log(i);  

}


// Task-05 Reverse Digits of a Number 

console.log("Task-05");

let numbers = "6789";

// let ch = "Javascript"

for(let i = 0; i < numbers.length; i++){
    console.log(numbers.charAt(i));
}

for(let i = numbers.length; i >=0; i--){
    console.log(numbers.charAt(i));
}


// Task-06 Create flow charts about loop such as for, while & do...while loop

console.log("Task-06");



for(initialization; condition; update){
    // execution code...
}


// first step initialization and condition under the block apply the update...

//initialization 
while(conditon){
    //execution code....

    // update ..
}


// first print something atleast one time print output and then apply some condition or others....

do{
    // execution code.....

}while(condition)

