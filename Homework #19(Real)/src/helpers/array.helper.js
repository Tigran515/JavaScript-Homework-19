import {favoritesKeyNameInLocalStorage} from "../constants/local.storageKey.js"


export function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }