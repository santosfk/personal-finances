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
      <style.TableItem>{formatDate(item.date)}</style.TableItem>
      <style.TableItem>{item.category}</style.TableItem>
      <style.TableItem>{item.title}</style.TableItem>
      <style.TableItem>{item.value}</style.TableItem>
    </style.TableContainer>
  );
}

export default TableItems;
