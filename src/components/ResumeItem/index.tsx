import * as React from "react";
import * as style from "./style";
type Props = {
  title: string;
  value: number;
};
export default function ResumeItem({ title, value }: Props) {
  return (
    <style.Container>
      <style.Title>{title}</style.Title>
      <style.Value> R$ {value}</style.Value>
    </style.Container>
  );
}
