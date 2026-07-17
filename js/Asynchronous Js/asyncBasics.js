/*
ASYNCHRONOUS PROGRAMMING  : 
Some operations take time to complete for example : 
>downloading data
>reading files
>waiting for events
>waiting for user input
>waiting for a timer

If JavaScript waited for these tasks, the page would freeze.
A frozen page is a broken page.
To stay responsive, JavaScript can use async programming.

Asynchronous flow refers to how JavaScript allows certain operations to run in the background and let their results be handled when they are ready

Asynchronous Concepts
JavaScript handles asynchronus programming using different core concepts. 

Concept	Description
Synchronus:	    JavaScript standard flow is executing line by line.

Timers:	        Allows code to run while other code is waiting.

Callbacks:	    Callbacks were the first solution for async JavaScript.

Events:	        Stores callback function waiting to be executed.

Promises:	    Tools to handle asynchronous operations cleanly.

Async/Await:	    The clean and modern way to handle async code.

*/

//A. TIMERS :setInterval() and setTimeout() 

//A.1. setTimeout()

console.log("Start");
function myFunc1(){
    console.log("Helooo after 5 seconds!"); 
}
setTimeout(myFunc1, 5000); 
console.log("End"); 
//js doesn't wait for the function myFucn1 call to be completed instead the control moves to the next line and "End" is printed before the function log return. 

//The setTimeout returns a timer identifier that can be passed to clearTimeout() to clear the timeout and basically stops the scheduled function from executing 

// 1. Schedule an action to happen after 3 seconds
const timerId = setTimeout(() => {
  console.log("This message will never appear.");
}, 3000);

// 2. Decide immediately (or based on a condition) to cancel it
clearTimeout(timerId); 

console.log("The scheduled timer was successfully cancelled.");



//A.2. setInterval() 

function myFunc2(){
    let time = new Date().getTime(); 
    console.log(time);
}

setInterval(myFunc2 ,1000); 


//Using arrow function for one time usage of the setInterval function
setInterval(() => {
            const d  = new Date(); 
            console.log( d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() ); 
        }, 1000);

//to stop an interval we pass the return value of the setInterval() funnction to the clearInterval() method

//If we set the time to Zero in either of the methods, it means the function to run as soon as JS is ready 
//How do Timers Work? Timers are managed by the browser. When a timer expires, its callback waits until JavaScript is ready to run it.

//PROBLEM IN TIMIMG 

//You cannot see a result before it is computed. Example: 
let result;

setTimeout(function() {
  result = 5;
}, 1000);

console.log(result); 
// What is result here? UNDEFINED because the value of result has not yet being computed when the control immediately moves out of the setTimeout

//The solution to the problem above, is to give JavaScript a callback function to call after the result is ready.

//B. ASYNC CALLBACKS
// A callback is a function passed as an argument to another function.

// This technique allows a function to call another function.

function done(value) {
  myDisplayer(value);
}

setTimeout(function() {
  done(5);
}, 1000);

function myDisplayer(some) {
   console.log(some);
}
setTimeout(function () {myDisplayer("Finished!")}, 3000);

setTimeout(()=>{
    console.log("Hello")
}, 3000)


// Alternative

function calculator(a, b, callback){
    callback(a,b); 
}

calculator(1 ,2 , (a,b)=>{
    console.log(a+b); 
}); 

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data" , dataId); // print krwa rha hai data followed by the data id 
        if (getNextData){getNextData();} 
    }, 2000); 
}


//Callback HELL or Pyramid of Doom 
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4); 
        });
    }); 
}); 

//Nested callbacks stacked one below the other forming a pyramid like structure
//This type of programming structure becomes difficult to understand after a certain point of time and to manage also. 
