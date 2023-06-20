import "./App.css";
import { useState, useEffect, useCallback } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config/firebase";
import { auth, googleProvidor } from "./config/firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  const [users, setUsers] = useState([]);
  const [credential, setCredential] = useState([]);
  const collectionUsers = collection(db, "users");

  const haalDocumentenOp = useCallback(async () => {
    const data = await getDocs(collectionUsers);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, [collectionUsers]);

  const loginMetGoogle = async () => {
    const credential = await signInWithPopup(auth, googleProvidor);
    setCredential(credential);
    console.log(credential);
  };

  const updateUser = async (id) => {
    const postDoc = doc(db, "users", id);
    await updateDoc(postDoc);
  };

  const deleteUser = async (id) => {
    const postDoc = doc(db, "users", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    haalDocumentenOp();
  }, []);

  return (
    <div className="pagina">
      <div className="navbar">
        <div className="navlinks">
          <p>Logo</p>
        </div>
        <div className="navrechts">
          <button onClick={loginMetGoogle}>Login met Google</button>
        </div>
      </div>
      <div className="container">
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.foto}</p>
          <h2>{user.voornaam}</h2>
          <p>{user.achternaam}</p>
          <p>{user.geslacht}</p>
          <p>{user.plaatsnaam}</p>
          {/* <button onClick={() => deleteUser(user.id)}>Delete</button> */}
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
