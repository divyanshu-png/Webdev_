/*
CLASSES IN JS 
Classes are the syntactical sugar of the ECMA6 introduced in 2015 that is also used like a constructor function that is for creating objects 

The only difference is that classes derives a lot from the Java OOPS concept 

A JavaScript class is not an object. It is a template for JavaScript objects.

*/

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//A. THE CONSTRUCTOR FUNCTION & OTHER FUNCTIONS 
// It is neccesarry and advosed for a constructor function  to be defined inside the class definition (js might use a )

//other than the constructor function, we can have multiple fucntions that all the object instance will be sharing  

//As regular functions we can send parameters to the class methods 

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
  greet(owner){
    console.log(`Hello ${owner}, your ${this.name} car from ${this.year} is now ${this.age()} years old! `)
  }
}

const myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");



//B. INHERITANCE 
//Classical  Prototypical inheritance in Objects was done using the Object. create() syntax as follows: 
//          const childObject = Object.create(parentObject) ; 
// However the classes use the moder extends keyword to rather create a new class in itself along with some new and modified methods 

class Car{
    constructor(brand){
        this.brand = brand; 
    }
    present(){ 
        return "I own a " + this.brand ; 
    }
}

class Model extends Car { 
    constructor(brand, model){
        super(brand);
        this.model = model; 
    }
    show(){
        console.log(` ${this.present()}, and it is a ${this.model}`)
    }
}

//The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

const myCar = new Car("Ford");
let result = myCar.cnam ; 

//chnaging the car name 
myCar.cnam = "Volvo";

//C. CLASSES ARE NOT HOISTED
//We must decalre a class before use . the example below will not work 

const myCar = new Car("Ford");
let result = myCar.cnam ; 
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}


//D. STATIC METHODS 
/*
Static class methods are defined on the class itself.
You cannot call a static method on an object, only on an object class.
*/

class Car{
    constructor(name){
        this.name = name; 
    }
    static hello(){
        console.log("Hello")   
    }
}

const myCar = new Car("Ford"); 

Car.hello(); 
