"use client";

import { useState } from "react";
import ItemDisplay from "./components/itemDisplay";
import ItemEdit from "./components/itemEdit";

export default async function Page({ params }: { params: { itemId: string } }) {
  const [isEdit, setIsEdit] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
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
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="h-10 px-4 py-2 ml-4 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {isEdit ? "Cancel" : "Edit"}
        </button>
      </div>
    </>
  );
}
