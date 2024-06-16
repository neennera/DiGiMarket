"use client";

import { useState } from "react";
import ItemDisplay from "./components/itemDisplay";
import ItemEdit from "./components/itemEdit";
import EditButton from "./components/EditButton";

export default async function Page({ params }: { params: { itemId: string } }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="m-auto p-2 flex flex-row justify-between">
        <div className="flex-1">
          {isEdit ? (
            <ItemEdit itemId={params.itemId} />
          ) : (
            <ItemDisplay itemId={params.itemId} />
          )}
        </div>
        <EditButton
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          itemId={params.itemId}
        />
      </div>
    </>
  );
}
