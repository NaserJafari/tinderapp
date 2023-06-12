import "./App.css";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"; 
import { db } from "./config/firebase";
import { auth, googleProvidor } from "./config/firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  // useState voor de credentials en gebruikers
  const [user, setUser] = useState([]);
  const [credentials, setCredentials] = useState([]);

  const haalDocumentenOp = () => {
    const q = query(collection(db, "users"));
    getDocs(q).then((firebaseResponse) => {
      const lijstVanDocumenten = firebaseResponse.docs.map((doc) => doc.data());
      setUser(lijstVanDocumenten);
    });
  };

  // const toevoegenDocument = async () => {
  //   await addDoc(collection(db, "users"), {
  //     email: email,
  //     first_name: first_name,
  //   });
  // };

  const updatePost = async (id) => {
    const postDoc = doc(db, "users", id);
    await updateDoc(postDoc);

  const deletePost = async (id) => {
    const postDoc = doc(db, "users", id);
    await deleteDoc(postDoc);
  };

  const loginMetGoogle = async () => {
    const credentials = await signInWithPopup(auth, googleProvidor);
    setCredentials(credentials);
    // console.log(credentials);
  };

  useEffect(() => {
    haalDocumentenOp();
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={loginMetGoogle}>Login met Google</button>
      </div>
      {user.map((user) => (
        <div key={user.id}>
          <p>{user.email}</p>
          <div>
            <button onClick={() => updatePost(user.id)}>Update</button>
            <button onClick={() => deletePost(user.id)}>Verwijder</button>
          </div>
        </div>
      ))}
    </div>
  );
}
}
export default App; 
