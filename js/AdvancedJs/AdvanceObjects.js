//A. Creating a object from an existing object : 
// The "Object.create()" method creates an object from an existing object.
//Classic example of PROTOYPICAL INHERITANCE IN JS

const person = {
    firstName: "Divyanshu", 
    lastName: "Singh", 
    age: 20
}

let person2 = Object.create(person); 
person2.firstName = "Vaibhav";
 

console.log(person2.age);  // → Looks in person2 → not found → looks in [[Prototype]] → FOUND: 20

//when we console.log or try to access the object created via create through a loop,  the only property visible would be the firstName that has been modified.
//this is because the Object.create() method sets the prototype of that new object (person2) to person
 


//B. JavaScript Object fromEntries()
// The fromEntries() method creates an object from iterable key / value pairs.

const fruits = [
    ["Apple" , 200],
    ["Banana" , 240],
    ["Pear", 450]
]; 

const fruitsObj = Object.fromEntries(fruits); 
console.log(fruitsObj); 
// prints {Apple: 200, Banana: 240, Pear: 450}

for(enteries in fruitsObj){
    console.log(enteries + ":" + fruitsObj[enteries]); 
}

//C. JavaScript Object.assign()
// The Object.assign() method copies properties from one or more source objects to a target object. 
/*
> Copies all properties to the target object
> Creates independent objects (no prototype chain)
> All properties are "own properties"
> Each object has its own copy

*/ 

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person3 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person3);

//Creating a Copy of the Object to work seperately on it 
const person4 = new Object(); 
Object.assign(person1, person4); 

//D. this keyword in Objects 

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

//The call() and apply() methods are predefined JavaScript methods. They can both be used to call an object method with another object as argument.
//the difference is that call() takes the arguments as a list and apply() takes the additional arguments passed as an array

// the bind() method is also availabe that creates new function for the new obejct that is, an object can borrow a method from another object.

const person5 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person6 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
person5.fullName.call(person6);


//E. Object.groupBy() method
// The Object.groupBy() method groups elements of an object according to string values returned from a callback function. The Object.groupBy() method does not change the original object.

// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);


// F. GETTER AND SETTER METHODS of functions that allow you to define Object Accessors (Computed Properties).
/*
WHY USE THE SET AND GET ???
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
*/


const person7 = {
    firstName:"John", 
    lastName :"Doe", 
    language: "en", 
    get lang(){
        return this.language ; 
    }
}
//displaying data from the object using a getter 
person7.lang; 

const person8 = {
    firstName:"John", 
    lastName :"Doe", 
    language: "", 
    set lang(lang){
        this.language = lang.toUpperCase();
    }
}

person8.lang = "en"; 

//another way of defining the object's get and set properties is via the defineProperty() method 


const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

//G. JavaScript Object Management

/* There are multiple methods that can be used for the Property Managemenmt of an object 

    // Adding or changing an object property
    Object.defineProperty(object, property, descriptor)

    // Adding or changing object properties
    Object.defineProperties(object, descriptors)

    // Accessing a Property
    Object.getOwnPropertyDescriptor(object, property)

    // Accessing Properties
    Object.getOwnPropertyDescriptors(object)

    // Returns all properties as an array
    Object.getOwnPropertyNames(object)

    // Accessing the prototype
    Object.getPrototypeOf(object)

*/

    // A. Using the Object.defineProperty() method
    // Syntax ::: Object.defineProperty(object, property, descriptor)


    ///a. Adding new Property
    const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
    };

    // Add a Property
    Object.defineProperty(person , "year", {value: "2008"});

    //b. changing a property value 
    Object.defineProperty(person , "language" , {value: "HIN"}); 


    //IF WE WANT TO MAKE THE NAME READABLE ONLY AND not to be able to edit it we can 
    Object.defineProperty(person , "firstName" ,{writable :false}); 



    // B. Using the getOwnPropertyNames() 
    // it is used to List object properties. Object.keys() can also be used to acheive the same purpose 
    // both of the above here will return different outputs that is : 

    Object.getOwnPropertyNames(person );
    //['firstName', 'lastName', 'language', 'year']
    Object.keys(person); 
    //['firstName', 'lastName', 'language']

    //This is because the Object.keys() method returns all enumerable properties. Whereas getOwnPropertyNames() method returns all properties, whether enumerable or not. 

//H. JavaScript Object Protection
/*
There are object Protection methods that can be opted for making the object and its properties safe to be dealt with

// 0.  using const to prevent reassignment 
const car = {type:"Fiat", model:"500", color:"white"};

//1.  Prevents adding object properties
Object.preventExtensions(object)

//2.  Returns true if properties can be added to an object
Object.isExtensible(object)

//3.  Prevents adding and deleting object properties
Object.seal(object)

//4.  Returns true if object is sealed
Object.isSealed(object)

//5.  Prevents any changes to an object
Object.freeze(object)

//6.  Returns true if object is frozen
Object.isFrozen(object)


*/
const car = {type:"Fiat", model:"500", color:"white"};
const fruits = ["Banana", "Orange", "Apple", "Mango"]; 

Object.preventExtensions(car); //cannot add property in the car object anymore
car.color = "red"; //will not throw error as changing the value of the properties is still allowed 

Object.seal(car); //prevents adding new properties or deleting old properties 

car.color = "yellow"; 
delete car.model; //will fail silently 

Object.freeze(car); 

//both will fail silently
car.color = "green"; 
delete car.model; 

