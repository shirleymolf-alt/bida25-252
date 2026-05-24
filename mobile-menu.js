
const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar ul');

if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}
