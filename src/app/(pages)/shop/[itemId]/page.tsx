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
import RecommendItem from './components/RecommendItem';

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
      <section className='flex w-full items-start justify-center space-x-2'>
        <Link href='/shop'>
          <button className='ml-4 mt-5 h-10 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark'>
            Back
          </button>
        </Link>

        <div className='flex w-[90vw] flex-col space-y-[40px] sm:w-[70vw]'>
          <ItemContext.Provider value={item}>
            <div className='m-auto mt-3 flex w-full flex-row justify-between p-2'>
              <div className='relative w-full flex-row rounded-lg border border-primary bg-black bg-opacity-60 p-3 shadow-white drop-shadow-xl'>
                <SearchProvider>
                  {isEdit ? (
                    <ItemEdit setIsEdit={setIsEdit} />
                  ) : (
                    <ItemDisplay />
                  )}
                </SearchProvider>
                <EditButton
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  itemId={params.itemId}
                />
              </div>
            </div>
          </ItemContext.Provider>
          <RecommendItem />
        </div>
      </section>
    </>
  );
}
