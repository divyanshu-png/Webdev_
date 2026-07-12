let buttonW = document.querySelector(".w"); 
let buttonA = document.querySelector(".a"); 
let buttonS = document.querySelector(".s"); 
let buttonD = document.querySelector(".d");
let buttonJ = document.querySelector(".j"); 
let buttonK = document.querySelector(".k"); 
let buttonL = document.querySelector(".l"); 

//Event Listeners 

buttonW.addEventListener("click", ()=>{}); 
buttonA.addEventListener("click", ()=>{}); 
buttonS.addEventListener("click", ()=>{}); 
buttonD.addEventListener("click", ()=>{}); 
buttonJ.addEventListener("click", ()=>{}); 
buttonK.addEventListener("click", ()=>{}); 
buttonL.addEventListener("click", ()=>{}); 

for(element of document.querySelectorAll("button")){
    element.addEventListener("click", () =>{
        alert("I got Clicked! ")
    });
}