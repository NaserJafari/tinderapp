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
  const [users, setUsers] = useState([]);
  const [credential, setCredential] = useState([]);
  const collectionUsers = collection(db, "users");
  const [titel, setTitel] = useState("");
  const [omschrijving, setOmschrijving] = useState("");

  const haalDocumentenOp = async () => {
    const q = query(collection(db, "users"));
    const firebaseResponse = await getDocs(q);
    const lijstVanDocumenten = firebaseResponse.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    });
    setUsers(lijstVanDocumenten);
  };

  const addInfo = async () => {
    const document = {
      titel: titel,
      omschrijving: omschrijving,
    };
    await addDoc(collectionUsers, document);
    await haalDocumentenOp();
    setTitel("");
    setOmschrijving("");
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "users", id);
    await deleteDoc(postDoc);
    await haalDocumentenOp();
  };

  const loginMetGoogle = async () => {
    const credential = await signInWithPopup(auth, googleProvidor);
    setCredential(credential);
  };

  useEffect(() => {
    haalDocumentenOp();
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={loginMetGoogle}>Login met Google</button>
      </div>
      <div>
        <form>
          <input
            type="text"
            value={titel}
            onChange={(e) => setTitel(e.target.value)}
            placeholder="jan123"
          />
          <input
            type="text"
            value={omschrijving}
            onChange={(e) => setOmschrijving(e.target.value)}
            placeholder="123jan"
          />
          <button type="submit" onClick={addInfo}>
            Verzenden
          </button>
        </form>
      </div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.titel}</p>
          <p>{user.omschrijving}</p>
          <button onClick={() => deletePost(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
