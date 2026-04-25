import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createGalaxy() {

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );

  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg") });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // ☀️ SUN
  const sunGeo = new THREE.SphereGeometry(5, 64, 64);
  const sunMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
  const sun = new THREE.Mesh(sunGeo, sunMat);
  scene.add(sun);

  // 💡 LIGHT
  const light = new THREE.PointLight(0xffffff, 2, 1000);
  scene.add(light);

  // 🪐 PLANETS
  const planets = [];

  function createPlanet(size, color, distance, speed) {
    const geo = new THREE.SphereGeometry(size, 32, 32);
    const mat = new THREE.MeshStandardMaterial({ color });
    const mesh = new THREE.Mesh(geo, mat);

    scene.add(mesh);

    planets.push({
      mesh,
      distance,
      speed,
      angle: Math.random() * Math.PI * 2
    });
  }

  // 🌍 ADD PLANETS
  createPlanet(1, 0xaaaaaa, 10, 0.01); // Mercury
  createPlanet(1.2, 0xffaa00, 15, 0.008); // Venus
  createPlanet(1.3, 0x2233ff, 20, 0.007); // Earth
  createPlanet(1, 0xff0000, 25, 0.006); // Mars
  createPlanet(3, 0xff8800, 35, 0.004); // Jupiter

  camera.position.z = 50;

  function animate() {
    requestAnimationFrame(animate);

    planets.forEach(p => {
      p.angle += p.speed;
      p.mesh.position.x = Math.cos(p.angle) * p.distance;
      p.mesh.position.z = Math.sin(p.angle) * p.distance;
    });

    renderer.render(scene, camera);
  }

  animate();

  return { camera };
}
