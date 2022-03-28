import React from "react";

import { useLottie } from "lottie-react";

import MoneyData from "../src/MoneyData.json";

export default function MoneyAnimation() {
  const defaultOption = {
    autoplay: true,
    loop: true,
    keepLastFrame: true,
    animationData: MoneyData,
  };
  const style = {
    width: "350px",
    height: "350px",
  };
  const { View } = useLottie(defaultOption, style);
  return View;
}
