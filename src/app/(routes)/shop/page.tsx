"use client";

import Link from "next/link";
import SearchForm from "./components/SearchForm";
import { Suspense, useEffect, useState } from "react";

interface itemSchema {
  id: number;
  name: string;
}

export async function getShop() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/Shops`);

  if (!response.ok) {
    throw new Error("can not fetxh");
  } else {
    return response.json();
  }
}

export default function Page() {
  const [items, setItems] = useState([]);
  const initItems = async () => {
    try {
      const res = await getShop();
      setItems(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    initItems();
  }, []);

  return (
    <section>
      <h1>Shoping Page</h1>
      <div>
        <h2>Searching a shop</h2>
        <SearchForm />
      </div>

      <div className="flex flex-row flex-wrap w-[80vw] space-x-5 space-y-2">
        {items.map((item: itemSchema) => (
          <Link key={item.id} href={`/shop/${item.id}`}>
            <div className="bg-slate-200 rounded-md w-[200px] h-[80px] hover:bg-slate-300 text-black p-2">
              <p className="font-bold text-md">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
