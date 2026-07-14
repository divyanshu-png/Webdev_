// IIFE - Immediately Invoked Function Expressions
//these are the funtions taht run as soon as the JS engine compiles it

//its a function that invokes itself when defined.

(function (name) {
  let text = "Hello " + name;
  return text; 
})("John Doe");

//arrow notation of IIFE
(() => {
  let text = "Hello! I called myself.";
})();

//NAMED IIFE
(function greet() {
  let text = "Hello! I called myself.";
})();

greet();


//IIFE as a Module (Private Variables)
const counter = (function () {
  let value = 0;
  return {
    increment() { value++; },
    get() { return value; }
  };
})();

counter.increment();
let x = counter.get();
