const newPostOpen = document.getElementById('new-post-form');
const modalOpen = document.getElementById('new-post-open');
const dateText = [...document.querySelectorAll('.date-posted')]

const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const year = new Date().getFullYear();
const currentDate = month + '/' + day + '/' + year;



console.log(currentDate);

function displayDate(){
    dateText.forEach(e => {
        e.innerText = currentDate;
    });
}

displayDate();








newPostOpen.addEventListener('click', e=>{
    e.preventDefault();
    modalOpen.style.display = "block";
});

window.addEventListener('click', e=>{
    if(e.target === modalOpen){
        modalOpen.style.display = "none";
    } else {
        return false;
    }
});
