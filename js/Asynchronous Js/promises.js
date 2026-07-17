//a Promise is a special object that acts as a placeholder for a value that is not available yet but will be delivered in the future.

//Promise bole toh ek promise ki ye cheez later run hoke ya toh kaam kar jayegi ya toh reject ho jayegi but ek Promnise ka kuch state aur kuch result value save hojayega. 
// Ye jo promise hai ye kaam aata jab hamko heavy computation krni asynchronously taaki baaki ka code run hojaye and us ek line ko fetch krne me time ka khapaye

//resolve and reject are JS callbacks that the JS provides automatically 



let promise = new Promise((resolve , reject) =>{
    console.log("i AM A PROMISE!! ")
}); 

//Three states of the Promises  : Pending, Rejected, resolved/ fulfilled 

let promise2 =  new Promise((resolve, reject)=>{
    console.log("Hello User!"); 
    resolve(1234); 
}); 

let promise3 = new Promise((resolve, reject)=>{
    console.log("Hello from the user") ; 
    reject("Some error occured"); 
}); 

//In general programming we don't create a promise object, instead, they are sent to us by the API calls. 
//In JavaScript, promises are returned from built-in asynchronous Web APIs, async functions, Promise instance methods (.then(), .catch(), .finally()), and custom functions where you explicitly instantiate the new Promise() constructor


/*
1. Built-in Asynchronous APIs: 
Modern JavaScript environments (browsers and Node.js) use built-in functions that automatically return promises for time-consuming tasks.
Network Requests: fetch() requests web data and returns a promise.
Data Parsing: response.json() reads and parses stream data into JavaScript objects.
System Actions: navigator.clipboard.writeText() interacts with the system clipboard.
File Operations: fs.promises.readFile() reads files asynchronously in Node.js.
*/

/*
2. Async Functions and Promise Chaining
JavaScript automatically wraps return values in promises when using modern syntax keywords or chaining methods.
async Functions: Any function marked with async always wraps its return value in a promise.
.then() Handlers: Generates a new promise based on the data returned inside the success callback.
.catch() Handlers: Generates a new promise while managing error states in your code execution.
.finally() Handlers: Generates a promise after executing cleanup code, passing along the previous state.
*/

/*
3. Manual Constructors and Static Utilities
You can explicitly create and return promises yourself using the core Promise object and its built-in utility features.
new Promise(): Instantiates a manual promise wrapper, often used to upgrade old callback APIs.
Promise.resolve() / Promise.reject(): Instantly outputs a promise that is already marked as successful or failed.
Promise.all() / Promise.allSettled(): Combines multiple parallel promises into one single returned promise.
Promise.race() / Promise.any(): Monitors multiple promises and returns a single promise based on the fastest result.
*/

