hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}


function scrollToTop() { 
    $(window).scrollTop(0); 
} 

