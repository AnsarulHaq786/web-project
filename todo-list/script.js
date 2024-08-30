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
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function resotreData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
resotreData();