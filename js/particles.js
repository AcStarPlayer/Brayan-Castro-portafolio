if(window.innerWidth < 768){

    document.getElementById('particles-js')
    .style.display = 'none';

} else {

tsParticles.load("particles-js", {

    background: {
        color: {
            value: "transparent"
        }
    },

    fpsLimit: 60,

    particles: {

        color: {
            value: "#836C4F"
        },

        links: {
            color: "#836C4F",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
        },

        move: {
            enable: true,
            speed: 1
        },

        number: {
            value: 50
        },

        opacity: {
            value: 0.3
        },

        size: {
            value: {
                min: 1,
                max: 5
            }
        }
    }
});

}