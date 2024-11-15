
const scriptURL = 'https://script.google.com/macros/s/AKfycby7lrftv5Zz9ooPP67M5EZeF5PmllRTuYBE12Fb_oluFak7ZgfUn-o_SlvPjmzBEFOU/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML="Thank you for Subscribing!";
            setTimeout(function(){
               msg.innerHTML=""; 
            }, 2000)
            form.reset();
        }
        )
        .catch(error => console.error('Error!', error.message))
    })