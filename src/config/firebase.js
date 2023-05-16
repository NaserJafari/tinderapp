// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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
const db = getFirestore(app);

async function users() {
  const usersCol = collection(db, "users");
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map((doc) => doc.data());
  return userList;
}
