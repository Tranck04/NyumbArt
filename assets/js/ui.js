import { AuthErrorCodes } from "firebase/auth";

export const txtEmail = document.querySelector("#txtEmail");
export const txtPassword = document.querySelector("#txtPassword");

export const btnLogin = document.querySelector("#btnLogin");
export const btnSignUp = document.querySelector("#btnSignUp");

export const btnLogout = document.querySelector("#btnLogout");

export const divAuthState = document.querySelector('#divAuthState')
export const lblAuthState = document.querySelector('#lblAuthState')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

export const showLoginForm = () => {
    btnLogin.style.display = "block";
    app.style.display = "none"
}

export const showApp = () => {
    app.style.display = "block";
    login.style.display = "none";
}

export const hideLoginError = () => {
    divLoginError.style.display = "none";
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        lblLoginErrorMessage.innerHTML = "Invalid Password";
    }
    else {
        lblLoginErrorMessage.innerHTML = 'Error: ${error.message}'
    }
}

export const showLoginState = (user) => {
    lblAuthState.innerHTML = "User is signed in as ${user.email} with uid ${user.uid}, email ${user.email}";
}

hideLoginError();