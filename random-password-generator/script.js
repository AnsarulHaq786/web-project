const passwordText = document.getElementById("password");
const length = 16;
const uprAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lwrAlpha = "abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
const signs = "!@#$%^&*()-=_+";
const allA = uprAlpha+lwrAlpha+numeric+signs;

function generatePassword(){
    let password = "";
    password += uprAlpha[Math.floor(Math.random() * uprAlpha.length)];
    password += lwrAlpha[Math.floor(Math.random() * lwrAlpha.length)];
    password += numeric[Math.floor(Math.random() * numeric.length)];
    password += signs[Math.floor(Math.random() * signs.length)];
    
    while(length > password.length){
        password += allA[Math.floor(Math.random() * allA.length)];
    }
    passwordText.value = password;
}

function copyFunction(){
    passwordText.select();
    document.execCommand();
}