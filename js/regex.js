/*\ 
REGULAR EXPRESSIONS

A regular expression is a sequence of characters that forms a search pattern. JS Regex is an object for handling regular expressions

// regex can be used for: Text Searching, replacing that Searched Text,  and Text Validation (for example email and phone number)

Syntax : 

let text = ""; /whatever string you need to search in
let result = text.match(regexp)

where the regex is given as  :  /patter/modifier flags 
\*/

// all regexp are enclosed within the backslashes 
regexp = /W3Schools/ ; 
regexp2 = /w3Schools/i ; //the i repsresents the case insensitivity 


//methods in Regex

let text = "Hello everyone! I am a student studying from W3Schools and my number is 1234567890"; 

let wordPattern = /W3Schools/;
let result1 = text.search(wordPattern);  //returns the index at which the reuslt is found
result1 = text.match(wordPattern); //returns an array of the first result that are found in the text. 

result1= text.replace(wordPattern, "MDN DOCS"); //replaces the first instance of the matched string with the provided string of replacement

//REGEX Alterations (or)
//in regex an alteration is denoted with a pipe operator or the vertical line
let text2 = "Black, white, red, green, blue, yellow.";
let result2 = text.match(/red|green|blue/g);

// Modifier Flags in pattern 
//there are in total 3 flags in the regex pattern we can use 

let pattern2 = /W3sCHOOLS/i; //Case insensitive 
let pattern3 = /W3Schools/g; //Global pattern , used with findAll and matchAll to retrieve all the instnace of the pattern 
let pattern4  = /W3Schools/u; //Enables Unicode support 

//Metacharacters in Regex 

let pattern5 = /\w/; //used to represent and match single words (letter)
let pattern6 = /\d/; //used to represent and match single digits 
let pattern7 = /\s/; //used to represent and match spaces 


let text3= "Give your 100%!"; 
pattern5 = /\d/g;
let result3 = text3.match(pattern5); //returns a list of the individual elements of a number identified

//to find we use the Quantifiers that are able to convert the single digit and letter into a sequence 

/*the quantifiers are : 
x+ ==> at least one occurances
x* ==> zero or more occurances
x? ==> zero or one occurance

*/

pattern5 = /\d*/; 
result3= text3.match(pattern5); 