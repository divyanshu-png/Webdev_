
/*\ 
DEBUGGING IN JS 
\*/

//A good debugging habit is: Read → Reproduce → Reduce → Fix
// Read the error
// Reproduce the problem
// Reduce to a small example
// Then fix it.

/*
A Simple Debugging Checklist
//Check the console for errors
//Read the error message carefully
//Log values with console.log()
//Reduce the problem to a small example
//Fix one thing at a time.


*/

//CONSOLE


console.log("Used to print values to see what the program is doing and returning to check if an error exists");

console.error("This is an error message! "); //used to display error messages

console.warn("Warning!!"); //Warnings tell you something might be wrong, but your code can still run.

console.assert(); //The console.assert() static method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

let users = [
  {name: "John", age: 25},
  {name: "Anna", age: 30}
];

console.table(users); //prints out the data in tabular format

