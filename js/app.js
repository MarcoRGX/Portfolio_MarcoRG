// Inicializar Particles.js
particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

// Configurar Menu
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

