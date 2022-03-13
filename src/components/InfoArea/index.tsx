import React from "react";
import * as style from "./style";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import ResumeItem from "../ResumeItem";
type Props = {
  currentMonth: string;
  monthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};
export default function InfoArea({
  currentMonth,
  monthChange,
  income,
  expense,
}: Props) {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    monthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);
  };
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    monthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);
  };
  const showValue = (income - expense).toFixed(2);
  const showExpense = expense.toFixed(2);
  const showIncome = income.toFixed(2);
  return (
    <style.Container>
      <style.MonthArea>
        <style.MonthArrow onClick={handlePrevMonth}>⬅️</style.MonthArrow>
        <style.MonthTitle>{formatCurrentMonth(currentMonth)}</style.MonthTitle>
        <style.MonthArrow onClick={handleNextMonth}> ➡️</style.MonthArrow>
      </style.MonthArea>
      <style.ResumeArea>
        <ResumeItem color="" title="Receitas" value={showIncome} />
        <ResumeItem color="" title="Despesas" value={showExpense} />
        <ResumeItem
          title="Balanço"
          value={showValue}
          color={income - expense < 0 ? "red" : "green"}
        />
      </style.ResumeArea>
    </style.Container>
  );
}
