// =========================================
// SCROLL TOP BUTTON
// =========================================

const scrollTopBtn = document.getElementById("scrollTopBtn");

const proyectoSection = document.getElementById("proyecto");

window.addEventListener("scroll", () => {

    const proyectoPosition =
        proyectoSection.offsetTop;

    if(window.scrollY > proyectoPosition){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

// SCROLL HACIA ARRIBA

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const menuToggle =
document.getElementById("menuToggle");

const menu =
document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    menu.classList.toggle("active");

});

// CERRAR AL HACER CLICK

document.querySelectorAll(".menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");

        menu.classList.remove("active");

    });

});