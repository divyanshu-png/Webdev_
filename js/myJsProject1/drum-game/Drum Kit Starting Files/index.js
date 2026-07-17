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


document.addEventListener("keydown", (event)=>{
    if(event.key === "w"){
        const d = new Audio("./sounds/tom-1.mp3");
        d.play();
    }
    if(event.key ==="a"){
        const a = new Audio("./sounds/tom-2.mp3")
        a.play(); 
    }
    if(event.key ==="s"){
        const s = new Audio("./sounds/snare.mp3");
        s.play();
    }
    if(event.key ==="d"){
        const d = new Audio("./sounds/crash.mp3");
        d.play(); 
    }
    if(event.key ==="j"){
        const j = new Audio("./sounds/tom-3.mp3");
        j.play(); 
    }
    if(event.key ==="k"){
        const k = new Audio("./sounds/tom-4.mp3"); 
        k.play();
    }
    if(event.key ==="l"){
        const l = new Audio("./sounds/kick-bass.mp3");
        l.play();
    }

})


//Now all this is the basic repeated and bad code in simple language because it is redundant and hideous most probably. So what we do to acheive the same fucntionality is : make use of functions, switch case and this keyword. 

var noOfDrumButtons = document.querySelectorAll(".drum").length; 
for( let i=0; i<noOfDrumButtons; i++){
    const button = document.querySelectorAll(".drum")[i];  
    //is an altenate to the this keyword because everyhting in JS is already an object so the this keyowrd points to the element as an object that called the event 
    button.addEventListener("click", function(){
        let buttonInnerHtml  = this.innerHTML; 
        let key = document.addEventListener("keydown" )
        switch(buttonInnerHtml){
            case "w":
                const d = new Audio("./sounds/tom-1.mp3");
                d.play(); 
                break; 
            case "a" :
                const a = new Audio("./sounds/tom-2.mp3")
                a.play(); 
                break ;
            case "s":
                const s = new Audio("./sounds/snare.mp3");
                s.play(); 
                break; 
            case "d":
                const d = new Audio("./sounds/crash.mp3");
                d.play();
                break; 
            case "j":
                const j = new Audio("./sounds/tom-3.mp3");
                j.play(); 
                break; 
            case "k":
                const k = new Audio("./sounds/tom-4.mp3"); 
                k.play();
                break; 
            case "l":
                const l = new Audio("./sounds/kick-bass.mp3");
                l.play();
            default:
                console.log("No button was pressed!"); 
        }
        if (button.innerText !== "s"|| button.innerText !== "d"){ 
            this.style.color = "white";
        }
        
        document.querySelectorAll(".drum")[i].style.shadow = "30px"
    }); 
}