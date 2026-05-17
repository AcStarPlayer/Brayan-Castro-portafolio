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