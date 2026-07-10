document.addEventListener("DOMContentLoaded", ()=>{
    
    document.getElementById("changes").addEventListener("click", function(){
        document.getElementById("mainHeading").innerText = "HELLO FROM MODIFIED HEADING";
        document.getElementById("magicPara").style.color = "red";
        let imageSunrisse = document.getElementsByTagName("img")[0]; 
        imageSunrisse.style.visibility = "hidden"; 
    });

    let imageSunrisse = document.getElementsByTagName("img")[0];
    document.getElementById("revertChnages").addEventListener("click", function(){
        document.getElementById("mainHeading").innerText = "Hello Magic Heading";
        document.getElementById("magicPara").style.color = "black";
         
        imageSunrisse.style.visibility = "visible"; 
    });

    imageSunrisse.addEventListener("mouseenter", function(){
        imageSunrisse.style.height = "300px"; 
        imageSunrisse.style.boxShadow = "20px";
    });
    imageSunrisse.addEventListener("mouseleave", ()=>{
        imageSunrisse.style.height = "200px"; 
    }); 


}); 