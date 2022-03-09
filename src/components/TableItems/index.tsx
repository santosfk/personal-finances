import React from "react";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter.";
import * as style from "./style";
type Props = {
  item: Item;
};
function TableItems({ item }: Props) {
  return (
    <style.TableContainer>
      <td>{formatDate(item.date)}</td>
      <td>{item.category}</td>
      <td>{item.title}</td>
      <td>{item.value}</td>
    </style.TableContainer>
  );
}

export default TableItems;
