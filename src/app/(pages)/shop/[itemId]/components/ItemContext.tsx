import React, { createContext } from "react";

export interface itemSchema {
  itemId: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  userId: number;
}

export const defaultItem: itemSchema = {
  itemId: 0,
  name: "items name",
  description: "",
  price: 0,
  createdAt: new Date(),
  userId: -1,
};

export const ItemContext = createContext<itemSchema>(defaultItem);
