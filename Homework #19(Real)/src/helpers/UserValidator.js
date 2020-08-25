import { registeredUser } from "../UsersBase.js";
import { errorMessageRender } from "../render.js";

const container = document.querySelector('.login_container'); ///??


export const validationCheck = (user, password) => {

    let validUserName = registeredUser.userName;
    let validPassword = registeredUser.password;
    const clean = document.querySelector(".err_msg_box");

    if (user.trim() === '') {
        let message = 'UserName  is empty';
        errorMessageRender(message);
        console.log('UserName  is empty');
        return;
    } else if (password.trim() === '') {
        let message = 'Password is empty';
        errorMessageRender(message);
        console.log('Password is empty');
        return;

    } else if (user === validUserName) {
        if (password === validPassword) {
            console.log("all correct");
            window.location = "main.html"

        } else {
            let message = 'Invalid Password';
            errorMessageRender(message);
            console.log('Invalid Password');
        }
    } else {
        let message = 'Invalid UserName';
        errorMessageRender(message);
        console.log('Invalid UserName');
    }
}