//Async and await are two keywords used in JS that provide a cleaner, more readable format for working with Promises. They allow us to write asynchronous code that looks and behaves like synchronous code, completely removing the need to chain mutliple .then() and .catch() 

//The async keyword is placed before a function decalration, that forces it to return a promise always. 
//the await keyword is used only inside an async function that pauses the execution of the function until the targeted Promise is resolved/fulfilled or rejected. 

//Some function that takes time to complete here hardcoded to be 3 seconds

function hello(){
    setTimeout(()=>{
         console.log("Hello"); 
    }, 3000); 
   
}

function returnAPIResult() {
    //API CALL or a function that returns a promise
    return new Promise((reoslve, reject)=>{
        setTimeout(()=>{
            console.log("Weather Data") ; 
            reoslve("200 OK");
        }, 2000); 
    });
}


async function weatherAPIData(){
    await returnAPIResult(); 
    //maybe some DOM manipulation after this
    await hello(); 
}

//Async- await with the getData() example 

function getData(dataId){
    return new Promise((resolve, reject)=>{
        //yaha pe vo code aayega jo time lega i.e heavy process
        setTimeout(()=>{
            console.log("data" , dataId);
            resolve("Success");  
        }, 3000);
    }); 
}

async function getAllData(){
    await(getData(1234)); 
    await(getData(3456)); 
    await(getData(5678)); 
}

//iife for tackling the function call that should be done automatically as the JS encounters the lines of code

(async function (){
    await(getData(1234)); 
    await(getData(3456)); 
    await(getData(5678));
})(); 

