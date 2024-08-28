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
    }
    inputText.value = '';
}