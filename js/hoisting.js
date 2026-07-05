// In JavaScript, a variable can be declared after it has been used.

//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
//Crucial to note that JS only hoists declaration and not intializations. 


var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

y = 7;    // Assign 7 to y// this moves to the top of the scope (global here)

//JavaScript in strict mode does not allow variables to be used if they are not declared.

//"use strict" ; 

"use strict";
x = 3.14;   //will result in an error

"use strict"; 
let x= 3.24; 
delete x; //will result in an errror because deleting a variable, object or a function is not allowed in strict mode

//The with statement is not allowed:

"use strict";
with (Math){x = cos(2)}; // This will cause an error

// The this keyword in functions behaves differently in strict mode.
// The this keyword refers to the object that called the function.
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

