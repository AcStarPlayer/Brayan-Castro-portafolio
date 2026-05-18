// =========================
// PRELOADER PREMIUM
// =========================

window.addEventListener("load", () => {

    const preloader =
    document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 3000);

});

// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target =
        +counter.getAttribute('data-target');

        const c =
        +counter.innerText;

        const increment =
        target / 100;

        if(c < target){

            counter.innerText =
            `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

// =========================
// CONTACT FORM EMAILJS
// =========================

emailjs.init("QE9MFjled3V_Kwvwr");

const contactForm =
document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_7o3etze", // SERVICE ID
        "template_efg840g",  // TEMPLATE ID
        this
    )

    .then(() => {

        alert("Mensaje enviado correctamente 🚀");

        contactForm.reset();

    })

    .catch((error) => {

        console.log(error);

        alert("Error al enviar el mensaje ❌");

    });

});

// =========================
// MENU MOBILE
// =========================

const menuToggle =
document.getElementById('menu-toggle');

const navLinks =
document.getElementById('nav-links');

const navItems =
document.querySelectorAll('.nav-links a');

// ABRIR / CERRAR MENU

menuToggle.addEventListener('click', () => {

    menuToggle.classList.toggle('active');

    navLinks.classList.toggle('active');

});

// CERRAR AL DAR CLICK EN LINK

navItems.forEach(link => {

    link.addEventListener('click', () => {

        menuToggle.classList.remove('active');

        navLinks.classList.remove('active');

    });

});

// CERRAR SI SE HACE CLICK FUERA

document.addEventListener('click', (e) => {

    const isClickInsideMenu =
    navLinks.contains(e.target);

    const isClickButton =
    menuToggle.contains(e.target);

    if(
        !isClickInsideMenu &&
        !isClickButton
    ){

        menuToggle.classList.remove('active');

        navLinks.classList.remove('active');

    }

});