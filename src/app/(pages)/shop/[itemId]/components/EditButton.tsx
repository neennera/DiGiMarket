'use client';
import { getUserId } from '@/_assets/user';
import { useContext, useEffect, useState } from 'react';
import { ItemContext } from './ItemContext';

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

  const [userId, setUserId] = useState<string | null>(null);
  const initItem = async () => {
    try {
      const response: string = await getUserId();
      setUserId(response);
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
          className='absolute right-5 top-5 h-10 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
        >
          {isEdit ? 'Cancel' : 'Edit'}
        </button>
      </>
    );
  } else {
    return <></>;
  }
}
