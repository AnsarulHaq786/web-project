let container=document.querySelector(".container");
let btns=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let turnO=true;
let winPattern=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
];
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turnO){
            btn.innerText='O';
            turnO=false;
        }
        else{
            btn.innerText='X';
            turnO=true;
        }
        btn.setAttribute("disabled", true);
        checkWinner();
    })
})
const checkWinner=()=>{
    for(let pattern of winPattern){
        let p1=btns[pattern[0]-1].innerText;
        let p2=btns[pattern[1]-1].innerText;
        let p3=btns[pattern[2]-1].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                winner(p1);
                resetGame();
            }
        }
    }
}
const resetGame=()=>{
    btns.forEach((btn)=>{
        btn.innerText="";
        btn.removeAttribute("disabled");
    }
)}
const winner=(p1)=>{
    const msg = document.querySelector(".msg");
    container.style.display='none';
    msg.innerText = `${p1} is winner`;
    msg.style.display='flex';
    setTimeout(() => {
        container.style.display='flex';
        msg.style.display = 'none';
    }, 1000);
}
resetBtn.addEventListener("click",()=>{
    resetGame();
})