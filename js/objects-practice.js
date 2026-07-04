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




