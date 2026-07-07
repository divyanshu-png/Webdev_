//THE JS ITERATORS

/* \
The iterator protocol defines how to produce a sequence of values from an object.
An object becomes an iterator when it implements a next() method.
The next() method must return an object with two properties:
.> value (the next value)
.> done (true or false)

Technically, iterables must implement the Symbol.iterator method.
Conversely we can say that JS iterable is an object that has a Symbol.iterator method.
In JavaScript the following are iterables:

>Strings
>Arrays
>Typed Arrays
>Sets
>Maps

\ */

myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n , done:done};
    }
  };
}
//Helper Functions are introduced in JS to help enhance the fucntionality of iterators in JS 

/*
drop()	    Returns an iterator that skips a specified number of elements before yielding the rest

every()	    Returns true if all elements satisfy a test function
filter()	Returns an iterator containing elements that satisfy a filter function

find()	    Returns the first element that satisfies a test function
flatMap()	Returns an iterator by mapping each element and then flattening the results

forEach()	Executes a function once for each element in the iterator.
from()	    creates an iterator object from an iterable
map()	    Returns an iterator with all elements transformed by a map function

reduce()	Applies a reducer function against each element to reduce it to a single value
some()	    Returns true if at least one element satisfy a test function
take()	    Returns an iterator that yields a specified number of elements
*/

/*
Generator Function and Generator Objects : 
We observe that JS function can return only one value. JS Generator Fucntion skips the classical return and is used to return multiple values. 
JS Generator Function can yeild a stream of data, it can be paused and resumed using supported methods as well. 

When called, a generator function returns a Generator Object, not a direct value: {value:1, done:false}
This object looks like an Iterable object return from the next method and indeed is anm iterable, which can be iterated using the for..of loops 


*/


//syntax 

function* myGenerator(){
    yield 'First Step';
    yield 'Second Step';
    return 'Finished';
}

const steps = myGenerator() ; 

console.log(steps.next()); 
console.log(steps.next()); 
console.log(steps.next()); 


//why are Generators used???

/*
Memory Efficiency (Lazy Evaluation): If you are reading a dataset with millions of rows from a database, creating an array causes high memory spikes. Generators compute or fetch each item only when requested, keeping memory footprint incredibly low.

Infinite Data Streamsdr: You can create infinite loops (like unique ID generation or infinite pagination scrolls) that do not freeze the browser because the loop pauses after each step.
*/