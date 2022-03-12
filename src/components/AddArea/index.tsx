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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Data <input type="date" {...register("date")}></input>
        </label>
        <label>
          Categoria
          <input type="radio" value="food" {...register("category")}></input>
          <input type="radio" value="rent" {...register("category")}></input>
          <input type="radio" value="salary" {...register("category")}></input>
        </label>
        <label>
          Titulo <input type="text" {...register("title")}></input>
        </label>
        <label>
          Valor <input type="number" {...register("value")}></input>
          <input type="submit" />
        </label>
      </form>
    </style.Container>
  );
}
