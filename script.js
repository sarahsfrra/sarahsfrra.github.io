// Header
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Navigasi aktif
let menuLi = document.querySelectorAll('header .navbar a');
let sections = document.querySelectorAll('section');

function setActiveMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

setActiveMenu();

window.addEventListener("scroll", setActiveMenu);

//toggle
let menuIcon = document.querySelector(".menu-btn img");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("open");
    if (menuIcon.src.endsWith("MENU.png")) {
        menuIcon.src = "BahanSasaWeb/Logo/Close.png";
    } else {
        menuIcon.src = "BahanSasaWeb/Logo/MENU.png";
    }
});

window.addEventListener("scroll", () => {
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
        menuIcon.src = "BahanSasaWeb/Logo/MENU.png";
    }
});

//ICON SCROLL KE ATAS

const footer = document.getElementById('footer');
const backToHomeLink = document.getElementById('back-to-home');

backToHomeLink.addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo(0, 0);
});