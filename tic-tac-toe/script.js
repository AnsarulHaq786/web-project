
//incomplete|errors

let boxes=document.querySelectorAll(".boxes");
let one=document.getElementById("1");
let two=document.getElementById("2");
let three=document.getElementById("3");
let four=document.getElementById("4");
let five=document.getElementById("5");
let six=document.getElementById("6");
let seven=document.getElementById("7");
let eight=document.getElementById("8");
let nine=document.getElementById("9");
let turn='O';
let btn=document.getElementsByClassName("btn");
btn.addEventListener("hover",()=>{
    btn.style.backgroundColor="red";
})
btn.addEventListener("click",()=>{
    console.log("button clicked!");
    if(turn=='O'){
        one.innerText('O');
        turn='X';
    }
    else{
       two.innerText('X');
       turn='O'; 
    }
})