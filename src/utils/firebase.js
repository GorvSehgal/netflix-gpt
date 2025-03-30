// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ4LZXKsqSNPjQU5LK5a4MjyeyZGjr-50",
  authDomain: "netflixgpt-61178.firebaseapp.com",
  projectId: "netflixgpt-61178",
  storageBucket: "netflixgpt-61178.firebasestorage.app",
  messagingSenderId: "585888497789",
  appId: "1:585888497789:web:445b00692c276efc9ff114",
  measurementId: "G-YX6NC2Q4ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();