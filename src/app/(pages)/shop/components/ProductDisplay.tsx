import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useSearchContext } from './SearchContext';

interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  categoryId: string;
}

export default function ProductDisplay({ item }: { item: itemSchema }) {
  const { categoryDisplay } = useSearchContext();

  const itemId = item.id || '0';
  const itemSrc =
    categoryDisplay.categoryImage[
      categoryDisplay.categoryName[item.categoryId]
    ] || '/productsImage/noCategory_mock.webp';

  return (
    <>
      <div className='grid-col-1 md:grid-col-3 grid w-full gap-5 transition-all hover:scale-110 sm:grid-cols-2 xl:grid-cols-4'>
        <Link key={item.id} href={`/shop/${itemId}`}>
          <div className='min-h-[180px] w-[240px] space-y-2 rounded-md bg-gray-200 p-2 text-black hover:bg-gray-300'>
            <div className='relative h-[120px] w-full bg-gray-400'>
              <Image
                width={400}
                height={400}
                alt='product image'
                src={itemSrc}
                className='h-full object-cover'
                priority={true}
              ></Image>
              <div
                className='absolute bottom-1 right-0.5 flex items-center justify-center rounded-lg px-1 py-0.5 font-semibold text-black opacity-80 group-hover:opacity-100'
                style={{
                  backgroundColor:
                    categoryDisplay.categoryColor[item.categoryId],
                }}
              >
                <p>{categoryDisplay.categoryName[item.categoryId]}</p>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='text-xl font-bold'>{item.name}</p>
              <p className='text-md self-end text-end font-semibold text-slate-600'>
                {item.price} ฿
              </p>
            </div>

            <p>{item.description?.slice(0, 20)}...</p>
          </div>
        </Link>
      </div>
    </>
  );
}
