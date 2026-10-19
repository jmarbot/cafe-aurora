// Año actual en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Desplazamiento suave al menú, compensando la barra superior fija
document.getElementById("ver-menu").addEventListener("click", function (event) {
  event.preventDefault();
  const menu = document.getElementById("menu");
  const offset = document.querySelector(".topbar").offsetHeight;
  const top = menu.getBoundingClientRect().top + window.scrollY - offset;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
});
