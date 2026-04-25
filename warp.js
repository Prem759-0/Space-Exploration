export function warpEffect(canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];

  for (let i = 0; i < 800; i++) {
    stars.push({
      x: Math.random() * canvas.width - canvas.width/2,
      y: Math.random() * canvas.height - canvas.height/2,
      z: Math.random() * canvas.width
    });
  }

  function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      star.z -= 4;

      if (star.z <= 0) star.z = canvas.width;

      let k = 128 / star.z;
      let x = star.x * k + canvas.width/2;
      let y = star.y * k + canvas.height/2;

      ctx.fillStyle = "white";
      ctx.fillRect(x, y, 2, 2);
    });

    requestAnimationFrame(animate);
  }

  animate();
}
