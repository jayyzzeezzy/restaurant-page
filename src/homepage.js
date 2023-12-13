function makeHomePage() {
    // make the DOM elements
    const content = document.querySelector('#content');
    const name = document.createElement('h1');
    const picture = document.createElement('img');
    const description = document.createElement('p');

    // add class to each element
    name.classList.add('food-name');
    picture.classList.add('food-pic');
    description.classList.add('food-des');

    // set attribute for picture element
    picture.src = '../dist/img/pizza-s.jpg';
    picture.alt = 'some context';

    // add words to element
    name.textContent = 'Food';
    description.textContent = 'Food description.';

    // add to parent node
    content.appendChild(name);
    content.appendChild(picture);
    content.appendChild(description);

    return content;
};

export default makeHomePage;