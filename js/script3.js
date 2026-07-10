let x= 1234; 
let y = 45660 ; 


let a= 1234.23; 
let b= 45660.455667; 



document.getElementById("click").addEventListener("click", ()=> {

    document.getElementById("type").innerHTML = "The typeof function called on x returns:"+ typeof(x); 
    document.getElementById("addition").innerText = x+y;
    document.getElementById("subtraction").innerText = y-x;
    document.getElementById("division").innerText = y/x ; 
    document.getElementById("multiply").innerText = x*y ; 
    document.getElementById("exponent").innerText = y**x ;//returns infinity as the result exceeds the limit of the Number datatype

    document.getElementById("remainder").innerText = y%x ; 
    document.getElementById("increment").innerText = ++x ; 
    document.getElementById("decrement").innerText = --x; 
    document.getElementById("lessthan").innerText = y>x ; 
    document.getElementById("exactlyequal").innerText = y===x ; 
    document.getElementById("augmented").innerText = y+=x ; 


    document.getElementById("type2").innerHTML = "The typeof function called on a returns:"+ typeof(a); 
    document.getElementById("addition2").innerText = a+b;
    document.getElementById("subtraction2").innerText = b-a;
    document.getElementById("division2").innerText = b/a ; 
    document.getElementById("multiply2").innerText = a*b ; 
    document.getElementById("exponent2").innerText = b**a ;//returns infinity as the result exceeds the limit of the Number datatype

    document.getElementById("remainder2").innerText = b%a ; 
    document.getElementById("increment2").innerText = ++a ; 
    document.getElementById("decrement2").innerText = --a; 
    document.getElementById("lessthan2").innerText = b>a ; 
    document.getElementById("exactlyequal2").innerText = b===a ; 
    document.getElementById("augmented2").innerText = b+=a ; 


    document.getElementById("constructor").innerText = a.constructor ;
    document.getElementById("isFinite").innerText = Number.isFinite(a);

    userAge= "32"; 
    document.getElementById("parseInt").innerText = "The string '32' gets converted to "+ Number.parseInt(userAge);
    

    userHeight = "167.54"; 
    document.getElementById("parseFloat").innerText = "The string '167.54' gets converted to "+ Number.parseFloat(userHeight);


    num = 123456789
    document.getElementById("toExp").innerText = "The string '123456789' gets converted to "+  num.toExponential();

    num2 = 123.456789
    document.getElementById("toFixed").innerText = "The number 123.456789 gets converted to "+  num2.toFixed(3);

})

document.getElementById("alert").addEventListener("click", ()=>{
    window.alert("Hello User!"); 
    console.log("Message displayed to User!")
})


document.getElementById("nbub").addEventListener("click", ()=> {
    let x= null;
    let y; 
    let z = true; 
    let numBig = 1234556788907653n; 
    //NaN is the only JavaScript value that is not equal to itself.

    document.getElementById("null").innerHTML = "The type of function on x returns: "+ typeof x; 
    document.getElementById("undefined").innerHTML = "The type of function on y returns: "+ typeof y; 
    document.getElementById("boolean").innerHTML = "The type of function on z returns: "+typeof z; 
    document.getElementById("bigint").innerHTML = "The type of function on numBig returns: "+ typeof numBig; 

})




sampleStr = "i am divyanshu singh! Hello world"; 
    
document.getElementById("clickStr").addEventListener("click", ()=>{
    document.getElementById("length").innerText += sampleStr.length; 
    document.getElementById("toUpper").innerText = sampleStr.toUpperCase() ;
    document.getElementById("toLower").innerText = sampleStr.toLowerCase() ;
    let resultReplace= sampleStr.replace("i", "0"); 
    document.getElementById("replace").innerText = resultReplace;

    let resultReplaceAll = sampleStr.replaceAll("i", "0");  
    document.getElementById("replaceAll").innerText = resultReplaceAll;

    document.getElementById("slice").innerText = sampleStr.slice(0 ,9);
    document.getElementById("substring").innerText = sampleStr.substring(- 2 ,12 );

    let whiteSpaceStr="  Helloo!    ";
    document.getElementById("trim").innerText = whiteSpaceStr.trim(); 
    
    document.getElementById("startsWith").innerText = sampleStr.startsWith("i am"); 


})

document.getElementById("clickCondition&Loops").addEventListener("click", function(){
    let sampleString = "Divyashu Singh is learning!"; 
    let num = 123456
    document.getElementById("if").innerText = greater(num); 
    document.getElementById("switchCase").innerText = returnDay();
    // document.getElementById("").innerHTML = ; 
    document.getElementById("for").innerHTML = returnCharacter(sampleString); 
    document.getElementById("while").innerHTML = printNums();
    document.getElementById("doWhile").innerHTML = printNums2();


})
function greater(num){
    if (num>100000){
        return "Greater than a million! Large sum";
    }
    else if( num>10000){
        return "Large sum"; 
    }
    else{
        return "very small number!"; 
    }
}

function returnDay(){
    switch (new Date().getDay()) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return  "Friday";
            break;
        case 6:
            return  "Saturday";
        }
}

function returnCharacter(str){
    let i=0; 
    let name = "new:"; 
    for(i=0; i < str.length; i++){
        console.log(str[i]);
        name += str[i]; 
    }
    return name; 
}

function printNums(){
    let i=0; 
    while(i <10){
        console.log("The value of i is: "+ i); 
        i++;
    }
    return "Logged as values: please check console"
}

function printNums2(){
    let i=0; 
    do{
        console.log("The value of i is: "+ i); 
        i++;
    }while(i <10)
    return "Logged as values: please check console"
}

d = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

document.getElementById("DSinJS").addEventListener("click", function(){
    let obj1 = {name: "Divyanshu" , age: 20, id: 12345};
    
    document.getElementById("objects").innerHTML = "<br>The object obj1 is given as :" + obj1 + ". And it's type is:  "+ typeof obj1 + "<br> Using for-in loop to iterate over the keys of an object, we have: (check console) : " + getObject(obj1) + "<br> It's values are given by :[" + Object.values(obj1) +"],  and the keys by: ["+ Object.keys(obj1)+ "]";

    function getObject(obj){
        for(let key in obj){
            console.log(`${key} : ${obj[key]}`)
        }
        return "succesfully logged"; 
    }




})



document.getElementById("Functions").addEventListener("click", function(){

    document.getElementById("functionDefinition").innerHTML = fizzBuzz();
    function fizzBuzz(){
        let output= []; 
        for(let i =1 ; i<=100; i++){
            if(i%3===0 && i%5===0){output.push("FizzBuzz");}
            else if(i%5===0){output.push("Buzz");}
            else if(i%3===0){output.push("Fizz");}
            else{output.push(i);}  
        }
        return (output);
    }

        
         
    const calcAge = function(birthYear){
        const currentYear = new Date().getFullYear(); 
        return currentYear - birthYear; 
    }
    let age = calcAge(2006);
    document.getElementById("functionExpression").innerHTML = age;

    const multiply = (a, b) => a * b;
    document.getElementById("functionArrow").innerHTML = multiply(3,4);

    
    document.getElementById("functionAnonymous").innerHTML = setTimeout(function() {
        console.log("Executed after 1 second");
    }, 1000);

    document.getElementById("functionIIFE").innerHTML = (function(){console.log("IIFE executed!This will be the first Log message");})();



})

document.getElementById(); // returns an "Element object" representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
//returns null data type if there's no matching id for the specified element 
document.getElementsByClassName(); 
//method of Document interface returns an array-like object called an "HTML Collection", of all child elements which have all of the given class name(s).

document.getElementsByName(); //method of the Document object returns a "NodeList Collection" of elements with a given name attribute in the document.

document.getElementsByTagName(); //returns an HTMLCollection of elements with the given tag name

document.querySelector(); // Returns the first instance of the Element object that is a descendant of node that matches the CSS selectors or a single selector. Returns null if no matches are found 

document.querySelectorAll(); //Returns all element descendants of node that match selectors in the form of a NodeList collection . 


/*\
DOM Specific Collections : 
When working with the browser DOM, JavaScript also utilizes specific web API collections:
HTMLCollection: A live, array-like list of HTML elements returned by methods like getElementsByTagName. 
NodeList: A collection of DOM nodes returned by methods like querySelectorAll
\*/

