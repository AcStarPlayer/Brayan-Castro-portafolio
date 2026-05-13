// =========================================
// MATRIX EFFECT
// =========================================

const matrixCanvas =
document.getElementById('matrixCanvas');

const matrixCtx =
matrixCanvas.getContext('2d');

matrixCanvas.width =
window.innerWidth;

matrixCanvas.height =
window.innerHeight;

const chars =
'アカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const letters =
chars.split('');

const fontSize = 14;

const columns =
matrixCanvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++){

    drops[x] = 1;
}

function drawMatrix(){

    matrixCtx.fillStyle =
    'rgba(0,0,0,0.04)';

    matrixCtx.fillRect(
        0,
        0,
        matrixCanvas.width,
        matrixCanvas.height
    );

    matrixCtx.fillStyle =
    '#836C4F';

    matrixCtx.font =
    fontSize + 'px monospace';

    for(let i = 0; i < drops.length; i++){

        const text =
        letters[
            Math.floor(
                Math.random() * letters.length
            )
        ];

        matrixCtx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if(
            drops[i] * fontSize >
            matrixCanvas.height &&
            Math.random() > 0.975
        ){

            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

// =========================================
// THREE JS BACKGROUND
// =========================================

const scene =
new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer =
new THREE.WebGLRenderer({

    canvas:
    document.getElementById('three-canvas'),

    alpha: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 1.5)
);

const geometry =
new THREE.TorusGeometry(
    10,
    3,
    16,
    100
);

const material =
new THREE.MeshBasicMaterial({

    color: 0x836C4F,

    wireframe: true
});

const torus =
new THREE.Mesh(
    geometry,
    material
);

scene.add(torus);

camera.position.z = 30;

function animate(){

    requestAnimationFrame(animate);

    torus.rotation.x += 0.003;

    torus.rotation.y += 0.004;

    renderer.render(scene, camera);
}

animate();

// =========================================
// UI SOUNDS
// =========================================

const hoverSound =
new Audio(
'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'
);

document
.querySelectorAll('.btn, .social-icon')
.forEach(item => {

    item.addEventListener('mouseenter', () => {

        hoverSound.volume = 0.1;

        hoverSound.play();
    });

});

// =========================================
// TERMINAL TYPING
// =========================================

const terminal =
document.querySelector('.terminal-active');

let visible = true;

setInterval(() => {

    terminal.style.opacity =
    visible ? '0.5' : '1';

    visible = !visible;

}, 600);