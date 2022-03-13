import React, { useState } from "react";
import { Item } from "../../types/Item";
import * as style from "./style";
import { useForm } from "react-hook-form";

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
              <label>
                Comida
                <input
                  type="radio"
                  value="food"
                  {...register("category")}
                ></input>
              </label>
              <label htmlFor="rent">
                Aluguel
                <input
                  type="radio"
                  value="rent"
                  {...register("category")}
                ></input>
              </label>
              <label>
                Salario
                <input
                  type="radio"
                  value="salary"
                  {...register("category")}
                ></input>
              </label>
            </style.OptionsRadio>
          </style.CategoryContent>
          <style.TitleContent>
            <label>
              Titulo <input type="text" {...register("title")}></input>
            </label>
          </style.TitleContent>
          <style.ValueContent>
            <label>
              Valor
              <input type="number" {...register("value")}></input>
            </label>
          </style.ValueContent>
        </style.ReceiveAlldata>
        <style.Submit>
          <input type="submit" />
        </style.Submit>
      </style.FormContent>
    </style.Container>
  );
}
