import React from "react";
import * as style from "./style";
import { formatCurrentMonth } from "../../helpers/dateFilter";
type Props = {
  currentMonth: string;
};
export default function InfoArea({ currentMonth }: Props) {
  return (
    <style.Container>
      <style.MonthArea>
        <style.MonthArrow>⬅️</style.MonthArrow>
        <style.MonthTitle>{formatCurrentMonth(currentMonth)}</style.MonthTitle>
        <style.MonthArrow>➡️</style.MonthArrow>
      </style.MonthArea>
      <style.ResumeArea></style.ResumeArea>
    </style.Container>
  );
}
