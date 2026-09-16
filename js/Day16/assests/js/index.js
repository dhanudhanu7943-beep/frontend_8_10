let para=document.getElementById("para")
let btn=document.getElementById("btn")

btn.addEventListener("click", ()=>{
    
    para.classList.toggle("show");

    document.getElementById("box").classList.add("active");
})




let box1=document.getElementById("box1")
let btn1=document.getElementById("btn1")

btn1.addEventListener("click", ()=>{
    
    text.classList.toggle("show");

    box1.classList.remove("active");
})



let card=document.getElementById("card")
let button=document.getElementById("button")
button.addEventListener("click",()=>{
    card.classList.toggle("dark")
})
