// =========================================
// LOADER
// =========================================

window.addEventListener('load', () => {

    const loader =
    document.getElementById('loader');

    // Espera 8 segundos
    setTimeout(() => {

        loader.classList.add('hide-loader');

    }, 7000);

});

// =========================================
// NAVBAR SCROLL
// =========================================

const navbar =
document.getElementById('navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.classList.add('navbar-scrolled');

    } else {

        navbar.classList.remove('navbar-scrolled');
    }

});

// =========================================
// PROGRESS BAR
// =========================================

const progressBar =
document.getElementById('progress-bar');

window.addEventListener('scroll', () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / height) * 100;

    progressBar.style.width =
    progress + '%';

});

// =========================================
// CUSTOM CURSOR
// =========================================

const cursor =
document.querySelector('.custom-cursor');

// =========================================
// CUSTOM CURSOR
// =========================================

const cursor =
document.querySelector('.custom-cursor');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', e => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateCursor(){

    cursor.style.transform =
    `translate(${mouseX}px, ${mouseY}px)`;

    requestAnimationFrame(animateCursor);
}

animateCursor();

// =========================================
// GSAP ANIMATIONS
// =========================================

gsap.from('.hero-content', {

    y: 80,

    opacity: 0,

    duration: 1.2
});

gsap.from('.floating-image', {

    x: 100,

    opacity: 0,

    duration: 1.5
});