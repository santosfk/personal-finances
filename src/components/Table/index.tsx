import React from "react";
import * as style from "./styles";

function Table() {
  return (
    <style.Table>
      <thead>
        <tr>
          <style.HeadColum>Data</style.HeadColum>
          <style.HeadColum>Categoria</style.HeadColum>
          <style.HeadColum>Titulo </style.HeadColum>
          <style.HeadColum>Valor</style.HeadColum>
        </tr>
      </thead>
    </style.Table>
  );
}

export default Table;
