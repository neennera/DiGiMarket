import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

import Loading from "@/components/Loading";

interface itemSchema {
  id: number;
  name: string;
}

async function getShops() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/Shops`);

  if (!response.ok) {
    throw new Error("can not fetxh");
  } else {
    return response.json();
  }
}

export default function ShopList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const initItems = async () => {
    try {
      const res = await getShops();
      setItems(res);
    } catch (error) {
      console.log(error);
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
              <p className="font-bold text-md">{item.name}</p>
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
