import React, { useState } from "react";
import { Item } from "../../types/Item";
import * as style from "./style";
import { useForm } from "react-hook-form";
import {
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  Radio,
} from "@chakra-ui/react";

type Props = {
  handleAddList: (item: Item) => void;
};

export default function AddArea({ handleAddList }: Props) {
  const { register, handleSubmit } = useForm<Item>();

  const onSubmit = (data: Item) => {
    handleAddList(data);
  };
  return (
    <style.Container>
      <style.FormContent onSubmit={handleSubmit(onSubmit)}>
        <style.ReceiveAlldata>
          <style.DataContent>
            <label>
              <span>Data</span>{" "}
              <input type="date" {...register("date")}></input>
            </label>
          </style.DataContent>
          <style.CategoryContent>
            <span> Categoria</span>
            <style.OptionsRadio>
              <label>Comida</label>
              <input
                type="radio"
                value="food"
                {...register("category")}
              ></input>

              <label htmlFor="rent">Aluguel</label>
              <input
                type="radio"
                value="rent"
                {...register("category")}
              ></input>

              <label>Salario</label>
              <input
                type="radio"
                value="salary"
                {...register("category")}
              ></input>
            </style.OptionsRadio>
          </style.CategoryContent>
          <style.TitleContent>
            <label>
              Titulo
              <Input
                style={{ width: "270px" }}
                type="text"
                variant="filled"
                placeholder="Dê um titulo a transação"
                {...register("title")}
              ></Input>
            </label>
          </style.TitleContent>
          <style.ValueContent>
            <label>
              Valor
              <Input
                type="number"
                variant="filled"
                {...register("value")}
              ></Input>
            </label>
          </style.ValueContent>
        </style.ReceiveAlldata>
        <style.Submit>
          <Button style={{ width: "250px" }} type="submit">
            Enviar
          </Button>
        </style.Submit>
      </style.FormContent>
    </style.Container>
  );
}
