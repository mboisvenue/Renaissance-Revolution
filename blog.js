const newPostOpen = document.getElementById('new-post-form');
const modalOpen = document.getElementById('new-post-open');

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
