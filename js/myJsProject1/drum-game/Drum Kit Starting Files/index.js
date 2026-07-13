let buttonW = document.querySelector(".w"); 
let buttonA = document.querySelector(".a"); 
let buttonS = document.querySelector(".s"); 
let buttonD = document.querySelector(".d");
let buttonJ = document.querySelector(".j"); 
let buttonK = document.querySelector(".k"); 
let buttonL = document.querySelector(".l"); 

//Event Listeners 

buttonW.addEventListener("click", ()=>{
    const d = new Audio("./sounds/tom-1.mp3");
    d.play(); 
}); 
buttonA.addEventListener("click", ()=>{
    const a = new Audio("./sounds/tom-2.mp3")
    a.play(); 
}); 

buttonS.addEventListener("click", ()=>{
    const s = new Audio("./sounds/snare.mp3");
    s.play();
}); 
buttonD.addEventListener("click", ()=>{
    const d = new Audio("./sounds/crash.mp3");
    d.play(); 
}); 
buttonJ.addEventListener("click", ()=>{
    const j = new Audio("./sounds/tom-3.mp3");
    j.play(); 
}); 
buttonK.addEventListener("click", ()=>{
    const k = new Audio("./sounds/tom-4.mp3"); 
    k.play(); 
}); 
buttonL.addEventListener("click", ()=>{
    const l = new Audio("./sounds/kick-bass.mp3");
    l.play(); 
}); 


// for(element of document.querySelectorAll("button")){
//     element.addEventListener("click", () =>{
//         alert("I got Clicked! ")
//     });
// }