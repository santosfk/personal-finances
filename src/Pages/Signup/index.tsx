import React from "react";
import * as style from "./style";
import { firebase, auth } from "../../services/firebase";

export default function Signup() {
  const LoginInit = async () => {
    const provider = new auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(auth.getAuth(), provider);
    console.log(result);
  };
  return (
    <>
      <div>Signup</div>
      <button onClick={LoginInit}>Logar</button>
    </>
  );
}
