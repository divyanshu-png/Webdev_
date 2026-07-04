
// functions
//function declarations
function add(a,b,c){
    return a+b+c; 
}
let result = add(3,4,5,5); //js functions do not perform type checking or even checking the number of arguments passed!!!
//we also do not specify the data types for arguments
//Function expressions 
const add = function(a,b,c){return a+b+c;}
const calcAge = function(birthYear){
    const currentYear = new Date().getFullYear(); 
    return currentYear - birthYear; 
}



//Fizz-Buzz function //For loop
function fizzBuzz(){
    let output= []; 
    for(let i =1 ; i<=100; i++){
        if(i%3===0 && i%5===0){output.push("FizzBuzz");}
        else if(i%5===0){output.push("Buzz");}
        else if(i%3===0){output.push("Fizz");}
        else{output.push(i);}  
    }
    console.log(output)
}

fizzBuzz(); //function call


//99 bottles of bear 
// function and while loop
function bottleSong(){
    let i = 100; 
    while(i>=0){
        if(i === 0){
            console.log( "No more bottles on the wall, no more bottles of bear."); 
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall."); 
        }
        else{
            console.log(i+ " bottles of beer on the wall, "+ i+ " bottles of beer on the wall");
            let x= i-1; 
            console.log("Take one down and pass it around, "+ x + " bottles if beer on the wall.")
        }
        i--; 
    }
}

bottleSong(); //function call
 
//Fibbonacci
let result = Fibbonacci(14);
function Fibbonacci(n){
    let output=[0,1];
    let sum =0;
    if(n===1){
        return output.slice(0,1);
    }
    else if(n===2){
        return output.slice(0,2)
    }
    else{
        for(let i=0; i<n-2; i++){
            sum = output[output.length - 1]+ output[output.length - 2]; 
            output.push(sum);
        }
        return output;
    }
}
 //function call


//JavaScript functions have a built-in object called the arguments object.

// The argument object contains an array of the arguments used when the function was called (invoked).

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
//the order of the argument matter

//default arguments are allowed in js
function findSum(x,y=10){
    return x+y;
}
findSum(5); 

//this keyword usage in standalone function defintion aka Default Binding

function generateThis(){
    console.log(this);
}
generateThis();

//this code generates and logs into console whatever current object is being reffered to: In a browser set uop it returns the WINDOW object, In Node.js: Logs the 'global' object

//Object Method (Implicit Binding): Calling a function binded with an object
const user = {
    name: "Divyanshu",
    age :20,
    id: 12345, 
    majors: "Computer Science",
    greet(){console.log("Hello "+ this.name+". You are "+ this.age+" years old!")}
}

user.greet(); 

function Car(brand) {
  // 'this' is a brand new empty object {}
  this.brand = brand; 
  // The object is returned automatically
}

const myCar = new Car("Tesla");
console.log(myCar.brand); // Output: Tesla

//In JavaScript, the this keyword refers to the object that is currently executing or executing the function. 
//It's value is not static; it is determined at runtime based entirely on how a function is invoked, rather than where it was defined. 



//Function expressions 
// Assigned to a variable. They are not hoisted in the same way as declarations (they follow the hoisting rules of the variable declaration like let, const, or var).
const add = function(a,b,c){return a+b+c;}
const calcAge = function(birthYear){
    const currentYear = new Date().getFullYear(); 
    return currentYear - birthYear; 
}

let z= add(2,3,4);
console.log(z); 
let age = calcAge(2006); 
console.log(age);



//Arrow function

//by default returns the value or expression after the arrow 
//even works with no parameters 
const multiply = (a, b) => a * b;
multiply(3,4); 

// A shorter syntax for writing functions. Crucially, they do not have their own this context (they inherit this from the enclosing lexical scope) and do not have an arguments object.
//are not used as much but with dom manipulation 

//Anonymous functions
//functions without a name. Often used as callbacks or inside IIFEs
setTimeout(function() {
    console.log("Executed after 1 second");
}, 1000);

showMessage(function(){
    window.alert("Hello User this shows up after the showMessage gets executed!!");
})





