const forms = document.querySelectorAll('.form');
const signUpContainer = document.getElementById('signup-container');

var signupBtn = forms[0];
var loginBtn = forms[1];


signupBtn.addEventListener('click', e=> {
    e.preventDefault();
    signUpContainer.style.visibility = "visible";
});

loginBtn.addEventListener('click', e=> {
    e.preventDefault();
});

