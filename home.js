const forms = document.querySelectorAll('.form');
const modalOpen = document.querySelectorAll('.modal-open');

const fName = document.getElementById(;)

var signupBtn = forms[0];
var loginBtn = forms[1];

const openSignup = modalOpen[0];
const openLogin = modalOpen[1];

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


