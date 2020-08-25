// export function creatFavoriteKeyInLocal() {
//     if (!localStorage.getItem('favorites')) {
//         localStorage.setItem('favorites', []);
//     };

// };



// export function addItemToLocalStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value)); //@TODO add try catch 
//     return value;
// }



// let itemsArray = localStorage.getItem('favorites')
//     ? JSON.parse(localStorage.getItem('favorites'))
//     : [];

import { favoritesKeyNameInLocalStorage } from "../constants/local.storageKey.js";

function createLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

};

// export function creatFavoriteKeyInLocal() {
//     if (!localStorage.getItem(favoritesKeyNameInLocalStorage)) {
//         createLocalStorage(favoritesKeyNameInLocalStorage, []);
//     };
// };




