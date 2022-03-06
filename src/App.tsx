import React, { useState } from "react";
import * as style from "./app.styles";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { Item } from "./types/Item";
function App() {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState();
  return (
    <style.Container>
      <style.Header>
        <style.Title>Personal Finances</style.Title>
      </style.Header>
      <style.Body>..</style.Body>
    </style.Container>
  );
}

export default App;
