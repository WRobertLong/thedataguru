document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded, initializing particles.js...");

    if (typeof particlesJS === "undefined") {
        console.error("Particles.js library not loaded!");
    } else {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5 },
                size: { value: 3 },
                line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 3 },
            },
            interactivity: {
                detect_on: 'window',  // Ensure it detects mouse events correctly
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true,
                },
                modes: {
                    repulse: { distance: 150, duration: 0.4 },
                    push: { particles_nb: 6 },
                },
            },
            retina_detect: true,
        });

        console.log("Particles.js initialized successfully.");
    }
});

console.log("Particles script fully loaded and initialized.");