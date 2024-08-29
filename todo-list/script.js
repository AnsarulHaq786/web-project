const inputText = document.querySelector('#input-text');
const listContainer = document.querySelector('#list-container');
const btn = document.querySelector('#btn');

function addToList(){
    if(inputText.value === ''){
        alert("you didn't specify any task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);