// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzZ4m3w33PVNOIPyT3EQ8VmJMmghF0_lw",
  authDomain: "netflixgpt-14887.firebaseapp.com",
  projectId: "netflixgpt-14887",
  storageBucket: "netflixgpt-14887.appspot.com",
  messagingSenderId: "442619839685",
  appId: "1:442619839685:web:bc51d605db3701db269cac",
  measurementId: "G-9RLX3TBZNH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication
export const auth = getAuth();
