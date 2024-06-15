import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";

interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
}

export default function ShopList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const initItems = async () => {
    try {
      const response = await axios.get("/api/products");
      setItems(response.data.data);
    } catch (error) {
      console.log(error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    initItems();
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 w-full">
        {items.map((item: itemSchema) => (
          <Link key={item.id} href={`/shop/${item.id}`}>
            <div className="bg-slate-200 relative rounded-md w-[240px] min-h-[180px] hover:bg-slate-300 text-black p-2">
              <div className="bg-slate-400 w-full h-[80px]"></div>
              <p className="font-bold text-xl">{item.name}</p>
              <p className="text-md">{item.price}</p>
              <div className="flex flex-row space-x-2">
                <div className="bg-red-200 px-1 rounded-md">tag 1</div>
                <div className="bg-red-200 px-1 rounded-md">tag 1</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
