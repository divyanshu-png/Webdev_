
const fromCurrDropdown = document.getElementById("options1");
const toCurrDropdown = document.getElementById("options2");

(async function fetchLocalJSON() {
    try {
        const response = await fetch('./currency_code.json'); 
        // Path relative to your HTML/server root
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log(Object.keys(data));
        for(element of Object.keys(data)){
            fromCurrDropdown.innerHTML += `<option value="${Object.values(data).element}"> ${Object.values(data).element} </option>`; 
            toCurrDropdown.innerHTML += `<option value="${data.element}"> ${data.element} </option>`; 

        }
    } catch (error) {
        console.error("Failed to fetch local JSON:", error);
    } finally{
        console.log("Succesfully completed the function to fetch data from the local JSON file.")
    }
})();


const inputElement = document.getElementById("enteredValue");
async function getCurrExchangeRate() {
    try{
        
        let fromCurr = fromCurrDropdown.value ; 
        const convertedValue = document.querySelector(".output-box"); 
        
        let toCurr = toCurrDropdown.value; 
        let value = inputElement.value ;         
        const rateText = document.querySelector(".rate-text"); 
        //using the Frankfurter API URL for API call
        let result = await fetch(`https://api.frankfurter.dev/v2/rates?base=${fromCurr}`);
        let data = await result.json(); 
        console.log(data) ; 
        for(const { date, base, quote, rate} of data){
            if ( quote == toCurr){
                console.log(rate);
                rateText.innerText += date + " is "+rate; 
                convertedValue.innerText += (" "+ value*rate) ; 
            }
        }
    }
    catch(err){
        console.log(err); 
    }
    finally{
        console.log("Api call succesfully executed. Exiting from the API calling function"); 
    }
}

document.querySelector(".btn-primary").addEventListener("click", getCurrExchangeRate); 