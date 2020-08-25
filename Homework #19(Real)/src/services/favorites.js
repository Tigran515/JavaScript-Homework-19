// import { addItemToLocalStorage } from "../helpers/local.storage.js";

// export function getFavoriteCountries() {
//     return localStorage.hasOwnProperty("favorites") ? JSON.parse(localStorage.getItem("favorites")) : localStorage.setItem('favorites', []);;
// }


import { favoritesKeyNameInLocalStorage } from "../constants/local.storageKey.js";
// import {creatFavoriteKeyInLocal} from "../helpers/local.storage.js";
// import { removeItemByValue } from "../helpers/array.helper.js";
import { removeItemOnce } from "../helpers/array.helper.js";



export function clickedCardInfo(name) { ///texapoxel LOCALSTORAGE
    this.name = name;
};

export function addItemsToFavoriteLocalStorage(value) {
    let existing = localStorage.getItem(favoritesKeyNameInLocalStorage) ? JSON.parse(localStorage.getItem(favoritesKeyNameInLocalStorage))
        : [];

    console.log("first", existing);
    if (!(existing.includes(value))) {
        existing.push(value);

    }

    console.log("final", existing);

    localStorage.setItem(favoritesKeyNameInLocalStorage, JSON.stringify(existing))

};

export function removeItemsToFavoriteLocalStorage(countryName) {
    let existing = localStorage.getItem(favoritesKeyNameInLocalStorage) ? JSON.parse(localStorage.getItem(favoritesKeyNameInLocalStorage))
        : [];

    removeItemOnce(existing, countryName);
    localStorage.setItem(favoritesKeyNameInLocalStorage, JSON.stringify(existing))


}
