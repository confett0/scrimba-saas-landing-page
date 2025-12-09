const toggle = document.querySelector(".toggle-menu");
const menu = document.querySelector(".menu");

const toggleMenu = () => {
   menu.classList.toggle("visible");
   console.log("menu toggled")
};

toggle.addEventListener("click", toggleMenu);