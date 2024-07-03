import React, { createContext } from 'react';

export interface itemSchema {
  id: string;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  userId: string;
  categoryId: string;
}

export const defaultItem: itemSchema = {
  id: '0',
  name: 'items name',
  description: '',
  price: 0,
  createdAt: new Date(),
  userId: '0',
  categoryId: '0',
};

export const ItemContext = createContext<itemSchema>(defaultItem);
