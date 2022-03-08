import React from "react";
import { Item } from "../../types/Item";
type Props = {
  item: Item;
};
function TableItems({ item }: Props) {
  return (
    <tr>
      <td>{item.title}</td>
    </tr>
  );
}

export default TableItems;
