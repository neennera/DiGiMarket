"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { getUserId } from "@/_assets/user";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "THB",
  minimumFractionDigits: 2,
});

interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  userId: number;
}

export default function ItemDisplay({ itemId }: { itemId: string }) {
  const [item, setItem] = useState<itemSchema>();
  const [userId, setUserId] = useState<Number | null>(null);
  const initItem = async () => {
    try {
      const response = await axios.get(`/api/products/${itemId}`);
      setItem(response.data.data);
      const response2 = await getUserId();
      setUserId(Number(response2));
    } catch (error: unknown) {
      console.log(error);
    }
  };
  useEffect(() => {
    initItem();
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <h1 className="text-3xl font-bold">{item?.name}</h1>
      <p className="text-xl">Price : {formatter.format(item.price)}</p>
      <p className="text-xl">Description : {item?.description}</p>
    </section>
  );
}
