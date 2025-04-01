let index = 0;

function showSlide() {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;
    
    document.querySelector(".slide-container").style.transform = `translateX(${-index * slideWidth}px)`;
}

function next_Slide() {
    const slides = document.querySelectorAll(".slide");
    if (index < slides.length - 1) {
        index++;
    } else {
        index = 0;
    }
    showSlide();
}

function prev_Slide() {
    if (index > 0) {
        index--;
    } else {
        index = document.querySelectorAll(".slide").length - 1;
    }
    showSlide();
}

setInterval(nextSlide, 6000);
