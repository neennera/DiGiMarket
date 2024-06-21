import React, { createContext } from 'react';

export interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  userId: number;
  categoryId: number;
}

export const defaultItem: itemSchema = {
  id: -1,
  name: 'items name',
  description: '',
  price: 0,
  createdAt: new Date(),
  userId: -1,
  categoryId: 0,
};

export const ItemContext = createContext<itemSchema>(defaultItem);
