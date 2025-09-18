export const loadAboutPage = () => {
    const contentArea = document.getElementById('content');
    contentArea.textContent = '';
    contentArea.appendChild(createAboutCard());
}

const createAboutCard = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'About Us';
    restaurantName.classList.add('name');
    card.appendChild(restaurantName);
    const paragraph = document.createElement('p');
    paragraph.textContent = 'We are a family owned restaurant and have been in business since 1986!';
    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = 'Our goal is to offer locals a place to spend time together, unwind, or get some work done!';
    card.appendChild(paragraph);
    card.appendChild(secondParagraph);
    const lineBreak = document.createElement('br');
    card.appendChild(lineBreak);
    const finalParagraph = document.createElement('p');
    finalParagraph.textContent = 'Stop by and say hello!';
    card.appendChild(finalParagraph);
    return card;
}