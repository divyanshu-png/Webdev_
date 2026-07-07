//Math is an built in object in JS that doesn't require the new keyword

//constants in Math

Math.E ; //eulers' constant 
Math.PI; //PI value
Math.SQRT2 //square root of 2 
Math.SQRT1_2 //square root of 1/2 

Math.LN10; //Stores the natural log of 10
Math.LN2; //stores the natural log of 2

Math.LOG10E; // Returns the value of log base 10) of e
Math.LOG2E; //Returns the value of log base 2 of e 

//Number to integer --to round a float number

Math.round(2.455); //rounds it to the nearest integer 
Math.floor(2.544); //rounds it to the nearest integer less than the value
Math.ceil(5.345); //rounds it to the nearest integer greater than the value/ number 

Math.trunc(3.44556); //removes the trailing decimal parts in a float number returning only the integral part 

//Other math functions 

Math.sign(-445); //returns -1 if a negative number is used as input, 0 if the number i =s 0 and +1 if the number is positive

Math.pow(33, 3); //returns 33^3

Math.sqrt(45); //returns the square root of 45 

Math.abs(-72.56); //returns the absolute or the positive value of the input

Math.random() ; //returns an abritrary number between 0 and 1 not reachinng one 

Math.cos(34.5); Math.sin(445); //returns the trigonometric values between 1 and -1 where the angle is given in radians 


//This JavaScript function always returns a random integer between min (included) and max (excluded):
function getRandomVar(min, max){
    return Math.floor(Math.random()*(max-min)) +min; 
}

//This JavaScript function always returns a random integer between min and max (both included):
function getRandomVar(min, max){
    return Math.floor(Math.random()*(max - min +1 )) +min; 
}
