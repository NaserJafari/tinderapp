// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAnalytics} from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMpawkmqILlZAo_FPg0Ira86RaKzy0Zfc",
  authDomain: "tinderapp-f64c7.firebaseapp.com",
  projectId: "tinderapp-f64c7",
  storageBucket: "tinderapp-f64c7.appspot.com",
  messagingSenderId: "940074548861",
  appId: "1:940074548861:web:ab11b57565528666ae7b14",
  measurementId: "G-BVZWJB0DSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvidor = new GoogleAuthProvider(app);
