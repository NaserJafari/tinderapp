import "./App.css";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./config/firebase";
import { auth, googleProvidor } from "./config/firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  const [user, setUser] = useState([]);
  const [credential, setCredential] = useState([]);
  const collectionUsers = collection(db, "users");
  const [titel, setTitel] = useState("");
  const [omschrijving, setOmschrijving] = useState("");

  const createUser = async () => {
    await addDoc(collectionUsers, {
      titel: titel,
      omschrijving: omschrijving,
    });
  };

  const loginMetGoogle = async () => {
    const credential = await signInWithPopup(auth, googleProvidor);
    setCredential(credential);
  };

  const deleteUser = async (id) => {
    const postDoc = doc(db, "users", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(collectionUsers);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  },);

  return (
    <div className="App">
      <button onClick={loginMetGoogle}>Login met Google</button>
      <form>
        <input onChange={(e) => setTitel(e.target.value)} />
        <input onChange={(e) => setOmschrijving(e.target.value)} />  
        <button onClick={createUser}>Maak een user aan</button>
      </form>
      {user.map((user) => (
        <div key={user.id}>
          <h2>{user.titel}</h2>
          <p>{user.omschrijving}</p>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
      ))}
    </div>
  );
}

export default App;
