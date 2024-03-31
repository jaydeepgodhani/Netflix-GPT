import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj7zqT_vgxBMadM5-AcWX4WD7hIrjGYmE",
  authDomain: "netflixgpt-28926.firebaseapp.com",
  projectId: "netflixgpt-28926",
  storageBucket: "netflixgpt-28926.appspot.com",
  messagingSenderId: "1017702554221",
  appId: "1:1017702554221:web:a97bd335d2f54cf8a0bd64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();