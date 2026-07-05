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


//as already visible the elements are accessed in an array via indexing that takes a number from 0 to array.length-1

arr[2]; //returns "BMW"

//changing the already existing element in an array 
cars2[0] = "Opel";

//converting an array to string : 
