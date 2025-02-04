document.addEventListener("DOMContentLoaded", () => {
  // Inicializo Animate On Scroll de JS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 200,
  });

  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".header");

  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

  // Cierre del nav cuando clickeamos un link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      burger.classList.remove("toggle");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Agrego fondo con opacity cuando scrolleo
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(51, 51, 51, 0.9)";
    } else {
      header.style.backgroundColor = "rgb(51, 51, 51)";
    }
  });

  // Efecto parallax en el hero
  const heroContent = document.querySelector(".hero-content");
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
  });

  // Form submission (you can customize this part)
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Formulario enviado con éxito!");
    form.reset();
  });
});
