// Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.zIndex = '-1';
document.body.appendChild(renderer.domElement);

// Add geometries
const geometry1 = new THREE.SphereGeometry(1, 32, 32);
const material1 = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
const sphere = new THREE.Mesh(geometry1, material1);
sphere.position.set(-5, 0, -10);
scene.add(sphere);

const geometry2 = new THREE.BoxGeometry(2, 2, 2);
const material2 = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
const cube = new THREE.Mesh(geometry2, material2);
cube.position.set(5, 0, -10);
scene.add(cube);

camera.position.z = 5;

// Scroll reactive
let scrollY = 0;
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    sphere.rotation.x = scrollY * 0.01;
    cube.rotation.y = scrollY * 0.01;
    camera.position.y = scrollY * 0.001;

    // Parallax effect
    document.querySelectorAll('.parallax-bg').forEach((bg, index) => {
        const rate = (index + 1) * 0.4;
        bg.style.transform = `translateY(${scrollY * rate}px)`;
    });
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Set staggered animation delays for spans
document.querySelectorAll('.row1 span').forEach((span, index) => {
    span.style.animationDelay = (index * 0.1) + 's';
});
document.querySelectorAll('.row2 span').forEach((span, index) => {
    span.style.animationDelay = (index * 0.1) + 's';
});
document.querySelectorAll('.row3 span').forEach((span, index) => {
    span.style.animationDelay = (index * 0.1) + 's';
});
document.querySelectorAll('.row4 span').forEach((span, index) => {
    span.style.animationDelay = (index * 0.1) + 's';
});
document.querySelectorAll('.row5 span').forEach((span, index) => {
    span.style.animationDelay = (index * 0.1) + 's';
});

// Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});