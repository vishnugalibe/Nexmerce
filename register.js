import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoUInkT03iYJQjjjE40TX8jHUz7aaicF4",
  authDomain: "nexmerce-e79be.firebaseapp.com",
  projectId: "nexmerce-e79be",
  storageBucket: "nexmerce-e79be.appspot.com",
  messagingSenderId: "832300680682",
  appId: "1:832300680682:web:0b95b26b40148904391e93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//submit button
const signup=document.getElementById('submit');
signup.addEventListener("click", 
 (event)=>{
    event.preventDefault()
    //inputs
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating account......")
    window.location.href="business.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
});
