export const loadContactPage = () => {
    const contentArea = document.getElementById('content');
    contentArea.textContent = '';
    contentArea.appendChild(createAboutCard());
}

const createAboutCard = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Contact Us';
    restaurantName.classList.add('name');
    card.appendChild(restaurantName);
    const paragraph = document.createElement('p');
    paragraph.textContent = 'We value customer feedback highly! Feel free to contact us anytime.';
    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = 'E-Mail (owner): johnsmith@somefakedomain.com';
    card.appendChild(paragraph);
    card.appendChild(secondParagraph);
    const finalParagraph = document.createElement('p');
    finalParagraph.textContent = 'Phone: 555-555-555';
    card.appendChild(finalParagraph);
    card.classList.add('contact-page');
    return card;
}