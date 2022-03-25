import React from "react";
import * as style from "./style";
import { firebase, auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const LoginInit = async () => {
    const provider = new auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(auth.getAuth(), provider);
    result && navigate("home");
  };
  return (
    <>
      <div>Signup</div>
      <button onClick={LoginInit}>Logar</button>
    </>
  );
}
