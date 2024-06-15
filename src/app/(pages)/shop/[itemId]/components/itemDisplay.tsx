"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
}

export default function ItemDisplay({ itemId }: { itemId: string }) {
  const [item, setItem] = useState<itemSchema>();
  const initItem = async () => {
    try {
      const response = await axios.get(`/api/products/${itemId}`);
      setItem(response.data.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };
  useEffect(() => {
    initItem();
  }, []);
  return (
    <section>
      <h1 className="text-3xl font-bold">{item?.name}</h1>
      <p className="text-xl">Price : {item?.price}</p>
      <p className="text-xl">Description : {item?.description}</p>
    </section>
  );
}
