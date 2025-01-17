// Menú desplegable
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function() {
    navbar.classList.toggle("active");  // Añade o elimina la clase 'active' que muestra u oculta el menú
});
