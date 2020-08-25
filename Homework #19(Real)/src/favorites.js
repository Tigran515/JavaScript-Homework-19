import { favoritesKeyNameInLocalStorage } from "./constants/local.storageKey.js";
import { doGet } from "./helpers/request.helper.js"
import { routes } from "./helpers/routes.helper.js";
import { favoriteCardRender } from "./render.js";
import { removeItemOnce } from "./helpers/array.helper.js"



const favoritesContainer = document.querySelector(".card_container");
const goToFavorites = document.querySelector(".home_page");

const renderCountry = ({ name, flag }) => {
    const card = favoriteCardRender({ name, flag });
    favoritesContainer.append(card);
};

console.log(localStorage.getItem(favoritesKeyNameInLocalStorage));
let favorites = JSON.parse(localStorage.getItem(favoritesKeyNameInLocalStorage));
console.log(favorites);


goToFavorites.addEventListener("click", () => window.location = "main.html")

const getCountries = async (name) => {
    const url = routes.getCountryByName(name);


    try {
        const countries = await doGet(url);
        // console.log(countries);
        // cardContainer.innerHTML = "";
        countries.forEach(renderCountry);
    } catch (err) {
        console.log(err);
    }
};


favorites.forEach(element => {
    console.log(element);
    getCountries(element)
});

