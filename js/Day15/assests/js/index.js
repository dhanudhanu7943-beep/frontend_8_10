let para=document.getElementById("para")
let btn=document.getElementById("btn")


btn.addEventListener("click", ()=>{
    // btntittle.textContent= "loading";
     para.classList.toggle("show");
})


const tittle=document.getElementById("tittle")
const btn1=document.getElementById("btn1")
var colpse = false

   btn1.addEventListener("click",()=>{
    tittle.textContent="This is a Text"
    colpse =!colpse
    if(colpse){

        tittle.classList.toggle("css")
        tittle.classList.remove("green")
    }else{
       
        tittle.classList.toggle("green")
        tittle.classList.remove("css")
    }
})




// let para1 = document.getElementById("para1");

// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     para1.classList.toggle("show");
// });
