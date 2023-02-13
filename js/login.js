// step-1: add Click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get  password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    //DANGER: DO NOT VERIFY email password on the clint side
    // Step-4: verify email and password
    if(email === 'baper@bank.com' && password === '13579'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vule gesos!! Toke ami tejjo sontangosona korlam.')
    }
})