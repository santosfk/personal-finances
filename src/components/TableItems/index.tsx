import React from "react";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";
import * as style from "./style";
type Props = {
  item: Item;
  index: number;
  handleRemoveItem: (index: number, item: Item) => void;
};
function TableItems({ item, index, handleRemoveItem }: Props) {
  return (
    <style.TableContainer>
      <style.TableItem>{formatDate(item.date)}</style.TableItem>
      <style.TableItem>
        <style.Category
          color={categories[item.category].expense ? "#DC143C" : "#00FA9A"}
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
      <style.RemoveItem onClick={() => handleRemoveItem(index, item)}>
        X
      </style.RemoveItem>
    </style.TableContainer>
  );
}

export default TableItems;
