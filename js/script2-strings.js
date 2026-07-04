let userInput = prompt("Enter the essay"); 
userInput.slice(0, 280); 
//Slicing a string to restric the user input and not allow after a certain character length limit 
if (userInput.length === 280){
    alert("You have entered maximum allowed characters. Please shorten the text if possible! "); 
}
else{
    window.alert("You have written " + userInput.length  +" characters and have left "+ (280 - userInput.length) +" charcters");
}
    


alert(prompt("Enter the essay").slice(0,140)); 

let userInput = prompt("Enter your name");  
alert("Hello "+ userInput.slice(0,1).toUpperCase() + userInput.slice(1,userInput.length)); 



let userInput = prompt("Enter your name");  
alert("Hello "+ userInput.slice(0,1).toUpperCase() + userInput.slice(1,userInput.length).toLowerCase()); 


let dogAge = parseInt(prompt("Enter the dog age!")); 
alert("Your human age is " + ((dogAge-2)*4) + 21 ); 


function calculateBMI(weight, height){ 
 let BMI = weight / (height**2)
 return BMI; 
}

var n = Math.random(); 
console.log(n); 

function pseudoRandomNumber(){
    var n = Math.random();
    n *=6;
    n = Math.floor(n)+1; 
    console.log(n);

}


function lovePercentage(){
    let user1 =  prompt("WHat is your name?");
    let user2 = prompt("Enter your crush's name"); 

    let n= Math.random() *100; 
    console.log("YOUR LOVE PERCENTAGE IS "+ n.toFixed(2)) ;
}
lovePercentage(); 

//string replacement
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText);


function bigCounter(){
    let count= 0; 

    return function(){
        count++; 
        return count; 
    }
}