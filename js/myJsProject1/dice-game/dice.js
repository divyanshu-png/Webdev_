let randomNunber1 = Math.floor(Math.random()*6) + 1 ; 
let randomNunber2 = Math.floor(Math.random()*6) + 1 ; 

const dice1 = document.querySelector(".img1"); 
const dice2 = document.querySelector(".img2"); 
//or 
const diceOne  = document.querySelectorAll("img")[0]; 
const diceTwo  = document.querySelectorAll("img")[1]; 

let arr_images = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"]

//or 
let randomImage1 = "./images/dice" + randomNunber1 +".png"; 
let randomImage2 = "./images/dice" + randomNunber2 +".png"; 

//using the random number generted -1 as index of the array 

dice1.setAttribute("src", arr_images[randomNunber1 -1] ) ;
dice2.setAttribute("src", arr_images[randomNunber2 -1]) ; 
// document.addEventListener("")

const heading = document.querySelector("h1"); 

if (randomNunber1 === randomNunber2){
    heading.innerText = "Draw 🤞"; 
}
else if(randomNunber1 > randomNunber2){
    heading.innerText = "🚩 Player 1 Won!";
}
else if(randomNunber1 < randomNunber2){
    heading.innerText = "Player 2 Won ! 🚩 "
}