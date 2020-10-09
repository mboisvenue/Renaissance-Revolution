// variables for modal opening and closing
const forms = document.querySelectorAll('.form');
const modalOpen = document.querySelectorAll('.modal-open');

const signupForm = forms[0];
const loginForm = forms[1];

const openSignup = modalOpen[0];
const openLogin = modalOpen[1];

// variables for sign up page
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const savedEmail = document.getElementById('savedEmail');
const savedPassword = document.getElementById('savedPassword');

//variables for submittion btns
const signUpSubmit = document.getElementById('signup-submit');

// Adds users to localStorage

    users = [];

function addUser(user){

    users.push(user);

    
    localStorage.setItem('Users', JSON.stringify(users));
}

/*********** EVENT LISTENERS ************/

// open and close modals
signupForm.addEventListener('click', e=> {
    e.preventDefault();
    openSignup.style.display = "block";

});

loginForm.addEventListener('click', e=> {
    e.preventDefault();
    openLogin.style.display = "block";
});

window.addEventListener('click', e=>{
    if(e.target === openSignup){
        openSignup.style.display = "none";
    } else if(e.target === openLogin) {
        openLogin.style.display = "none";
    } else {
        return false;
    }
});


//sign up events

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.textContent = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    
    formControl.className = "form-control success";
}


function checkLength(input, min, max){
    if(input.value < min){
        showError();
    }

}

function isValidEmail(){

}


signUpSubmit.addEventListener('click', e => {

    //Sets user info to array
    let user = {
        fName: fName.value, 
        lName: lName.value, 
        email: email.value, 
        password: password.value
    };


    console.log(user); 

    addUser(user);
});





