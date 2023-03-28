  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDIokShQHeY-GkcFLSdhikHGNQGZddUbJQ",
    authDomain: "sincere-sun-365819.firebaseapp.com",
    databaseURL: "https://sincere-sun-365819-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sincere-sun-365819",
    storageBucket: "sincere-sun-365819.appspot.com",
    messagingSenderId: "106854662718",
    appId: "1:106854662718:web:8551e81f7011c4e48e476f",
    measurementId: "G-3TE4VE0KB3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase(app);

  btnSignup.addEventListener('click', (e) => {

    var pseudo = document.getElementById("pseudo").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("txtPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    alert('User created successfully')
    window.location.replace("login.html");
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('errorMessage')
    // ..
  });
  });