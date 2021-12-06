import './style.css';
import home from './titlePage.js';
import menu from './menu.js';

const body = document.getElementById('content');

function createNavBar(){
    const navBar = document.createElement('div');
    const menuTab = document.createElement('div');
    const homeTab = document.createElement('div');
    const contactTab = document.createElement('div');

    navBar.classList.add('nav');
    menuTab.classList.add('tab');
    homeTab.classList.add('tab');
    contactTab.classList.add('tab');

    menuTab.textContent = 'Menu';
    homeTab.textContent = 'Home';
    contactTab.textContent = 'Contact';

    navBar.appendChild(homeTab);
    navBar.appendChild(menuTab);
    navBar.appendChild(contactTab);

    menuTab.addEventListener('click', () => {switchToPage(menu)});
    homeTab.addEventListener('click', () => {switchToPage(home)});
    contactTab.addEventListener('click', () => {switchToPage(contact)});

    return navBar;
}

function removeCurrentPage(){
    let currentPage = body.lastChild;
    body.removeChild(currentPage);
}

function switchToPage(tab){
    removeCurrentPage();
    body.appendChild(tab);
}

body.appendChild(createNavBar());
body.appendChild(home);