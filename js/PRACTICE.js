const nums = [10, 2, 50, 5, 50, 1, 106, 66, 11, 3, 70, 4];

const ascendingNums = nums.toSorted((a, b) => a - b); 
const descendingNums = nums.toSorted((a,b)=> b-a); 

console.log(ascendingNums); 
console.log(descendingNums); 

//array to an object with Id and item feilds where id is auto incrementing 

const objectNums = nums.map((element, index) => ({
  id: index + 1,
  item: element
}));

console.log(objectNums);

//No.3 in ascending and descnding
console.log(ascendingNums[2]);
console.log(descendingNums[2]); 

//remove first two elements in the ARRAY 
let dummyArray = nums.slice(0, nums.length); 

//removes the first two items 
dummyArray.shift();
dummyArray.shift(); 

//removes the last two items 
dummyArray.pop(); 
dummyArray.pop(); 

// 7.	Separate each array element with #,
const seperatedNums = Array(nums.join("#")); 

//8.	Find the sum of the items from point no. 3.
let count = 0 ; 
for(let i= 2; i<objectNums.length; i++ ){
    count+= objectNums[i].item; 
}
console.log(count); 

//9.	Find the sum of the items from Point 3, from item 10 to item 70.

let countDiff =0 ; 

for(let i= 0; i<objectNums.length; i++ ){
    if(objectNums[i].id < objectNums.length){
    countDiff+= objectNums[i].item; 
    }
}
console.log(countDiff); 

//10.	Create a new separated array for even and odd items.

const evenNums =[]; 
const oddNums = []; 

for(ele of nums){
    if(ele%2===0){
        evenNums.push(ele); 
    }
    else{
        oddNums.push(ele); 
    }
}
console.log(evenNums);
console.log(oddNums);



userString = "https://cfpp.nic.in/#/RMS/2026-2027/1/2"; 

//11.	Identify the data type of the first and last characters in the given string.
typeof(userString[0]); 
typeof(userString[-1]); 

//12.	Identify the characters on either side of : in the given string.

seperatedString = userString.split(":");//returns an array of the string on either side of the element i.e : 

//13.	Add * before and after # in the given string.
newString = "*"+userString+"#"; 

//14.	Remove # and all the characters after it from the given string.

let z = userString.indexOf("#")
modifiedString = userString.substring(0, z); 

//15.	find out the RMS, 2026-2027, 1, 2 from the given string. 

console.log(userString.indexOf("RMS"));
console.log(userString.indexOf("2026-2027"));
console.log(userString.indexOf("/1"));
console.log(userString.indexOf("/2"));


//16.	Add /RMS/2026-2027/1/2 to the beginning and remove to last of the given string.
newString2 = "/RMS/2026-2027/1/2"+ userString.replace("/RMS/2026-2027/1/2", "")


//17.	Generate a comma-separated string from the characters of the given string.
commaSeperatedChars = userString.split(""); 

