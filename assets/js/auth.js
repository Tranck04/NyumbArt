import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIokShQHeY-GkcFLSdhikHGNQGZddUbJQ",
  authDomain: "sincere-sun-365819.firebaseapp.com",
  projectId: "sincere-sun-365819",
  storageBucket: "sincere-sun-365819.appspot.com",
  messagingSenderId: "106854662718",
  appId: "1:106854662718:web:8551e81f7011c4e48e476f",
  measurementId: "G-3TE4VE0KB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseConfig);

onAuthStateChanged(auth, (user) => {
    if(user !== null){
        console.log("User is signed in");
    } else {
        console.log("User is signed out");
    }
});
