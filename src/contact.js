function makeContactPage() {
    const content = document.querySelector('#content');
    const contain = document.createElement('div');
    const title = document.createElement('h1');
    const phone = document.createElement('p');
    const email = document.createElement('p');

    title.classList.add('title');
    phone.classList.add('phone');
    email.classList.add('email');

    title.textContent = 'Contact';
    phone.textContent = 'Phone: (123) 456-7890'
    email.textContent = 'Email: restaurant@gmail.com'

    contain.appendChild(title);
    contain.appendChild(phone);
    contain.appendChild(email);
    content.appendChild(contain);

    return content;
};

export default makeContactPage;