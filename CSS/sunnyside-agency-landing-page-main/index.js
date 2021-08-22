const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.navigation__links')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
})