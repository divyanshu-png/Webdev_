//Higher Order Fucntions are the functions that take other functions as an input and uses their return statements as a return of the higher order function 


function add(a,b){return a+b ; }
function multiply(a,b){return a*b ; }
function subtract(a,b){return a-b ; }
function divide(a,b){return a/b ; }

function calculate(a,b,operator){
    return operator(a,b); 
}

//here the operator is called a callback function 
// There are a total of two types of Callback functions 
/*
Asynchronous Callbacks
> Asynchronous callbacks are executed at a later time, allowing the main program to continue running without waiting.

Synchronous Callbacks 
> Synchronous Callbacks are executed immediately within the outer function, blocking further operations until completion.
*/


