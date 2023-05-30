// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlEjIEpNAjBS9I230OnTZzZmkGtFEwKVA",
  authDomain: "tinderapp-69235.firebaseapp.com",
  projectId: "tinderapp-69235",
  storageBucket: "tinderapp-69235.appspot.com",
  messagingSenderId: "1012186084866",
  appId: "1:1012186084866:web:45920634ec8f494a1f991b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvidor = new GoogleAuthProvider(app);
