let slideIndex = 1;
let slideRevIndex = 1;
let slideLastIndex = 1;
showSlides(slideIndex);
showReviewSlides(slideRevIndex);
showLastSlides(slideLastIndex);
function plusslides(n) {
    showSlides(slideIndex += n);
}

function plusRevSlides(n) {
    showReviewSlides(slideRevIndex += n);
}
function plusLastSlides(n) {
    showLastSlides(slideLastIndex += n);
}
function currentReviewSlide(n) {
    showReviewSlides(slideRevIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slides");

    if (n>slides.length){
        slideIndex=1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }

    slides[slideIndex-1].style.display = "block";
}

function showReviewSlides(n) {
    let i;
    const slides_rev = document.getElementsByClassName("review_slide");
    var dots = document.getElementsByClassName("dot")

    if (n>slides_rev.length){
        slideRevIndex=1
    }
    if (n < 1){
        slideRevIndex = slides_rev.length
    }
    for (i=0; i<slides_rev.length; i++){
        slides_rev[i].style.display="none";
    }
    for (i = 0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace("active", "")
    }

    slides_rev[slideRevIndex-1].style.display = "block";
    dots[slideRevIndex-1].className += " active";
}
function showLastSlides(n) {
    let i;
    const slides_last = document.getElementsByClassName("slider_last");

    if (n>slides_last.length){
        slideLastIndex=1
    }
    if (n < 1){
        slideLastIndex = slides_last.length
    }
    for (i=0; i<slides_last.length; i++){
        slides_last[i].style.display="none";
    }

    slides_last[slideLastIndex-1].style.display = "block";
}