let btn=document.getElementById("btn");
let body=document.querySelector("body");
let mode="light";
btn.addEventListener("click",()=>{
    if(mode==="light"){
            body.style.backgroundColor="black";
            btn.innerText="Light Mode";
            mode="dark";
        }
    else{
        body.style.backgroundColor="white";
            btn.innerText="Dark Mode";
            mode="light";
        }
})