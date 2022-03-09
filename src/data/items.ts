import { Item } from "../types/Item";

export const items: Item[] = [
  {
    date: new Date(2022, 2, 6),
    category: "expense",
    title: "McDonalds",
    value: 32.12,
  },
  {
    date: new Date(2022, 2, 7),
    category: "expense",
    title: "Burger King",
    value: 28,
  },
  {
    date: new Date(2022, 1, 16),
    category: "expense",
    title: "Aluguel Apt",
    value: 2300,
  },
  {
    date: new Date(2022, 5, 18),
    category: "earning",
    title: "Salário ACME",
    value: 4500,
  },
];
