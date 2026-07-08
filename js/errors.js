//Errors are bound to happen in any js code 
/*
Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things:

Reference Errors
Type Errors
Range Errors
URI Errors
Syntax Errors
Eval Error (deprecated)
Silent Errors (next chapter)
*/

//HANDLING JS ERRORS 

try{
    //try to do something that may rsult in an error
}catch(err){
    //do something when error occurs 
}


/*
REFERENCE ERROR: 
A ReferenceError occurs if you use (reference) a variable that does not exist.
*/

let x= y; 
let y=5; //returns : Uncaught ReferenceError: y is not defined at <anonymous>:1:8

try {
  let x = y;
  let y = 5;
} catch(err) {
  let text = err.name;
}
console.log("Out of Error!"); 

/*
TYPE ERROR:
A Type Error occurs when a value is of the wrong type or an operation is invalid on that type. Say that we use the toUpperCase() to a number or an FUNCTION METHOD call to an integer
*/

let anna=5; 
try{
    anna(5); 
}catch(err){
    let text = err.name; 
}
console.log("Out of Error!"); 


/*
RANGE ERRORS:
A RangeError occurs when a value is out of its valid range. For example when we use num.toPrecision(500) as toPrecision() argument must be between 1 and 100. 
*/

try{
    new Array(-1); 
}catch(err) {
    let text = err.name +" has been encountered!"; 
    console.log(text); 
}
console.log("Out of Error!"); 


/*
URI ERRORS: 
URI error occurs when you use an invalid character in aN URI function
*/ 

try{ 
    decodeURI("%%%%"); 
}catch(err){
    console.log(err.name); 
}
console.log("Out of Error!"); 

//other uri Functions are : 
decodeURIComponent(encodeURIComponent); 
//Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI)

encodeURIComponent(uriComponent: string | number | boolean); 
//Encodes a text string as a valid component of a Uniform Resource Identifier (URI).

/*
SYNTAX ERRORS:
Like in any other language, a Syntax error occurs when the code violates the JS's Grammar rules 
*/

try{
    let name =" fjencopd;
}catch(err){
    console.log(err.name); 
}
//Syntax Errors are Not Catchable by try...catch
// Syntax errors happen before runtime


/*
SILENT ERRORS: 
A silent error will not stop your program. The execution will continue.
The reason for silent errors is historical: The first version of JavaScript did not have catch...try exceptions.

Silent errors are issues that do not throw exceptions or stop execution, but still cause logic bugs, unexpected behavior, or failures that are easy to miss.
FOR EXAMPLE: 
*/
let x= 1/0 ;  //x is stored as INFINITY 

let result = "Not Active.";
let isActive = false;

// Assignment, not comparison
if (isActive = true) {
  let result = "Active!";
}

// JS error statements 

// In JavaScript, the try statement is used to handle errors (also called exceptions) that may occur during code execution - without stopping the entire program.
// The try statement works with, catch, finally and or throw. 

try{

}catch(err){

}

try{

}catch(err){

}finally{

}

//The throw statement allows you to create a custom error. Technically you can throw an exception (throw an error).

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  } catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
