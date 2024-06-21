'use client';
// useContext to provide item data to child component

import { useState, useEffect } from 'react';
import ItemDisplay from './components/itemDisplay';
import ItemEdit from './components/itemEdit';
import EditButton from './components/EditButton';
import axios from 'axios';
import { ItemContext, itemSchema, defaultItem } from './components/ItemContext';
import { SearchProvider } from '../components/searchContext';
import Link from 'next/link';

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
      <section className='flex items-start justify-center'>
        <Link href='/shop'>
          <button className='ml-4 mt-5 h-10 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark'>
            Back
          </button>
        </Link>

        <ItemContext.Provider value={item}>
          <div className='m-auto mt-3 flex w-[90%] flex-row justify-between p-2 sm:w-[80%]'>
            <div className='flex-1 rounded-lg border border-primary-dark p-3'>
              <SearchProvider>
                {isEdit ? <ItemEdit setIsEdit={setIsEdit} /> : <ItemDisplay />}
              </SearchProvider>
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
