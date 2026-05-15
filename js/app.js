// =========================
// LOADER
// =========================

window.addEventListener('load', () => {

    const loader =
    document.getElementById('loader');

    setTimeout(() => {

        loader.classList.add('hide-loader');

    }, 2000);

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