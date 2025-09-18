export const loadHomePage = () => {
    const contentArea = document.getElementById('content');
    contentArea.textContent = '';
    contentArea.appendChild(createRestaurantCard());
    contentArea.appendChild(createRestaurantInfoCard());
}

const createRestaurantCard = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'NineTeaFive Café';
    restaurantName.classList.add('name');
    card.appendChild(restaurantName);
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Eat, drink, relax!';
    card.appendChild(paragraph);
    return card;
}

const createRestaurantInfoCard = () => {
    const restaurauntInfo = document.createElement('div');
    restaurauntInfo.classList.add('card');

    const restaurauntHoursHeader = document.createElement('h2');
    restaurauntHoursHeader.textContent = 'Hours';

    const restaurauntHours = document.createElement('p');
    restaurauntHours.textContent = 'M-F: 9:00 - 17:00';

    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';

    const location = document.createElement('p');
    location.textContent = '963 Lottage Road';

    restaurauntInfo.appendChild(restaurauntHoursHeader);
    restaurauntInfo.appendChild(restaurauntHours);
    restaurauntInfo.appendChild(locationHeader);
    restaurauntInfo.appendChild(location);
    return restaurauntInfo;
}