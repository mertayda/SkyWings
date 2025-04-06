const commentsContainer = document.querySelector(".comments-container");
const commentCard = document.querySelectorAll(".comment-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const hamburgerBtn = document.querySelector(".hamburger-btn")
const nav = document.querySelector("nav")
const navHeader = document.querySelector(".nav-header")
const navItems = document.querySelector(".nav-links")


const destinationCarousel = document.querySelector(".destination-carousel")
const destinationCard = document.querySelectorAll(".destination-card")
const destinationNext = document.querySelector(".destination-next")
const destinationPrev = document.querySelector(".destination-prev")


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

hamburgerBtn.addEventListener("click", () => {
    navItems.classList.toggle("active")
})

// Destination carousel 

let destinationIndex = 0
let destinationCardIndex = destinationCard.length
let destinationCardWidth = destinationCard[0].offsetWidth

function updateDestination(){
    let destinatinWidthSum = -destinationIndex * destinationCardWidth
    destinationCarousel.style.transform = `translateX(${destinatinWidthSum}px)`
}



function destinationShowCase(){
   
    if(destinationIndex < destinationCardIndex - 1 ){
        destinationIndex ++;

         
    } else{
        destinationIndex = 0;
    }

    updateDestination()
}


function destinationShowCaseBack(){
   
    if(destinationIndex > 0 ){
        destinationIndex--;

         
    } else{
        destinationIndex = destinationCardIndex - 1
    }

    updateDestination()
}


destinationNext.addEventListener("click", destinationShowCase)
destinationPrev.addEventListener("click", destinationShowCaseBack)