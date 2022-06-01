import React, { useEffect, useState } from "react";
import * as style from "./style";
import { categories } from "../../data/categories";
import { items } from "../../data/items";
import { Item } from "../../types/Item";
import { filterListByMonth, getCurrentMonth } from "../../helpers/dateFilter";
import Table from "../../components/Table";
import InfoArea from "../../components/InfoArea";
import AddArea from "../../components/AddArea";
import moment from "moment";
import { ThemeProvider } from "styled-components";
import themes from "../../themes";
import SwitchButton from "../../components/SwitchButton";
import { DiGithubFull as GithubIcon } from "react-icons/di";
import { theme } from "@chakra-ui/react";
function Home() {
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

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
  const handleRemoveItem = (index: number, item: Item) => {
    const newList = [...filteredList];
    const listFilter = newList.filter((newItem) => newItem !== item);
    setList(listFilter);
  };

  const handleAddList = (item: Item) => {
    let newList: Item[] = [...list];
    const newData = moment(item.date, "YYYY-MM-DD").toDate();
    let pushList = newList.push({
      date: newData,
      category: item.category,
      title: item.title,
      value: Number(item.value),
    });
    setList(newList);

    console.log(pushList);
    //teste
  };
  const switchTheme = () => {
    setChangeTheme(!changeTheme);
  };
  const [changeTheme, setChangeTheme] = useState<Boolean>(false);
  return (
    <ThemeProvider theme={changeTheme ? themes.dark : themes.light}>
      <style.Container>
        <style.Header>
          <style.GitHubWrapper href="https://github.com/santosfk/personal-finances">
            <GithubIcon color={changeTheme ? "white" : "black"} />
          </style.GitHubWrapper>
          <style.Title>Personal Finances</style.Title>
          <SwitchButton switchTheme={switchTheme} />
        </style.Header>
        <style.Body>
          <InfoArea
            currentMonth={currentMonth}
            monthChange={handleMonthChange}
            income={income}
            expense={expense}
          />
          <AddArea handleAddList={handleAddList} />

          <Table list={filteredList} handleRemoveItem={handleRemoveItem} />
        </style.Body>
      </style.Container>
    </ThemeProvider>
  );
}

export default Home;
