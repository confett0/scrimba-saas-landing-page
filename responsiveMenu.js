const toggle = document.querySelector(".toggle-menu");
const menu = document.querySelector(".menu");

const toggleMenu = () => {
   menu.classList.toggle("visible");
};

toggle.addEventListener("click", toggleMenu);