// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7gCetQrSGPxXrOIhEGPT0ueWRJwrDzes",
  authDomain: "ema-john-with-router-d6e06.firebaseapp.com",
  projectId: "ema-john-with-router-d6e06",
  storageBucket: "ema-john-with-router-d6e06.appspot.com",
  messagingSenderId: "84008600588",
  appId: "1:84008600588:web:658cc37d41ed8985441a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;