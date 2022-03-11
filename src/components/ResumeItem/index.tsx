import * as React from "react";
import * as style from "./style";
type Props = {
  title: string;
  value: number;
  color: string;
};
export default function ResumeItem({ title, value, color }: Props) {
  return (
    <style.Container>
      <style.Title>{title}</style.Title>
      <style.Value color={color}> R$ {value}</style.Value>
    </style.Container>
  );
}
