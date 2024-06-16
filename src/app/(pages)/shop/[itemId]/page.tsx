"use client";
// useContext to provide item data to child component

import { useState, useContext, useEffect, createContext } from "react";
import ItemDisplay from "./components/itemDisplay";
import ItemEdit from "./components/itemEdit";
import EditButton from "./components/EditButton";
import axios from "axios";
import { ItemContext, itemSchema, defaultItem } from "./components/ItemContext";
import Link from "next/link";

export default async function Page({ params }: { params: { itemId: string } }) {
  let [item, setItem] = useState<itemSchema>(defaultItem);
  const [isEdit, setIsEdit] = useState(false);

  const initItem = async () => {
    try {
      const response = await axios.get(`/api/products/${params.itemId}`);
      setItem(response.data.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };
  useEffect(() => {
    initItem();
  }, []);

  useEffect(() => {
    initItem();
  }, [isEdit]);

  return (
    <>
      <section className="flex items-start justify-center">
        <Link href="/shop">
          <button className="h-10 px-4 py-2 ml-4 mt-5 shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
            Back
          </button>
        </Link>

        <ItemContext.Provider value={item}>
          <div className="m-auto p-2 flex flex-row justify-between w-[90%] mt-3 sm:w-[80%]">
            <div className="flex-1 border border-primary-dark p-3 rounded-lg">
              {isEdit ? <ItemEdit setIsEdit={setIsEdit} /> : <ItemDisplay />}
            </div>
            <EditButton
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              itemId={params.itemId}
            />
          </div>
        </ItemContext.Provider>
      </section>
    </>
  );
}
