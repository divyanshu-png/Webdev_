//Closures make it possible for a function to have "private" variables.

//A closure is created when a function remembers the variables from its outer scope, even after the outer function has finished executing.

function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const add = myCounter();
add();
add();
add();

// the counter is now 3