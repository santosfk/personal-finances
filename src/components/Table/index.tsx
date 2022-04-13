import React, { useState } from "react";
import * as style from "./styles";
import { Item } from "../../types/Item";
import TableItems from "../TableItems";

type Props = {
  list: Item[];
  handleRemoveItem: (index: number, item: Item) => void;
};

function Table({ list, handleRemoveItem }: Props) {
  return (
    <style.Container>
      <thead>
        <tr>
          <style.HeadColum width={100}>Data</style.HeadColum>
          <style.HeadColum width={200}>Categoria</style.HeadColum>
          <style.HeadColum>Titulo</style.HeadColum>
          <style.HeadColum width={100}>Valor</style.HeadColum>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItems
            key={index}
            item={item}
            index={index}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </tbody>
    </style.Container>
  );
}
export default Table;
