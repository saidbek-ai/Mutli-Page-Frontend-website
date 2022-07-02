// navbar

const navbar = document.querySelector("#nav-list");
const navToggler = document.querySelector("#nav-toggler");

navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active-nav");
});


// footer


const footerText = document.querySelector("#footer-title");
const year = new Date().getFullYear();

footerText.textContent = `Copyright © ${year} LFL by Saidbek Khudayberdiev`
