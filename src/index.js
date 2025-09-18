import "./styles.css";
import { loadHomePage } from "./websiteScript.js";
import { loadMenuPage } from "./websiteScript.js";
import { loadAboutPage } from "./websiteScript.js";
import { loadContactPage } from "./websiteScript.js";

document.addEventListener('DOMContentLoaded', () => {
    function initialize() {
        const homeButton = document.querySelector('.home-button');
        homeButton.addEventListener('click', loadHomePage);
        loadHomePage();

        const menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click', loadMenuPage);

        const aboutButton = document.querySelector('.about-button');
        aboutButton.addEventListener('click', loadAboutPage);

        const contactButton = document.querySelector('.contact-button');
        contactButton.addEventListener('click', loadContactPage);
    }

    initialize();
})