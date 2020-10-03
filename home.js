// variables for modal opening and closing
const forms = document.querySelectorAll('.form');
const modalOpen = document.querySelectorAll('.modal-open');

const signupBtn = forms[0];
const loginBtn = forms[1];

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
signupBtn.addEventListener('click', e=> {
    e.preventDefault();
    openSignup.style.display = "block";

});

loginBtn.addEventListener('click', e=> {
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

signUpSubmit.addEventListener('click', e => {
    e.preventDefault();

    //Sets user info to array
    let user = {
        fName: fName.value, 
        lName: lName.value, 
        email: email.value, 
        password: password.value
    };


    console.log(user); 

    addUser(user);
    clearInputs();
});

function clearInputs(){
    fName.value = ''; 
    lName.value = ''; 
    email.value = '';
    password.value = '';
    password2.value = '';
    savedEmail.value = '';
    savedPassword.value = '';
}


