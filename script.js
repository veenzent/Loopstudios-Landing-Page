const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const head = document.querySelector(".heading")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    head.classList.toggle("active")
})