let user1= {
    name:"Divyanshu", 
    age :20, 
    country: "India",
    majors: "Computer Science"
}; 
//Different ways of creating an object are: 

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//We can also use the new keyword to declare a new Object

const user2 = new Object({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}); 


// Create an Object and then add properties to it 
const person = {};

// Add Properties using the dot notation 
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


let user1= {
    name:"Divyanshu", 
    age :20, 
    country: "India",
    majors: "Computer Science",
    display: function(){ return this.name +" is a "+ this.age +" years old person living in " + this.country+ " and persuing majors in "+ this.majors }
}; 

user1.display();
 
user1.display ; 
// ƒ (){ return this.name +" is a "+ this.age +" years old person living in " + this.country+ " and persuing majors in "+ this.majors }

console.log(user1.age); 
console.log(user1[age]); //Not used frequently

//deleting properties 
//the delete keyword followed by the property of the user is deleted
//The delete keyword deletes both the value and the property.

delete user1.age; 

//chceking if a property exists in an object 

console.log("name" in user1 )


//Nested Objects: objects inside objects 

let myUser2 = {
    name:"divyanshu",
    age: 20, 
    otherInfo:{
        country:"India",
        state:"Delhi",
        university: "Orlando", 
        numbe: 8493599355, 
        cgpa:8.3
        }
}

myUser2.otherInfo.country;

"country" in myUser2; 
// false

"country" in myUser2.otherInfo; 
// true


//Methods :Methods are actions that can be performed on objects.These are functions stored as property values.

//adding a method to an object 
myUser2.displayAge = function() {
    let currentYear = new Date().getFullYear();
    return "The person was born in "+ currentYear - this.age; 
} ; 

myUser2.displayAge(); 



//iterating over an object- displaying an object: 
// Object.entries() makes it simple to use objects in loops:


let user1= {
    name:"Divyanshu", 
    age :20, 
    country: "India",
    majors: "Computer Science",
    display: function(){ return this.name +" is a "+ this.age +" years old person living in " + this.country+ " and persuing majors in "+ this.majors }
}; 

const fruits= {
    apple: 300, 
    banana: 350,
    mango: 280
}

let text= "{ "; 
for(let [fruit, value] of Object.entries(fruits)){
    text+= fruit+":"+value+","
}
text+="}"
console.log(text); 

console.log(Object.values(fruits)); 
console.log(Object.keys(fruits)); 

for(let keys of Object.keys(fruits)){
    console.log(keys + ": "+ fruits[keys])
}

let text = JSON.stringify(user1); 
console.log(text) ; 


//Constructor Function
// special functions used to create objects;

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";// default values to property
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

const myFather = new Person("John", "Doe", 50, "blue");
myFather.nationality = "India"; //Changing the deafault nationality specified in the defination of object 
let myMother = new Person ("Maya","Opus", 50, "black"); 

//To add a new property, you must add it to the constructor function prototype:
Person.prototype.changeName = function (name) {
  this.lastName = name;
}
myMother.changeName("Doe");


// ---JavaScript has built-in constructors for all native objects://

let obj1= new Object()   // A new Object object
let userArr = new Array()    // A new Array object
let mapping = new Map()      // A new Map object
set = new Set()      // A new Set object
dateToday = new Date()     // A new Date object
re= new RegExp()   // A new RegExp object
new Function() // A new Function object
new Error("Something Went Wrong!") // A new Error object 
//there are many more types of error objects 

new Number(12345678978); 
new String(); 

// Structured DataObjects- designed to manage data buffers and serialization.
new ArrayBuffer(); 
// ArrayBuffer: Generic fixed-length raw binary data buffer container.
new SharedArrayBuffer(); 
// SharedArrayBuffer: Shared memory binary data buffer container.
new DataView() ; 
// DataView: Low-level interface to read/write numeric types.

//There are other built in objects offered by JS, ones that do not require the new keyword: those are as follows  :

JSON(); 
// JSON: Static namespace object for JSON parsing/stringifying, never use new with json
Math(); 
//Static utility object (not a constructor — never use new). Everyday math: rounding, powers, trigonometric functions, random numbers.
Intl(); 
//Internationalization: Objects providing locale-specific linguistic text and number sorting.
Intl.DateTimeFormat();  
//Locale-sensitive date and time formatting tool.


/* WEB HOST OBJECTS 
    1) BOM -Browser Object Model
    2) DOM- Document Object Model
    3) other Web APIs 
*/ 

// BOM -Browser Object Model

window.prompt("What is your name");
window.CSSAnimation();
//var CSSAnimation: {
//  new (): CSSAnimation;
//  prototype: CSSAnimation;
// }

// The CSSAnimation interface of the Web Animations API represents an Animation object.

navigator.geolocation.getCurrentPosition();

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude: ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

history.back(); 
//Session history of the tab. Used for back/forward and — crucially —
// pushState/replaceState in SPA routing (React Router, etc.)

screen.height(); 
//Physical screen properties — analytics, positioning popups, responsive logic. 


