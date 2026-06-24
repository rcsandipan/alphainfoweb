
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {

  apiKey: "AIzaSyBgA-0ZF_8EQKzEEXyiCpRoFosFnsU5gAc",
  authDomain: "oltmgmt.firebaseapp.com",
  databaseURL: "https://oltmgmt-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oltmgmt",
  storageBucket: "oltmgmt.firebasestorage.app",
  messagingSenderId: "904228817536",
  appId: "1:904228817536:web:5201fdbbb506efce263465",
  measurementId: "G-NX3S8XBDQC"
  
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const rtdb = getDatabase(app);
  export {app,rtdb};