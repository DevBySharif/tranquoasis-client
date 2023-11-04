// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM9ciK9qNqQV9UvNM4p44bVEM2QrNBqYM",
  authDomain: "tranquoasis.firebaseapp.com",
  projectId: "tranquoasis",
  storageBucket: "tranquoasis.appspot.com",
  messagingSenderId: "236254390084",
  appId: "1:236254390084:web:aeded3bbc2705246a21911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth