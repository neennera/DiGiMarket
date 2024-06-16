"use client";
// useContext to provide item data to child component

import { useState, useContext, useEffect, createContext } from "react";
import ItemDisplay from "./components/itemDisplay";
import ItemEdit from "./components/itemEdit";
import EditButton from "./components/EditButton";
import axios from "axios";
import { ItemContext, itemSchema, defaultItem } from "./components/ItemContext";

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

  return (
    <>
      <ItemContext.Provider value={item}>
        <div className="m-auto p-2 flex flex-row justify-between">
          <div className="flex-1">
            {isEdit ? <ItemEdit /> : <ItemDisplay />}
          </div>
          <EditButton
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            itemId={params.itemId}
          />
        </div>
      </ItemContext.Provider>
    </>
  );
}
