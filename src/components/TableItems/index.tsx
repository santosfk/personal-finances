import React from "react";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter.";
type Props = {
  item: Item;
};
function TableItems({ item }: Props) {
  return (
    <tr>
      <td>{formatDate(item.date)}</td>
      <td>{item.category}</td>
      <td>{item.title}</td>
      <td>{item.value}</td>
    </tr>
  );
}

export default TableItems;
