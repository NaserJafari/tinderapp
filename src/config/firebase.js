// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkOIInc-2263BAl0Q_nK5ff0efWQKKrNQ",
  authDomain: "fir-tinder-bd99c.firebaseapp.com",
  projectId: "fir-tinder-bd99c",
  storageBucket: "fir-tinder-bd99c.appspot.com",
  messagingSenderId: "1058124640896",
  appId: "1:1058124640896:web:cad83c296741b690f3ac65",
  measurementId: "G-RBWHE5W561",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvidor = new GoogleAuthProvider(app);
