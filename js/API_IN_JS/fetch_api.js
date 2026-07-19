/*
FETCH API
The fetch api provides an interface for fetching (sending and recieving) resources. 
It uses the Request and response objects. 
The fetch() method is used to fetch a resource (data) that returns a promise

 1.  A fetch() request first resolves as soon as the server responds with headers. To read the actual data body, you must call an additional asynchronous method like .json(), .text(), or .blob()

 2.  The promise will not reject if the server returns an HTTP error status like 404 or 500. It only rejects on actual network failures (e.g., internet disconnection). You must manually check if response.ok is true.

 3. We have to manually handle timeout for requests using the AbortController. AbortController is a built-in JavaScript object that allows you to cancel (abort) one or more Web requests before they finish executing
*/

const API_KEY = "6f4ff746de21a264643978185fc06d3b"; 
const url = `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}`; 

async function getDetailsFlight() {
    try {
        const response = await fetch(url, {method: 'GET'});
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Read the JSON data from the response body
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error("Error fetching flight data:", error);
    }
}

getDetailsFlight(); 

 
