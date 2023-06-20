import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from "./config/firebase";
import { collection } from "firebase/firestore";
import { useEffect, useCallback } from "react";
import {
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function Register()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [plaatsnaam, setPlaatsnaam] = useState("");
  const [foto, setFoto] = useState("");
  const [geslacht, setGeslacht] = useState("");
  const [users, setUsers] = useState([]);
  const auth = getAuth();
  const collectionUsers = collection(db, "users");
  const createUser = async (e) => {
    e.preventDefault();
    await addDoc(collectionUsers, {
      voornaam: voornaam,
      achternaam: achternaam,
      geslacht: geslacht,
      plaatsnaam: plaatsnaam,
      foto: foto,
    });
    setVoornaam("");
    setAchternaam("");
  };



  createUserWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input
            value={voornaam}
            onChange={(e) => setVoornaam(e.target.value)}
            placeholder="Voornaam"
          />
          <input
            value={achternaam}
            onChange={(e) => setAchternaam(e.target.value)}
            placeholder="Achternaam"
          />
          <input
            value={geslacht}
            onChange={(e) => setGeslacht(e.target.value)}
            placeholder="Geslacht"
          />
          <input
            value={plaatsnaam}
            onChange={(e) => setPlaatsnaam(e.target.value)}
            placeholder="Plaatsnaam"
          />
          <input
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            placeholder="Foto"
          />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
