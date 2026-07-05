//There are a total 9 ways of declaring a date 

new Date(); 
new Date("2026-07-05"); 
new Date(2026,7); 
//other method simply keep expanding time units in hours, minutes, seconds and milliseconds
//JavaScript counts months from 0 to 11: January = 0. December = 11.
//JavaScript stores dates as number of milliseconds since January 01, 1970. Zero time is January 01, 1970 00:00:00 UTC.

//JavaScript will (by default) output dates using the toString() method. 
const d = new Date();
d.toString();

//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

let msec = Date.parse("March 21, 2026"); //returns the time in milliseconds from the 1 jan 1970 to the date in the string 

//DATE get methods

let obj = new Date(); 
let date = obj.getDate(); 
let day = obj.getDay(); //assigns value 0 to 6 0 being sunday and 6 being saturday
let month = obj.getMonth(); //return the month as ranging from 0 to 11
let year = obj.getFullYear();  //the get year is depriciated as it returned the 2 digit year

let ms = Date.now(); //returns the miliseconds from the 1 jan 1970 to the current date

//The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
let diff = d.getTimezoneOffset();

//DATE set methods

let d =new Date(); 
d.setFullYear("2026"); //sets the year of an date object 
d.setFullYear(2025, 3, 11)// can optionally set the month and date 

//comparing two dates 

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text); 


//TEMPORALS 