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
//there are in total 3 flags in the regex pattern we use regularly
/* other flags include : 
/d	Performs substring matches (new 2022)
/g	Performs a global match (find all)
/i	Performs case-insensitive matching
/m	Performs multiline matching
/s	Allows . (dot) to match line terminators (new 2018)
/u	Enables Unicode support (new 2015)
/v	An upgrade to the /u flag for better Unicode support (new 2025)
/y	Performs a "sticky" search (new 2015)
*/

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

pattern5 = /\d*/g; 
result3= text3.match(pattern5); //returns an array with one if the element as the found element 


//REGEX Assertions 

// Assertions are used to match boundaries and lookarounds
/*

^	String boundary	Matches the beginning of a string
$	String boundary	Matches the end of a string
\b	Word boundary	Matches the beginning or end of a word
(?=...)	Lookahead	Matches the subsequent string
(?<=...)Lookbehind	Matches the previous string

*/

text = "W3Schools Tutorials!!"
pattern6 = /^W3Schools/; 
result4 = text.match(pattern6); 
let result5= pattern6.test(text); //returns true 

const pattern7 = /W3Schools$/;
let text = "Hello W3Schools";
let result = pattern.test(text); // true

//Character Classes 
//charcater classes are characters enclosed in the [] brackets that matches any character from a set within brackets
/*
[a]	    Matches the character between the brackets
[abc]	Matches all characters between the brackets
[a-z]	Matches all characters in the range from a to z
[0-9]	Matches all characters in the range from 0 to 9
*/

let text = "More than 1000 times";
const pattern = /[0-9]/g;
let result = text.match(pattern);

let text = "My number is given as : 1234567890" ; 
let pattern = /[0-9]*/g; 
let result = text.match(pattern);
for(element in result){
    if(element!= null){
        console.log(element);
    }
}

