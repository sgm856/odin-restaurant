import altItemImage from '../resources/images/food-default.png';
import defaultItemImage from '../resources/images/food-default-2.png';
// image from freepik.com

export const loadMenuPage = () => {
    const contentArea = document.getElementById('content');
    contentArea.textContent = '';
    contentArea.appendChild(createMenu());
}

const createMenu = () => {
    const card = document.createElement('div');
    card.classList.add('card');

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Our Offerings';

    const foodButton = createTab('Food', 'food');
    const drinkButton = createTab('Drinks', 'drinks');

    const submenuTabs = document.createElement('nav');
    submenuTabs.classList.add('submenu-tabs');
    submenuTabs.appendChild(foodButton);
    submenuTabs.appendChild(drinkButton);

    submenuTabs.addEventListener('click', (event) => {
        if (event.target.classList.contains('tab')) {
            switchTab(event.target);
        }

    });

    const submenuContainer = document.createElement('div');
    submenuContainer.classList.add('submenu-container');
    submenuContainer.appendChild(submenuTabs);

    const foodList = createItemGroup('food');
    const drinkList = createItemGroup('drinks');
    foodList.dataset.category = 'food';
    drinkList.dataset.category = 'drinks';

    submenuContainer.appendChild(foodList);
    submenuContainer.appendChild(drinkList);

    foodList.classList.add('active-list');
    foodButton.classList.add('active-tab');
    drinkButton.classList.add('inactive-tab');
    drinkList.classList.add('inactive-list');

    card.appendChild(menuTitle);

    card.appendChild(submenuContainer);
    return card;
}

const switchTab = (targetTab) => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
        tab.classList.add('inactive-tab');
    });
    targetTab.classList.add('active-tab');
    targetTab.classList.remove('inactive-tab');

    const categoryLists = document.querySelectorAll('.item-list');
    categoryLists.forEach(list => {
        if (list.dataset.category === targetTab.dataset.category) {
            list.classList.add('active-list');
            list.classList.remove('inactive-list');
        } else {
            list.classList.add('inactive-list');
            list.classList.remove('active-list');
        }
    });
}

const createTab = (categoryName, categoryId) => {
    const tab = document.createElement('button');
    tab.classList.add('tab');
    tab.textContent = categoryName;
    tab.dataset.category = categoryId;

    return tab;
}

const createItemGroup = (category) => {
    const itemGroup = document.createElement('div');
    itemGroup.classList.add('item-list');
    itemGroup.dataset.category = category;

    for (let i = 0; i < 6; i++) {
        const item = new Item();
        const itemElem = item.getItemElement();
        if (category != 'food') {
            item.displayAlternateImage();
        }
        itemGroup.appendChild(itemElem);
    }

    return itemGroup;
}

class Item {
    #itemName;
    #itemDescription;
    #itemPrice;
    constructor(itName, description, price) {
        this.#itemName = itName || 'Lorem Ipsum';
        this.#itemDescription = description || 'Excepteur sint occaecat cupidatat non proident.';
        this.#itemPrice = price || '$10.99';
        this.defaultImage = document.createElement('img');
    }

    set price(price) {
        this.#itemPrice = price;
    }

    set description(description) {
        this.#itemDescription = description;
    }

    getItemElement() {
        const itemEntry = document.createElement('div');
        itemEntry.classList.add('item-entry');

        this.defaultImage.classList.add('item-image');
        this.defaultImage.src = defaultItemImage;
        itemEntry.appendChild(this.defaultImage);

        const textSection = document.createElement('p');
        textSection.classList.add('item-info');
        textSection.appendChild(this.createItemHeader(this.#itemName, this.#itemPrice));
        const textDescription = document.createElement('p');
        textDescription.textContent = this.#itemDescription;
        textSection.appendChild(textDescription);
        itemEntry.appendChild(textSection);
        return itemEntry;
    }

    displayAlternateImage() {
        this.defaultImage.src = altItemImage;
    }

    createItemHeader(name, price) {
        const itemHeader = document.createElement('div');
        itemHeader.classList.add('item-header');
        const itemNameSpan = document.createElement('span');
        itemNameSpan.textContent = name;
        const itemPriceSpan = document.createElement('span');
        itemPriceSpan.textContent = price;

        itemHeader.appendChild(itemNameSpan);
        itemHeader.appendChild(itemPriceSpan);
        return itemHeader;
    }
}
