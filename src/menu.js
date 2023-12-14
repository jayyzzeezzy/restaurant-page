function makeMenuPage() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const itemOne = document.createElement('div');
    const itemTwo = document.createElement('div');
    const nameOne = document.createElement('h3');
    const nameTwo = document.createElement('h3');
    const picOne = document.createElement('img');
    const picTwo = document.createElement('img');

    title.textContent = 'Menu';
    itemOne.classList.add('menu-contain');
    nameOne.textContent = 'One';
    picOne.src = '';
    picOne.alt = 'some text'

    itemTwo.classList.add('menu-contain');
    nameTwo.textContent = 'Two';
    picTwo.src = '';
    picTwo.alt = 'some text too';

    itemOne.appendChild(nameOne);
    itemOne.appendChild(picOne);
    itemTwo.appendChild(nameTwo);
    itemTwo.appendChild(picTwo);
    content.appendChild(itemOne);
    content.appendChild(itemTwo);
    
    return content;
};

export default makeMenuPage;