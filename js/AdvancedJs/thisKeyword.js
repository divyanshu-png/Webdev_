// usage of this keyword with call, apply and bind 

//this keyword refers to the object currently being reffered to, inside an user made object, say person, the this keyowrd points and returns the custom object 

const person = {
    name: "Divyanshu", 
    age: 20, 
    callPerson : function(){
        console.log(`Hello ${this.name}, you are ${this.age} years old `)
    }
}; 

person.callPerson(); 

//otherwise the this keyword refers to the global object that may be different under different environment for example in the browser environments it refer to the window object. 

console.log(this); 

//inside a funtion generally it refers to the object that calls it, say the person object has an function, and requires variable ,  the object properties, that are accessed via the this keyword 
document.getElementById("vmepe").addEventListener("click", function(){
    console.log(`Hello from ${this}`); 
    //logs the specific HTML element that calls the function on the event
});
// In regular functions the this keyword represents the object that called the function, which could be the window, the document, a button or whatever.

function callWindow(){
    console.log("hello this is" + this);
}
callWindow();

//In methods like call(), apply() and bind(), this can refer to any object.


/*\
CALL() METHOD
The call() method is used to call a function with an object as an argument.
Syntax: 
    functionName.call(object/this referance, arg1, arg2, ....)
\*/

const person1 = { name: "John" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function greet(greeting) {
  return greeting + " " + this.name;
}

greet.call(person3, "Hello");//Order of the arguments is to be taken care of here 

//You can use call() to borrow a method from another object:

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);

/*\
APPLY() METHOD: 
The only difference between apply() and call() is how arguments are passed.

The call() method takes arguments separately.
The apply() method takes arguments as an array.All arguments must be placed inside an array, in the correct order.
\*/

const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);

//JavaScript Arrays do not have a max() method, but you can simulate it with the apply method.

const numbers = [4, 8, 5, 1];
Math.max.apply(null, numbers);

/*\
BIND() METHOD
Like with call() and apply(), the bind() method can borrow a method from another object.
Unlike call() and apply(), the bind() method does not run the function immediately.
Instead, it returns a new function that can be called later.
The new function remembers the this value you chose.

SYNTAX: 
    const newFunction = functionName.bind(this, arg1, arg2, ...);

\*/

const person1 = { name: "John" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function greet() {
  return "Hello " + this.name;
}

const greetJohn = greet.bind(person1);

greetJohn();
//some code
greetJohn(); 

//greetJohn is a new function that always uses person1 as this.

/*
Using bind() for Preserving this
The bind() method can be used to prevent losing this.

In the following example, the person object has a display method.
In the display method, this refers to the person object:
*/
//When a function is used as a callback, this is lost.

const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(person.display, 3000);
//will return undefined 

