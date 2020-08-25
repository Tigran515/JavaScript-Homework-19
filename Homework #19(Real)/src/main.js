import { doGet } from "./helpers/request.helper.js"
import { routes } from "./helpers/routes.helper.js";
import { cardRender } from "./render.js";
import { favoritesKeyNameInLocalStorage } from "./constants/local.storageKey.js";
// import { creatFavoriteKeyInLocal } from "./helpers/local.storage.js";

console.log("cool");

const countryInput = document.querySelector(".searchInput");
const cardContainer = document.querySelector(".card_container");
const loadingImg = document.querySelector(".loading_img");
const favoritesButton = document.querySelector(".fav");


const state = {
    countryName: "",
};

countryInput.addEventListener("input", ({ target: { value } }) => {
    if (value.trim() !== "") {
        state.countryName = value;
    }

    getCountries(state.countryName);
});


const renderCountry = ({ name, flag }) => {
    const card = cardRender({ name, flag });
    cardContainer.append(card);
};

favoritesButton.addEventListener('click', () => window.location = "favorites.html");

const getCountries = async (name) => {
    const url =
        name === "" ? routes.getAllCountries() : routes.getCountryByName(name);

    loadingImg.style.display = "block";

    try {
        const countries = await doGet(url);
        console.log(countries);
        cardContainer.innerHTML = "";
        countries.forEach(renderCountry);
    } catch (err) {
        // tableBody.innerHTML = err.message;
        console.log(err);
    }
};


getCountries(state.countryName);

