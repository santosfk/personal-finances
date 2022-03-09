import React from "react";
import * as style from "./style";
export default function InfoArea() {
  return (
    <style.Container>
      <style.MonthArea>
        <style.MonthArrow>⬅️</style.MonthArrow>
        <style.MonthTitle>..</style.MonthTitle>
        <style.MonthArrow>➡️</style.MonthArrow>
      </style.MonthArea>
      <style.ResumeArea></style.ResumeArea>
    </style.Container>
  );
}
