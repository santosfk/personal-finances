import React from "react";
import Lottie from "react-lottie";

import MoneyData from "../src/MoneyData.json";

export const MoneyAnimation = () => {
  const defaultOption = {
    autoplay: true,
    loop: false,
    keepLastFrame: true,
    animationData: MoneyData,
  };
  return (
    <Lottie
      isClickToPauseDisabled
      options={defaultOption}
      height={70}
      width={70}
    />
  );
};

export default MoneyAnimation;
