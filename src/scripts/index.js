
function hexToRgb(hex) {
  const shorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthand, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function updateParticleColorSmooth(newColor) {
  const pJS = window.pJSDom[0].pJS;
  const rgb = hexToRgb(newColor);

  pJS.particles.color.value = newColor;
  pJS.particles.line_linked.color = newColor;

  pJS.particles.array.forEach(p => {
    p.color.value = newColor;
    p.color.rgb = rgb;
  });

  pJS.particles.line_linked.color_rgb_line = rgb;
}

function initParticles(initialColor) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100 },
      size: { value: 3 },
      color: { value: initialColor },
      line_linked: {
        enable: true,
        distance: 150,
        color: initialColor,
        opacity: 0.5,
        width: 1.2
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "bounce"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}

// Initialise theme
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.body.classList.toggle("light-theme", !prefersDark);
document.body.classList.toggle("dark-theme", prefersDark);
const startColor = prefersDark ? "#ffffff" : "#000000";
initParticles(startColor);

document.getElementById("toggle-theme").addEventListener("click", function () {
  const isDark = document.body.classList.contains("dark-theme");
  document.body.classList.toggle("light-theme", isDark);
  document.body.classList.toggle("dark-theme", !isDark);
  const newColor = isDark ? "#000000" : "#ffffff";
  updateParticleColorSmooth(newColor);
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch(err => console.error("Error loading header:", err));
});
