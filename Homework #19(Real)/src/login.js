import { validationCheck } from "./helpers/UserValidator.js";



const userNameInp = document.querySelector('#userNameInp');
const passwordInp = document.querySelector('#passwordInp');
const loginBtn = document.getElementById('button');
const form = document.querySelector('#form');

let state = {
    filledInUserName: '',
    filledInPassword: ''
};

userNameInp.addEventListener("input", ({ target: { value } }) => {
    if (value.trim() !== "") {
        state.filledInUserName = value;

    }
});



passwordInp.addEventListener("input", ({ target: { value } }) => {
    if (value.trim() !== "") {
        state.filledInPassword = value;
    }
});




const CheckingValidation = () => {
    validationCheck(state.filledInUserName, state.filledInPassword);
};

form.addEventListener("submit", e => {
    e.preventDefault();
    CheckingValidation()
});


