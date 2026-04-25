export function setupControls(camera) {

  const speed = 1;

  window.addEventListener("keydown", (e) => {
    switch(e.key) {
      case "w":
      case "ArrowUp":
        camera.position.z -= speed;
        break;
      case "s":
      case "ArrowDown":
        camera.position.z += speed;
        break;
      case "a":
      case "ArrowLeft":
        camera.position.x -= speed;
        break;
      case "d":
      case "ArrowRight":
        camera.position.x += speed;
        break;
    }
  });

}
