import Pizza from './img/pizza-s.jpg';

function makeHomePage() {
    const content = document.querySelector('#content');
    const name = document.createElement('h1');
    const picture = document.createElement('img');
    const description = document.createElement('p');

    name.classList.add('food-name');
    picture.classList.add('food-pic');
    description.classList.add('food-des');

    picture.src = Pizza;
    picture.alt = 'a picture of a pizza';

    name.textContent = 'Pizza Restaurant';
    description.textContent = 'Restaurant description.';

    content.appendChild(name);
    content.appendChild(picture);
    content.appendChild(description);

    return content;
};

export default makeHomePage;