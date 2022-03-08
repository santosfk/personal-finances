import React, { useEffect, useState } from "react";
import * as style from "./app.styles";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { Item } from "./types/Item";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter.";
import Table from "./components/Table";
function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  console.log(filteredList);
  return (
    <style.Container>
      <style.Header>
        <style.Title>Personal Finances</style.Title>
      </style.Header>
      <style.Body>
        <Table list={filteredList} />
      </style.Body>
    </style.Container>
  );
}

export default App;
