// =========================================
// FILTROS
// =========================================

const filterButtons =
document.querySelectorAll('.filter-btn');

const portfolioCards =
document.querySelectorAll('.portfolio-card');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        // ACTIVE BUTTON
        filterButtons.forEach(btn =>
            btn.classList.remove('active'));

        button.classList.add('active');

        const filter =
        button.getAttribute('data-filter');

        portfolioCards.forEach(card => {

            const category =
            card.getAttribute('data-category');

            if(filter === 'all' || category === filter){

                card.style.display = 'block';

            } else {

                card.style.display = 'none';
            }

        });

    });

});

// =========================================
// MODAL
// =========================================

const modal =
document.getElementById('portfolioModal');

const modalImage =
document.getElementById('modalImage');

const modalTitle =
document.getElementById('modalTitle');

const modalDescription =
document.getElementById('modalDescription');

const modalTech =
document.getElementById('modalTech');

const closeModal =
document.querySelector('.close-modal');

// DATA

const projects = {

    project1: {

        title:
        'Sistema Contable & Rutogramas',

        image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692',

        description:
        `
        Sistema empresarial desarrollado para optimizar
        procesos comerciales, gestión de rutas y
        automatización operativa.

        Implementaciones principales:

        • Backend REST con Node.js y Express
        • MongoDB para persistencia NoSQL
        • Autenticación JWT
        • Arquitectura desacoplada MERN
        • Dashboard analítico
        • Gestión dinámica de usuarios y operaciones

        Resultado:
        Reducción de procesos manuales y mejora
        de la organización operativa empresarial.
        `,
        
        tech:
        'React • Node.js • MongoDB • Express'
    },

    project2: {

        title:
        'E-commerce Autogestionable',

        image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f',

        description:
        'Plataforma e-commerce escalable con arquitectura desacoplada y administración avanzada.',

        tech:
        'React • PostgreSQL • Express • APIs REST'
    },

    project3: {

        title:
        'Videojuego 3D - Unity',

        image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e',

        description:
        'Desarrollo de mecánicas 3D, físicas avanzadas y modelado interactivo.',

        tech:
        'Unity • C# • Blender'
    }

};

// OPEN MODAL

document.querySelectorAll('.open-modal')
.forEach(button => {

    button.addEventListener('click', () => {

        const projectId =
        button.getAttribute('data-project');

        const project =
        projects[projectId];

        modalImage.src =
        project.image;

        modalTitle.textContent =
        project.title;

        modalDescription.textContent =
        project.description;

        modalTech.textContent =
        project.tech;

        modal.style.display = 'flex';

    });

});

// CLOSE MODAL

closeModal.addEventListener('click', () => {

    modal.style.display = 'none';

});

// CLOSE OUTSIDE

window.addEventListener('click', (e) => {

    if(e.target === modal){

        modal.style.display = 'none';
    }

});