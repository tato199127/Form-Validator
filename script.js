var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');

//show input message error
function showError(input, message){
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success
function showSuccess(input){
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, ' email is not valid');
    }
}

//check input lenght
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, getFiledName(input) + ' must be least ' + min + ' characters');
    }else if(input.value.length > max){
        showError(input, getFiledName(input) + ' must be less than ' + max + ' characters');
    }else{
        showSuccess(input);
    }
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
       if(input.value.trim() === ''){ 
           showError(input, getFiledName(input) + ' is required');
       }else{
           showSuccess(input);
       }
    });
}

// check password match
function checkPasswordsMatch(input1, input2){
    if (input1.value !== input2.value) {
        showError(input2, ' password is not match');
    }
}

//Get FieldName
function getFiledName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



//Events Listener
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 15);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});


