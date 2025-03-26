const commentsContainer = document.querySelector(".comments-container");
const commentCard = document.querySelectorAll(".comment-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let commentCardIndex  =  commentCard.length
let commentCardWidth = commentCard[0].offsetWidth

function updateComments(){
    let translateValue = -currentIndex * commentCardWidth;
    commentsContainer.style.transform = `translateX(${translateValue}px)`
}

function moveRight(){
    if(currentIndex < commentCardIndex -1){
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    updateComments()
}


function moveLeft(){
    if(currentIndex > 0){
        currentIndex--
    } else{
        currentIndex = commentCardIndex - 1
    }
    updateComments()
}

updateComments();

nextBtn.addEventListener("click",moveRight)
prevBtn.addEventListener("click",moveLeft)