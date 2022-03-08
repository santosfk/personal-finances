import React from "react";
import * as style from "./styles";
import { Item } from "../../types/Item";

type Props = {
  list: Item[];
};

function Table({ list }: Props) {
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
          <tr key={index}>
            <td>data here</td>
            <td>{item.category}</td>
            <td>{item.title}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </style.Container>
  );
}
export default Table;
