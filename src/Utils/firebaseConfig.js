// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Optional, remove if not used

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDfzexS_8AhkSsh0uRf2wpr_nvLr0bxIg",
  authDomain: "myaasmeeen.firebaseapp.com",
  projectId: "myaasmeeen",
  storageBucket: "myaasmeeen.appspot.com",
  messagingSenderId: "773058505851",
  appId: "1:773058505851:web:7c6908e940b09c218dc6de",
  measurementId: "G-WXLKNRR9ZH"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export  {db,  auth };