import React, { useEffect, useState } from "react";
import * as style from "./app.styles";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { Item } from "./types/Item";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import Table from "./components/Table";
import infoArea from "./components/InfoArea";
import InfoArea from "./components/InfoArea";
function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  console.log(filteredList);

  useEffect(() => {
    let incomeValue = 0;
    let expenseValue = 0;

    for (let i in filteredList)
      if (categories[filteredList[i].category].expense) {
        expenseValue += filteredList[i].value;
      } else {
        incomeValue += filteredList[i].value;
      }
    setExpense(expenseValue);
    setIncome(incomeValue);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <style.Container>
      <style.Header>
        <style.Title>Personal Finances</style.Title>
      </style.Header>
      <style.Body>
        <InfoArea
          currentMonth={currentMonth}
          monthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <Table list={filteredList} />
      </style.Body>
    </style.Container>
  );
}

export default App;
