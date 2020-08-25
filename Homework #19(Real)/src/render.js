import { addItemsToFavoriteLocalStorage } from "./services/favorites.js";
import { clickedCardInfo } from "./services/favorites.js"
import { removeItemsToFavoriteLocalStorage } from "./services/favorites.js"
import { removeItemOnce } from "./helpers/array.helper.js"
import { favoritesKeyNameInLocalStorage } from "./constants/local.storageKey.js"


export const errorMessageRender = (message) => {
    const main = document.querySelector('.login_Main');
    const loginContainer = document.querySelector('.login_container');

    const errorBox = document.createElement('div');
    errorBox.classList.add('err_msg_box');

    const errorText = document.createElement('p');
    errorText.classList.add('error_Message_text');
    errorText.innerText = message;


    errorBox.appendChild(errorText);

    const oldError = document.querySelector('.err_msg_box');
    if (oldError) {
        oldError.remove();
    }

    return main.insertBefore(errorBox, loginContainer);

};



export const cardRender = ({ name, flag }) => {
    const card = document.createElement('div');
    card.classList.add('cardStandard');

    const flagImg = document.createElement('img');
    flagImg.classList.add('card_image')
    flagImg.src = flag;

    const countryName = document.createElement('p');
    countryName.classList.add('card_title');
    countryName.innerText = name;

    const favIcon = document.createElement('span');
    favIcon.classList.add('fav_Icon');
    favIcon.innerText = "Add to favorites";
    favIcon.style.color = "white";



    favIcon.addEventListener('click', () => {
        let currentCardName = new clickedCardInfo(name);
        console.log(currentCardName.name);
        addItemsToFavoriteLocalStorage(currentCardName.name);
    });

    card.appendChild(flagImg);
    card.appendChild(countryName);
    card.appendChild(favIcon);

    return card;
};


export const favoriteCardRender = ({ name, flag }) => {
    const card = document.createElement('div');
    card.classList.add('cardStandard');

    const flagImg = document.createElement('img');
    flagImg.classList.add('card_image')
    flagImg.src = flag;

    const countryName = document.createElement('p');
    countryName.classList.add('card_title');
    countryName.innerText = name;

    const favIcon = document.createElement('span');
    favIcon.classList.add('fav_Icon');
    favIcon.innerText = "Remove";
    favIcon.style.color = "yellow";



    favIcon.addEventListener('click', () => {
        let currentCardName = new clickedCardInfo(name);
        console.log(currentCardName);
        removeItemsToFavoriteLocalStorage(currentCardName.name);
        window.location.reload()
    });

    card.appendChild(flagImg);
    card.appendChild(countryName);
    card.appendChild(favIcon);

    return card;
};
