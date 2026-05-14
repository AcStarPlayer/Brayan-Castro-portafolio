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