//with defination
// const passwordText = document.getElementById("password");
// const length = 16;
// const uprAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lwrAlpha = "abcdefghijklmnopqrstuvwxyz";
// const numeric = "0123456789";
// const signs = "!@#$%^&*()-=_+";
// const allA = uprAlpha+lwrAlpha+numeric+signs;

// function generatePassword(){
//     let password = "";
//     password += uprAlpha[Math.floor(Math.random() * uprAlpha.length)];
//     password += lwrAlpha[Math.floor(Math.random() * lwrAlpha.length)];
//     password += numeric[Math.floor(Math.random() * numeric.length)];
//     password += signs[Math.floor(Math.random() * signs.length)];
    
//     while(length > password.length){
//         password += allA[Math.floor(Math.random() * allA.length)];
//     }
//     passwordText.value = password;
// }

// function copyFunction(){
//     passwordText.select();
//     document.execCommand();
// }



//with api key
const apiKey = "your-api-key";
// login and use your api key
// you may find api key here
// https://api-ninjas.com/profile
// https://api-ninjas.com/api/passwordgenerator

const passwordText = document.getElementById("password");
function generatePassword() {
  const url = 'https://api.api-ninjas.com/v1/passwordgenerator?length=16';
  
  fetch(url, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.random_password);
    passwordText.value = data.random_password;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}