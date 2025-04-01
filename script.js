const hamburgerEl = document.querySelector(".hamburger");
const navMenuEl = document.querySelector(".nav-menu");

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("active");
  navMenuEl.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerEl.classList.remove("active");
    navMenuEl.classList.remove("active");
  })
);
