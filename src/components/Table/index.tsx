import React from "react";
import * as style from "./styles";

function Table() {
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
    </style.Container>
  );
}
export default Table;
