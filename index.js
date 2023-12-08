(function () {
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const menuCloseItem = document.querySelector('.header_nav_close')
burgerItem.addEventListener('click', () => {
    menu.classList.add('nav-list_active');
    menuCloseItem.style.display='block';
    });
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('nav-list_active');
    menuCloseItem.style.display='none';
    });
}());