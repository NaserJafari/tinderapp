import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from "./config/firebase";
import { collection } from "firebase/firestore";

function Register()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const collectionUsers = collection(db, "users");

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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
