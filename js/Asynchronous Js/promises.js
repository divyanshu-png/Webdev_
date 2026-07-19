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

let result = fetch("https://google.com");
const response = fetch('https://typicode.com');
navigator.clipboard.writeText(); 
//Promise {<rejected>: TypeError: Failed to execute 'writeText' on 'Clipboard': 1 argument required, but only 0 present. …}


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

Promise.resolve(); 
Promise.reject(); 
Promise.all(); // Promise {<rejected>: TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator)) at Promise.…}



//HANDLING PROMISES

function getData(dataId, nextData){
    return new Promise((resolve, reject)=>{
        //yaha pe vo code aayega jo time lega i.e heavy process
        setTimeout(()=>{
            console.log("data" , dataId);
            resolve();  
            if(nextData){
                nextData(); 
            }
        }, 3000);
    }); 
}


//HOW TO USE PROMISE : .then() and .catch()
//Agar hamara promise ends in the fufilled/resolves state then 

//any function that returns a Promise 
const getPromise = ()=>{
    return new Promise((resolve, reject)=>{
        console.log("Hello User!"); 
        resolve(1234); 
    }); 
}

//now since getPromise hamare paas ek promise return krra hai toh storing it in a variable, we have 
let promiseResult = getPromise() ;
promiseResult.then((res)=>{
    console.log("Promise Fulfilled. Succesfully grabbed data!", res); 
    //data ko show and process krne ka kaam idhar hoyega  
}); 
//we make both then and catch block because we dont know what will be returned, i.e either a rejection or a resolve
promiseResult.catch((err)=>{
    console.log("Some error occured: ", err)
})

// the value of the err and res will be the value passed by the reject or resolve respectively in the getPromise fucntion(the function that returns a promise).
 
//Promise Chaining 

function asyncFunction1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Some Data 1 !!!"); 
            resolve("Success in fetching data from Abc API "); 
        }, 2000)
    });
}

function asyncFunction2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Some Data 2 !!!"); 
            resolve("Success in fetching data from XYZ API "); 
        }, 6000)
    });
}

console.log("Fetching Data 1");
let p1= asyncFunction1(); 
p1.then((res)=>{
    console.log("Success in Fetching Data 1 ", res);
    console.log("Fetching Data 2"); 
    let p2 = asyncFunction2(); 
    p2.then((res)=>{
        console.log("Successs in Fetching Data 2 ", res)
    }); 

}); 
 
// this is called Promise chaining 
//futher we shorten this using: 


console.log("Fetching Data 1");
asyncFunction1().then((res)=>{
    console.log("Success in Fetching Data 1 ", res);
    console.log("Fetching Data 2"); 
    asyncFunction2().then((res)=>{
        console.log("Successs in Fetching Data 2 ", res)
    }); 
}); 
 
//ANOTHER EXACT EXAMPLE OF PROMISE CHAINING 
function getData(dataId){
    return new Promise((resolve, reject)=>{
        //yaha pe vo code aayega jo time lega i.e heavy process
        setTimeout(()=>{
            console.log("data" , dataId);
            resolve("Success");  
        }, 3000);
    }); 
}

console.log("Fetching data!"); 
getData(1234).then((res)=>{
    console.log(res, ". Fetched data 1234"); 
    getData(5676).then(()=>{
        console.log(res, "Fetched data 5678"); 
    })
}); 

//actual promsie chains

getData(1234).then((res)=>{
    return getData(5678); 
}).then((res)=>{
    return getData(9123); 
}).then((res)=>{
    console.log(res); 
})

.catch(()=>{
    console.log("Some error occured"); 
})

//A single catch statement can be used to handle errors from the entire chain
//Promise chain is more readable for multiple asynchronous steps



