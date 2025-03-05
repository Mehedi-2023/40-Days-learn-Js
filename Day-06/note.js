console.log("Day-06");

/*****
 * 1.What is the function ?
 * 
 * 2.How to declaretion and Call the function 
 * 
 * function_keyword function_name (paranthesis){ body // ececution code here }
 * 
 * 3.Parameter & Argument 
 * 
 * Parameter: Parameters are the placeholders or the variables that     passas an input to a function while declaring or defining the function 
 * 
 * Argument: On the Contrary Arguments are the actual value that will replace those declared variable while invoking & calling the function..
 * 
 * 4.Return Statement: Must be declare return statement like-> return some;
 * 
 * 5.Default Parameter: 
 * 
 * 6.Rest Parameter: 
 * 
 * 7.Nested Function: Function inside another functions... 
 * 
 * 8.Callback function: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 * 
 * 9.pure function: 
 * 
 * 10.Higher order function: 
 * 
 * 11.Arrow function: 
 * 
 * 12.IIFE: Immediately Invoked Function Expressions
 * 
 * 13.Call Stack: 
 * 
 * 14.Recursion: 
 * 
 */

// 1.Define or Declare a function --> 

function printThis(){
    console.log("Printing....!"); // function body..
}

// Call or Invoke a function 

printThis();


// 2.function as a Expression --> 

let printMe = function(){
    console.log("PrintMe...!!!");
}

printMe();
// console.log(printMe);


// 3.Parameter & Arguments --> 

function sum(a, b){
  const result = a + b; // calculating and same value must be return..
   // console.log(result);

   return result; // best way to output the vale
}

// call the functio with parametr

sum(2, 3);  //1st way to Add Arguments

let num_1 = 5;
let num_2 = 10;

sum(num_1, num_2); // 2nd way to Add Arguments

let final_res = sum(num_1, num_2); // 3rd way to Add Arguments
console.log(final_res); // 



// 4.Parameter & Arguments with Return values  --> 

function sub(a, b){
    const result = a - b; // calculating and same value must be return..
  
     return result; // best way to output the vale
  }
  
  // call the functio with Argument 
  
  // create a Expression for 
  let rest = sub(35, 5);

  console.log("using argument for expression", rest);

  let num_3 = 59;
  let num_4 = 39;
  
  // Make a Expression to print out the output....

  let final_rest = sub(num_3, num_4); // 3rd way to Add Arguments
  console.log("variable to declare the values", final_rest); // 
  
  

  // 5.Default parameter --> 

  function calc(a=0, b=0){  // declare a parameter & assign the default values .... default  a statement
    return (2 * ( a + b ) );
  }

  const resVar = calc();  // you can easily replace any kind of number
  console.log(resVar);


  // 6.Rest parameter --> 

  function calculateThis (x, y, ...rest){
    console.log(x, y, rest); // Rest parameter create a Array...

  }

  calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);


  // 7.Nested Function --> function inside a another function


  function outer(){
    console.log("Outer function ");

    function inner(){
        console.log("Inner function");
    }

    inner() ; // call inner function inside the outer function. can't call the function outside the outer function. Till, don't call the outer function, inner function don't work
  }


 // outer();

    // 7.A.Nested Function --> Another way to Invoke the inner functions


    function outer(){
        console.log("Outer function ");
    
       return function inner(){
            console.log("Inner function");
        }
    
      }
    
    
     let retfunc =  outer();
     console.log(retfunc()); 


    // 8.Callback function --> 

    function foo(func){  // a function as a parameter function 
        console.log("foo");
        func(); // call a function 
    }

    foo(function(){    // pass another function as a Argument 

        console.log("Buz");
    })

    // Another way to use callback function ....
    const buz = function(){    
        console.log("Buz");
    }

    foo(buz);



    // 9.Pure function 

    let greetingMsg = "Hello ";

    function greeting(name){
        return greetingMsg + name;
    }
    
    console.log(greeting("TapaScript"));
    console.log(greeting("Mehedi"));

    greetingMsg = "MH "

    console.log(greeting("Mehedi"));
    console.log(greeting("Mehedi"));



    // 10.Higher Order function 

    function getCamera(camera){  // 1st create a callback function 
        camera();
    }

    getCamera(function(){
        console.log("Sony");
    })

    function returnFunc(){  // 2nd create a return function 
        return function(){
            console.log("Hello")
        }
    }

    const retFun = returnFunc();
    retFun();  // variable convert a function...



    // 11.Arrow Function 

    function greatMe(){     // Normal function 
        console.log("Hasan");
    }

    greatMe();

    // converted Arrow function 

    
    // Syntext: data_type function_name = (function_sign)  => (arrow) {body of a function}

    // Syntext: data_type function_name = (sign)  =>  body of a function 
    let greatMh = () => {
        console.log("MH Hasan")
    }

    greatMh();  // call the Arrow function 

    // Another one is Arrow function ....
    function arrowF(){
        console.log("MH Mehedi Hasan - 01");
    }

    arrowF();

    let arrowf = () => {
        console.log("MH Mehedi Hasan - 02");
    }

    arrowf();


    // 12. IIFE --> Immediately Invoked function Expression 

    (function (){
        console.log("IIFE");
    })(); // immediate invoked function 


    (function (count){  // Also pass  a parameter...

        console.log("Count-", count);
    })(3); 


    // 13. Call Stack Must be lear it......

    // 14.Recursion ....

    function fetchWater(count){
        console.log("Fetching wate....", count);
            if(count === 0){
                console.log("No More water is left to fetch");
                return;
            }

        fetchWater(count - 1);
    }

    fetchWater(5);





