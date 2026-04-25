const canvas = document.getElementById("planetCanvas");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// 🌍 TEXTURE
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load(
  "https://threejs.org/examples/textures/earth_atmos_2048.jpg"
);

// 🌍 GEOMETRY
const geometry = new THREE.SphereGeometry(2, 64, 64);

// 🌍 MATERIAL
const material = new THREE.MeshStandardMaterial({
  map: earthTexture
});

// 🌍 MESH
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// 💡 LIGHTING (IMPORTANT)
const light = new THREE.PointLight(0xffffff, 2);
light.position.set(5, 3, 5);
scene.add(light);

// ambient
const ambient = new THREE.AmbientLight(0x404040, 1);
scene.add(ambient);

camera.position.z = 5;

// 🔄 ROTATION
function animate() {
  requestAnimationFrame(animate);

  earth.rotation.y += 0.002;

  renderer.render(scene, camera);
}

animate();
