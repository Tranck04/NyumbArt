import 'C:/NyumbArt/assets/css/style.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    connectAuthEmulator, 
    onAuthStateChanged, 
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "firebase/auth";
import { 
    txtEmail, 
    txtPassword, 
    btnLogin, 
    btnSignUp, 
    btnLogout, 
    divAuthState, 
    lblAuthState, 
    divLoginError, 
    lblLoginErrorMessage, 
    showLoginForm, 
    showApp, 
    hideLoginError, 
    showLoginState } from './ui.js'

const firebaseConfig = {
  apiKey: "AIzaSyDIokShQHeY-GkcFLSdhikHGNQGZddUbJQ",
  authDomain: "sincere-sun-365819.firebaseapp.com",
  projectId: "sincere-sun-365819",
  storageBucket: "sincere-sun-365819.appspot.com",
  messagingSenderId: "106854662718",
  appId: "1:106854662718:web:8551e81f7011c4e48e476f",
  measurementId: "G-3TE4VE0KB3"
};

const lodginEmailPassword = async() => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
}

const createAccount = async() => {
    const email = txtEmail.value;
    const password = txtPassword.value;

    try {
        await createUserWithEmailAndPassword(auth, email, password)
    }
    catch (error) {
        console.log("error creating account: ${error.message}")
        showLoginError(error);
    }
}

const monitorAuthState = async() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
            showApp();
            showLoginState(user);

            hideLoginError();
            hideLinkError();
        }
        else {
            showLoginForm();
            lblAuthState.innerHTML = "User is signed out";
        }
    });
}

const logout = async() => {
    await signOut(auth);
}

btnLogin.addEventListener('click', lodginEmailPassword);
btnSignUp.addEventListener('click', createAccount);
btnLogout.addEventListener('click', logout);

const auth = getAuth(firebaseConfig);
connectAuthEmulator(auth, "http://localhost:9099");

monitorAuthState();