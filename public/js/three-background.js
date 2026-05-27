const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

// Particles

const particlesGeometry = new THREE.BufferGeometry();

const particlesCount = 5000;

const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.08,
  color: 0x38bdf8,
});

const particlesMesh = new THREE.Points(
  particlesGeometry,
  particlesMaterial
);

scene.add(particlesMesh);

function animate() {
  requestAnimationFrame(animate);

  particlesMesh.rotation.y += 0.0008;

  particlesMesh.rotation.x += 0.0003;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});