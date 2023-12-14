import makeContactPage from './contact';
import makeHomePage from './homepage'; 
import makeMenuPage from './menu';

// make navbar function
function makeNavBar() {
    const nav = document.querySelector('#nav');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    home.classList.add('navBtn');
    menu.classList.add('navBtn');
    contact.classList.add('navBtn');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
};

function handleNavClicks() {
    const navBtn = document.querySelectorAll('.navBtn');

    navBtn.forEach((button) => {
        button.addEventListener('click', () => {
            loadPage(button);
        })
    });
};

function loadPage(button) {
    if (button.textContent == 'Menu') {
        makeMenuPage();
    }
    else if (button.textContent == 'Home') {
        makeHomePage();
    }
    else if (button.textContent == 'Contact') {
        makeContactPage();
    }
    else {
        alert('Error!');
    }
};

makeNavBar();
handleNavClicks();
console.log('Executed successfully.');
makeHomePage();