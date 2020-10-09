const newPostOpen = document.getElementById('new-post-form');
const modalOpen = document.getElementById('new-post-open');
const dateText = [...document.querySelectorAll('.date-posted')];

//variables for adding blog post
const submitPost = document.getElementById('new-post-btn');
const allPosts = [...document.querySelectorAll('.post')];
//variable to access blog title and body values
const postTitle = document.getElementById('post-title');
const postBody = document.getElementById('post-body');


// Establishes the current date
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const year = new Date().getFullYear();
const currentDate = month + '/' + day + '/' + year;



// *TO BE CHANGED* displays current date to all divs
function displayDate(){
    dateText.forEach(e => {
        e.innerText = currentDate;
    });
}

displayDate();



/******** Event listenser ********/


//open and close new post menu
newPostOpen.addEventListener('click', e=>{
    e.preventDefault();

    postTitle.value = '';
    postBody.value = '';

    modalOpen.style.display = "block";
});

window.addEventListener('click', e=>{
    if(e.target === modalOpen){
        modalOpen.style.display = "none";
    } else {
        return false;
    }
});

// Write and add new post

submitPost.addEventListener('click', e =>{
    e.preventDefault();

    modalOpen.style.display = "none";

    const title = postTitle.value;
    const body = postBody.value;


    if(!title){
        return;
    } else  if(!body) {
        return;
    } else {

    const newPost = document.createElement("div");

    newPost.classList.add('container', 'blog-container', 'blog-click');
 
    newPost.innerHTML =`
    <div class="blog-post">
        <div class="blog-title">
            <h3>${title}</h3>
            <h4 class="date-posted">01/04/1997</h4>
        </div>
        <hr>
        <div class="blog-body">
            <p>${body}</p>
        </div>
    </div>
    `;    
}

    document.getElementById('wrapper').insertBefore(newPost, allPosts[0]);
});