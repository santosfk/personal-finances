import React from "react";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter.";
import { categories } from "../../data/categories";
import * as style from "./style";
type Props = {
  item: Item;
};
function TableItems({ item }: Props) {
  return (
    <style.TableContainer>
      <style.TableItem>{formatDate(item.date)}</style.TableItem>
      <style.TableItem>
        <style.Category
          color={categories[item.category].expense ? "red" : "green"}
        >
          {categories[item.category].title}
        </style.Category>
      </style.TableItem>
      <style.TableItem>{item.title}</style.TableItem>
      <style.TableItem>
        <style.Value
          color={categories[item.category].expense ? "red" : "green"}
        >
          {item.value}
        </style.Value>
      </style.TableItem>
    </style.TableContainer>
  );
}

export default TableItems;
