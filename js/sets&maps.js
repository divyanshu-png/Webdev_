//Collectively the set, weakset, map and weakmap are called Keyed Collections 

//A JavaScript Set is a collection of unique values.Each value can only occur once in a Set. The values can be of any type (heterogenous), primitive values or objects.

//creating a set 
let set1= new Set(); 
set1.add(23); 
set1.add(2); 
set1.add(45); 
set1.add(23); //removes the repetitive value and returns only :Set(3) {23, 2, 45}


const set2= new Set("Divyanshu Singh"); 
//returns the unique characters inside a string 
const set3 = new Set(["a","a", "b", "c", "D", 1234]); //returns {'a', 'b', 'c', 'D', 1234}

const set4 = new Set(); 
set4.add(new Date()); 
set4.add(function myFunc(){console.log("Hello");}); 
set4.add("Divyanshu"); //stored as a single unit in the set 
set4.add(334554849); 

// iterating and listing all the elements of an array 
//use the for-of loop 
let text = ""; 
for(letters of set2){
    text+= letters; 
}
typeof set2; //returns object
set2 instanceof Set; //returns true

//method of Sets 

set3.size; //returns the size of the array / the no. of elements in the set 

//has() method
answer = set2.has("i"); //returns true 

//.forEach(function ..) method invokes a function for each set element
//an iterable method in itself
let text= ""; 
set2.forEach(function(value){text+=value;});

//just like in objects, keys, values and enteries are accesible for the set as well 
//the set doesn't have any keys so it returns the same result as values(). //this makes set compatible with maps
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters.keys()) {
  text += x;
}

//logical methods in set 
set5 = new Set([1,2,3,4,5]); 
set6 = new Set([4,5,6,7,8]); 

let resultUnion = set5.union(set6);  //returns {1,2,3,4,5,6,7,8}
let resultIntersection = set5.intersection(set6); //returns {4,5}

let resultDifference = set5.difference(set6); //elements if set5 after removing the elements also present in the set6
 

//A JavaScript WeakSet is a collection of values where the values must be objects. A WeakSet holds weak references to its values.

let myWeakSet = new WeakSet(); 
let myObj= {fname: "Divyanshu", lname:"Singh"}; 
myWeakSet.add(myObj); 

myObj= null; //will be collected by automatic gc 

//Unlike a regular Set, a WeakSet does not prevent its values from being garbage collected.
//If a value (an object) has no references in a program, it becomes eligible for garbage collection.
//When the value is garbage collected, its is removed from the WeakSet.

//non-enumerable, non-iterable 

let text = "";

// Create a WeakSet to track persons
const persons = new WeakSet();

// Visitor Objects
const John = {name:"John", age:40};
const Paul = {name:"Paul", age:41};
const Ringo = {name:"Ringo", age:42};
const George = {name:"George", age:43};

// Track visits
track(Paul);
track(Ringo);
track(Paul);

// Function to track visitors
function track(visitor) {
  if (persons.has(visitor)) {
    text += visitor.name + " is visiting again.<br>";
  } else {
    persons.add(visitor);
    text += visitor.name + ", age" + visitor.age +", is visiting for the first time<br>";
  }
}

//sets have no properties, just methods


/*\
MAPPING
\*/

//in map:  keys can be of any dataype, are ordered by insertion and do not have default keys

// ways to create a map
let map1= new Map();
map1.set("Apples", 400); 
map1.set("Bananas", 234); 
map1.set("Oranges", 340); 

//creating a second map using arrays
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]); 

//adding new elements to the map
map1.set("Mangos", 150); 

//changing the existing map values 
map1.set("Apples", 230)

//map.get() and map.set()
map1.get("Oranges");
map1.set("Oranges",445 ); 

//.has() method
map1.has("Apples"); 

//.size property 
map1.size; 

//.delete(mapElement) method :Removes a specified map element 
//.clear() method: Removes all the elements from a map

//.forEach() method
let text =" "; 
map1.forEach(function(key, value){text+= key+ ":"+ value +","; });

//we can use the values, enteries and keys method like in an object 

//since we said keys can have any type, we consider taking the Objects as keys 
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits2 = new Map();

// Add new Elements to the Map
fruits2.set(apples, 500);
fruits2.set(bananas, 300);
fruits2.set(oranges, 200);

fruits2.get(apples); //this will be the correct syntax for get and not 
fruits2.get("apples"); //will result in an error


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
const result = Map.groupBy(fruits, myCallback);


/*\
Weak Map
\*/

//A JavaScript WeakMap is a collection of key/value pairs where the keys must be objects.A WeakMap holds weak references to its keys.

//WeakMap provides a limited set of methods:

// new WeakMap()	Creates a new WeakMap object
// get(key)	        Gets the value for a key in a WeakMap
// set(key, value)	Sets the value for a key in a WeakMap
// delete(key)	    Removes an element specified by a key
// has(key)	        Returns true if a key exists in a WeakMap

let text = "";

// Create a WeakMap to store visit counts
const visitsCount = new WeakMap();

// Create Visitor Objects
const John = {name:"John", age:40};
const Paul = {name:"Paul", age:41};
const Ringo = {name:"Ringo", age:42};
const George = {name:"George", age:43};

// Track visits
track(Paul);
track(Ringo);
track(Paul);
track(Paul);
track(John);

// Function to track visitors
function track(visitor) {
  let count = visitsCount.get(visitor) || 0;
  count++;
  visitsCount.set(visitor, count);
  text += visitor.name + ", age " + visitor.age + ", has visited " + count + " time(s).<br>";
}

