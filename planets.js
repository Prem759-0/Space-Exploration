import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createPlanet(container) {

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // 🌍 EARTH
  const geometry = new THREE.SphereGeometry(1.5, 64, 64);

  const texture = new THREE.TextureLoader().load(
    "https://threejs.org/examples/textures/earth_atmos_2048.jpg"
  );

  const material = new THREE.MeshStandardMaterial({ map: texture });

  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  // 💡 LIGHT
  const light = new THREE.PointLight(0xffffff, 2);
  light.position.set(5, 5, 5);
  scene.add(light);

  camera.position.z = 5;

  // 🎮 INTERACTION (DRAG ROTATE)
  let isDragging = false;
  let prevX = 0;

  container.addEventListener("mousedown", () => isDragging = true);
  container.addEventListener("mouseup", () => isDragging = false);

  container.addEventListener("mousemove", (e) => {
    if (isDragging) {
      let delta = e.clientX - prevX;
      earth.rotation.y += delta * 0.01;
    }
    prevX = e.clientX;
  });

  // 📱 TOUCH
  container.addEventListener("touchmove", (e) => {
    earth.rotation.y += 0.05;
  });

  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.002;
    renderer.render(scene, camera);
  }

  animate();

  return { earth, camera };
}
