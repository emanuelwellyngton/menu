const btnMenu = document.querySelector("#btn-menu");
const nav = document.querySelector("nav");
const menu = document.querySelector("#menu");

let showMenu = false;

btnMenu.addEventListener("click", () => {
    if (showMenu == true) {
        nav.classList.remove("disable");
        nav.classList.add("active");
    } else if (showMenu == false) {
        nav.classList.remove("active");
        nav.classList.add("disable");
    }

    showMenu = !showMenu;
})