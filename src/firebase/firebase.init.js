// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1TDquK2JAzhWiiJ8PVHb0c_2qJcfVsUQ",
  authDomain: "assignment-11-ac522.firebaseapp.com",
  projectId: "assignment-11-ac522",
  storageBucket: "assignment-11-ac522.firebasestorage.app",
  messagingSenderId: "605663207222",
  appId: "1:605663207222:web:60da080e04f95ca697dd97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);