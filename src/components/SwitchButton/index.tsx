import React from "react";
import { Switch } from "@chakra-ui/react";
import * as style from "./style";
type Props = {
  switchTheme: () => void;
};
export default function SwitchButton({ switchTheme }: Props) {
  return (
    <style.LabelSwitch>
      <Switch onChange={() => switchTheme()} size="sm" id="switch-theme" />
    </style.LabelSwitch>
  );
}
