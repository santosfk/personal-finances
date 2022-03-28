import React from "react";
import * as style from "./style";
import { firebase, auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { AiFillGoogleCircle as GoogleIcon } from "react-icons/ai";
import {
  BsFillCalculatorFill as Calculator,
  BsGraphDown as Graphic,
} from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";
import MoneyAnimation from "../../animations/components/MoneyAnimation";

export default function Signup() {
  const navigate = useNavigate();
  const LoginInit = async () => {
    const provider = new auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(auth.getAuth(), provider);
    result && navigate("home");
  };
  return (
    <>
      <style.Container>
        <style.Head>
          Entre com sua conta <span>Google</span>
          <style.LoginButton>
            <style.Button onClick={LoginInit}>
              <GoogleIcon className="icon" />
              Entrar
            </style.Button>
          </style.LoginButton>
        </style.Head>
        <style.Content>
          <style.Row>
            <style.Collum color={"#DC143C"}>
              <Calculator className="icon" />
              Calcule Suas <span>Finanças!</span>
            </style.Collum>
            <style.Collum color={"#008B8B"}>
              <Graphic className="SecondIcon" />
              Veja com o que voce e <span>sua familia mais gasta!</span>
            </style.Collum>
            <style.Collum color={"#00FA9A"}>
              <FaPiggyBank className="ThirdIcon" />E aprenda a guardar seu{" "}
              <span>precioso Money!</span>
            </style.Collum>
          </style.Row>
          <MoneyAnimation />
        </style.Content>
      </style.Container>
    </>
  );
}
