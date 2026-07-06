//An Array is an object type designed for storing data collections.

// Key characteristics of JavaScript arrays are:

// Elements: An array is a list of values, known as elements.
// Ordered: Array elements are ordered based on their index.
// Zero indexed: The first element is at index 0, the second at index 1, and so on.
// Dynamic size: Arrays can grow or shrink as elements are added or removed.
// Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).


//three ways of defining a JS array

//method 1: square bracket 
let arr = ["Divyanshu Singh", 34, "BMW", 156.78];
console.log(arr); 
// creating and assiginng afterwards using indexes 
const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";
cars1[2]= "BMW";
console.log(cars1);
//using the Array object in JS 
const cars2 = new Array("Volvo", "BMW", "Beamer"); 
console.log(cars2);
const cars3 = new Array(3) ;
cars3[0]= "Saab";
cars3[1]= "Volvo";
cars3[2]= "BMW";


const points = [40]; 
//is not the same as
const poinst2 = new Array(40); //this creates an array of 40 positions all filled with null at the time of instantiation 


//as already visible the elements are accessed in an array via indexing that takes a number from 0 to array.length-1

arr[2]; //returns "BMW"

//changing the already existing element in an array 
cars2[0] = "Opel";

//converting an array to string : 
const fruits  = ["Apple", "Banana","Orange", "Strawberry", "Kiwi"];
let text = fruits.toString(); 
console.log(text); 

text = JSON.stringify(fruits); // creates a string of the array with the square brackets encolsed in qoutes 

text = fruits.join(",");  //behaves like toString but you can add a separator 

//Heterogenity of the Array 
//You can have objects, other arrays, any kind of primitive data type and even Objects as array elements 

const myArray =[]; 
myArray[0] = new Date();
myArray[1] = function(){
    console.log("Hello from Function"); 
}
myArray[2] = [1,2,3,4,5];
myArray[3] = "hello Environment!"; 

myArray[1]();
//this statement returns:  Hello from Function

// To get the day number now, call it from the array index:
console.log(myArray[0].getDay()); 


//Array methods 

//lenght 
console.log(myArray.length) ; //returns the length of the array in number
//slicing 
console.log(myArray.slice(0,3)); //returns a slice from the 0 upto 2nd index
//finding Inde of a specific element 
myArray.indexOf("hello Environment!"); 
//returns the index of the first element in the array where predicate is true, and -1 otherwise.

//push pop unshift and shift : ARRAY alteration methods 
const number = 655446
myArray.push(number); //pushes the element to the last/ right end of the array and returns the length of the modified array
myArray.unshift(true); //adds element to the first or the 0th index and pushes the rest of the array's element by a single index => O(n) // Also returns the length of the modified array
 
myArray.pop(); //removes the last element or the element at the last index and returns the element itself, 
myArray.shift(); //removes the first element or the element at 0th index and then again shifts the elements forward by a single index value one

//at() method
let fruit = fruits.at(2); //returns the element , here strig stored at the 2nd index of the array 

// how to confirm if the given object is an array 
Array.isArray(fruits);//returns a boolean value 

//Merging two arrays 
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); //doesn't edit the original copy of myGirls that stays intact. 
const myChildren = arr1.concat("Peter"); //can also concatenate the arrays with values 

//flattening an array
const myArray = [[1,2], [3,4], [5,6]]; 
let myNewArray= myArray.flat() ;
myNewArray; // returns [1, 2, 3, 4, 5, 6]


//Splicing an array : adds new items to an array.


fruits.splice(2, 0 , "Guava", "Litchi");
//The first parameter (2) defines the position where new elements should be added (spliced in). The second parameter (0) defines how many elements should be removed.
//The splice() method returns an array with the deleted items:
//changes are made in the original array not on a copy of it 




//iterating over an array using forEach method
const tools = ['Git', 'Docker', 'Webpack'];
tools.forEach(tool => console.log(tool));

const scores = [85, 92, 74];
scores.forEach((score, index) => {
  console.log(`Player ${index + 1}: ${score}`);
});


for(fruit of fruits){
    console.log(fruit); 
}

let text = ""; 
for (tool in tools){
    text += tool+ ","; 
}

//nested accesing of elements 
let x = "";
let models= ""; 
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x += myObj.cars[i].name+", ";
  for (let j in myObj.cars[i].models) {
    models += myObj.cars[i].models[j] + ", ";
  }
}

// Array Search Methods 

const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
fruits.includes("Mango"); // is true

fruits.indexOf("Mango"); //returns the index of the first instance of the object found 
fruits.lastIndexOf("Apple"); //returns the index of the last element matched 

let bigFruits = fruits.find(myFunction);
function myFunction(value, index, array){
    return array[index] > 5; 
}

fruits.pop();

fruits.reverse(); //reverses the array in place 
fruits.sort(); //sorts the array in default ascending order in place
fruits.sort().reverse(); //descending order in place 


const sortedFruits = fruits.toSorted(); 

//The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

//Numeric sort 
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value



