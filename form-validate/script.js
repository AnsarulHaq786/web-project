var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error");
var emailError=document.getElementById("email-error");
var messegeError=document.getElementById("messege-error");
var submitError=document.getElementById("submit-error");

function handleName(){
    var nameInput=document.getElementById("name-input").value;
    if(nameInput.length==0){
        nameError.innerHTML="name is required!";
        return false;
    }
    if(!nameInput.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        nameError.innerHTML="write full name!";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function handlePhone(){
    var phoneInput=document.getElementById("phone-input").value;
    if(phoneInput.length==0){
        phoneError.innerHTML="phone is required!";
        return false;
    }
    if(phoneInput.length!=10){
        phoneError.innerHTML="10 digits please!";
        return false;
    }
    if(!phoneInput.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="only number please!";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function handleEmail(){
    var emailInput=document.getElementById("email-input").value;
    if(emailInput.length==0){
        emailError.innerHTML="email is required!";
        return false;
    }
    if(!emailInput.match(/\S+@\S+\.\S+/)){
        emailError.innerHTML="invalid email!";
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function handleMessege(){
    var messegeInput=document.getElementById("messege-input").value;
    var required=11;
    var left=required-messegeInput.length;
    if(left>0){
        messegeError.innerHTML=left+" more character required!";
        return false;
    }
    messegeError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!handleName() || !handlePhone() || !handleEmail() || !handleMessege()){
        submitError.style.display="block";
        submitError.innerHTML="please fix above errors!";
        setTimeout(function (){
            submitError.style.display="none";
        },1000);
        return false;
    }
    else{
        var form=document.getElementById("form");
        form.style.display="none";
        var feed=document.getElementById("feed");
        feed.style.display="block";
        setTimeout(function (){
            form.style.display="block";
            feed.style.display="none";
        },2000);
        return false;
    }
}