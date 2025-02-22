console.log("Day-03");


// How to declare a if statement ......

let x = 20;


if(x > 23){
   // console.log("your are elder vaiya");
}

else{
  //  console.log("you are not elder vaiya ");
}


// two or more conditions  you can use if.... else if....statement 

let age = 98;

if( age <= 18){
    //console.log("you are 18");
}

else if(age <= 39){
    //console.log("you are Adult");
}

else if(age <= 40){
    //console.log("you are 40 ");
}

else{
   // console.log("you are old person");
}



// make a mark sheets use else if condition statement.....

let score = 23;

if(score >= 80){
    //console.log("You are get: A+");
}

else if(score >= 70){
   // console.log("You are get: A");
}
else if(score >= 60){
   // console.log("You are get: A-");
}
else if(score >= 50){
   // console.log("You are get: B");
}

else if(score >= 40){
   // console.log("You are get: c");
}
else if(score >= 33){
    // console.log("You are get: d");
}

else{
    // console.log("Tumi fail: F");
}


// print Positive, Negative or Zero....

let N = -4;
if(N == 0){
   // console.log("Zero");
}

if(N > 0){
   // console.log("Positive Number");
}

if(N < 0){
   // console.log("Negative Number");
}


// switch case start here Alternative else if...... you can use condition is fixed value (string & integer Numbers)......

let possition = 3;

switch(possition){
    case 1:
        //console.log("Dhaka");
        break;
    
    case 2: 
        //console.log("Dubai");
        break;
        
    case 3: 
       // console.log("Mumbai");
        break;
    case 4:
       // console.log("Kolkata");
        break;
    default:
       // console.log("Out of Renge of this Numbers");
}


// print the day of one week use switch case.....

let day = 7;
switch(day){

    case 1:
        //console.log("Saturday");
        break;
    case 2:
        //console.log("Sunday");
        break;
    case 3:
        //console.log("Monday");
        break;
    case 4:
        //console.log("Tuesday");
        break;
    case 3:
        //console.log("Wednesday");
        break;
    case 6:
        //console.log("Thirsday");
        break;
    case 7:
        //console.log("Friday");
        break;
    default:
        //console.log("Invalied the Day Numbers");
}
