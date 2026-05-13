// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de entrada al hacer scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Aplicar el observador a cada sección
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // 2. Scroll suave para los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// ======================
// LOADER
// ======================

window.addEventListener('scroll', () => {

    const scrollTop =
    document.documentElement.scrollTop;

    // NAVBAR
    if(scrollTop > 50){
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }

    // PROGRESS
    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / height) * 100;

    progressBar.style.width =
    progress + '%';

});