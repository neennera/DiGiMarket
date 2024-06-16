import { getUserId } from "@/_assets/user";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ItemContext } from "./ItemContext";

interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  userId: number;
}

interface paramsSchema {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  itemId: string;
}

export default function EditButton({
  isEdit,
  setIsEdit,
  itemId,
}: paramsSchema) {
  const item = useContext(ItemContext);

  const [userId, setUserId] = useState<Number | null>(null);
  const initItem = async () => {
    try {
      const response = await getUserId();
      setUserId(Number(response));
    } catch (error: unknown) {
      console.log(error);
    }
  };
  useEffect(() => {
    initItem();
  }, []);

  if (userId == item.userId) {
    return (
      <>
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="h-10 px-4 py-2 ml-4 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {isEdit ? "Cancel" : "Edit"}
        </button>
      </>
    );
  } else {
    return <></>;
  }
}