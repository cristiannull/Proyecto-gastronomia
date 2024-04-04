const swith = document.querySelector(".switch");

document.addEventListener("DOMContentLoaded", (e) => {
  cargarmodo();
  swith.addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
  swith.classList.toggle("active");
  document.body.classList.toggle("active");
  guardarmodo(swith.classList.contains("active"));
}

function guardarmodo(estado) {
  localStorage.setItem("darkMode", estado);
}

function cargarmodo() {
  const darkModeGuardado = localStorage.getItem("darkMode") === "true";
  if (darkModeGuardado) {
    swith.classList.add("active");
    document.body.classList.add("active");
  }
}
