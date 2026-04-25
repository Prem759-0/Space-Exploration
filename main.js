gsap.registerPlugin(ScrollTrigger);

/* 🌌 STARFIELD */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 300; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animateStars() {
  stars.forEach(star => {
    star.y += 0.5;
    if (star.y > canvas.height) star.y = 0;
  });

  drawStars();
  requestAnimationFrame(animateStars);
}

animateStars();

/* ☀️ SUN ZOOM */
gsap.to(".sun", {
  scale: 3,
  scrollTrigger: {
    trigger: ".sun-section",
    start: "top center",
    end: "bottom top",
    scrub: true
  }
});

/* 🌍 PLANET ZOOM */
gsap.from(".earth", {
  scale: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".planet-section",
    start: "top 80%",
    end: "top 30%",
    scrub: true
  }
});

/* 💫 WARP EFFECT */
gsap.to(".warp", {
  scale: 5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".warp",
    start: "top center",
    end: "bottom top",
    scrub: true
  }
});
