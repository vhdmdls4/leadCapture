/* 

const submitButton = document.querySelector('button[class=button');
const forms = document.querySelector('form');
var invalidInput = document.querySelectorAll('input');

function invalidatingInput(){
    for(i=0;i<invalidInput.length;i++){
        invalidInput[i].setAttribute("id","invalidInput");
    }
}

function checkInput(){
    for(i=0;i<invalidInput.length;i++){
        if(invalidInput[i].checkValidity()){
            invalidInput.removeAttribute('invalidInput');
        }
    }
}

function submitForm(){
    if(forms.checkValidity()){
        console.log('valid');
        forms.submit;
    } else {
        console.log('not valid');
        invalidatingInput();
    };

}

checkInput();

/*
const regExName = /[a-zA-Zà-úÀ-Ú0-9]/;
const regExEmail = /[/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const invalidInput = document.querySelectorAll('input:invalid');

const namePattern = document.querySelector('input[name=name]');

/*

or 

(?=.*\d)          // should contain at least one digit
(?=.*[a-z])       // should contain at least one lower case
(?=.*[A-Z])       // should contain at least one upper case
[a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
*/
/*
submitButton.addEventListener("click", submitForm());

submitButton.addEventListener("click", validateForm());

function submitForm(){

}

function validateName(){
    let name = document.querySelector('input[name=name]');
    if(name.value != regExName){
        alert("Name required");
        name.focus;
    }
}

//submitButton.addEventListener("click",validateForm);



function validateForm(){
    validateName();
    let lastname = document.querySelector('input[name=lastaname]');
    let email = document.querySelector('input[name=email]');
    let password = document.querySelector('input[name=password]');

}


/*
function validateLastName(){
    let lastname = document.querySelector('input[name=lastname]');
    if(lastname.value === ""){
        alert("Lastname required");
        lastname.focus;
    }
}

function validateEmail(){
    let email = document.querySelector('input[name=email]');
    if(email.value === ""){
        alert("email required");
        email.focus;
    }
}

function validatePassword(){
    let password = document.querySelector('input[name=password]');
    if(password.value === ""){
        alert("password required");
        password.focus;
    }
}

function submitForm(){

}

*/

