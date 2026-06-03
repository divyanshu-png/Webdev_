
const btn = document.getElementById("btn1")

btn.addEventListener('click', ()=>{
    alert("Hello user!")
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.textContent="Magic Happened!!!"

}
); 

const box= document.getElementById("box"); 
box.addEventListener('mouseenter', ()=>{
    box.style.backgroundColor="lightgreen"; 
    }
);
box.addEventListener('mouseleave', ()=>{
    box.style.backgroundColor="white"; 
    }
); 


const form = document.getElementById("form1"); 
const name= document.getElementById("name"); 
const email= document.getElementById("email"); 
const password= document.getElementById("password"); 

form.addEventListener('input', (e)=>{
    e.preventDefault(); 
    console.log(email.value); 
    console.log(name.value); 

});

form.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    console.log(email.value); 
    console.log(name.value); 

});


// console.log(form); 
// console.log(email.value); 
// console.log(password);