import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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
const auth = getAuth(app);

document.getElementById('submit_1').addEventListener('click', async function(e) {
    e.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect to a different page after successful sign-in
        window.location.href ="home.html"; // Change to your dashboard page
    } catch (error) {
        document.getElementById('error-message').innerText = error.message;
      alert(errorMessage)
    }
});
