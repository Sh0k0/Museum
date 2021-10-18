const burgerButton = document.querySelector('.burger-button');
const burgerNavigation = document.querySelector('.header_list');
const welcomeText = document.querySelector('.welcome_content');

let openedMenu = false;
function toggleBurgerMenu () {
    if (openedMenu == false) {
        burgerButton.style.backgroundImage = "url(assets/svg/close_burger.svg)"
        burgerButton.style.width = "25px";
        burgerButton.style.height = "25px";
        burgerNavigation.style.transform = "translateX(0)";
        welcomeText.style.display= "none";
        openedMenu = true;
    } else {
        burgerButton.style.backgroundImage = "url(assets/svg/open_burger.svg)"
        burgerButton.style.width = "32px";
        burgerButton.style.height = "18px";
        burgerNavigation.style.transform = "translateX(-100%)";
        welcomeText.style.display= "block";
        openedMenu = false;
    }
    
}

burgerButton.addEventListener('click', toggleBurgerMenu);