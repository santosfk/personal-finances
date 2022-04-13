import React from "react";
import { Switch } from "@chakra-ui/react";
import { BsFillSunFill as Sun } from "react-icons/bs";
import { BsFillMoonFill as Moon } from "react-icons/bs";
import * as style from "./style";
type Props = {
  switchTheme: () => void;
};
export default function SwitchButton({ switchTheme }: Props) {
  return (
    <style.LabelSwitch>
      <Sun className="sun" />
      <Switch onChange={() => switchTheme()} size="md" className="switch" />
      <Moon className="moon" />
    </style.LabelSwitch>
  );
}
