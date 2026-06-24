
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCoyge4M5KTDjrqrDySoUwT31OYF1mefKE",
  authDomain: "lccare-587f6.firebaseapp.com",
  databaseURL: "https://lccare-587f6-default-rtdb.firebaseio.com",
  projectId: "lccare-587f6",
  storageBucket: "lccare-587f6.firebasestorage.app",
  messagingSenderId: "990856135605",
  appId: "1:990856135605:web:45fa04f0aa104423cf0ffc",
  measurementId: "G-PSM6BE2BCN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if logged in
onAuthStateChanged(auth, (user) => {
  if (!user ) {
    // Not logged in → redirect
    window.location.href = "index.html";
  }
});


