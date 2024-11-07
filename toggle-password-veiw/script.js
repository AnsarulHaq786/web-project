let eyeIcon = document.getElementById("eye-icon");
let password = document.getElementById("password");

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeIcon.src = "media/eye-open.png"
    }
    else{
        password.type = "password";
        eyeIcon.src = "media/eye-close.png"
    }
}