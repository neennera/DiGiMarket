'use client';
import { useContext, useEffect, useState } from 'react';
import { ItemContext } from './ItemContext';
import { useSearchContext } from '../../components/SearchContext';
import Image from 'next/image';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'THB',
  minimumFractionDigits: 2,
});

export default function ItemDisplay() {
  const item = useContext(ItemContext);
  const { categoryDisplay } = useSearchContext();
  return (
    <div className='flex flex-col space-y-3 px-5 py-3'>
      <h1 className='text-3xl font-bold'>{item?.name}</h1>
      <div className='flex w-full flex-col max-sm:space-y-5 sm:flex-row sm:space-x-10'>
        <div className='flex h-[200px] w-full items-center justify-center self-center rounded-lg bg-gray-600 bg-opacity-40 py-4 sm:h-[300px] sm:w-[50%]'>
          <Image
            width={400}
            height={400}
            alt='product image'
            src={categoryDisplay.categoryImage[Number(item.categoryId)]}
            className='h-full w-auto object-fill'
            priority={true}
          ></Image>
        </div>
        <div className='mb-5 flex flex-col justify-between sm:w-[50%]'>
          <div className='space-y-2'>
            <p className='text-xl'>
              <span className='font-semibold'>Price :</span>{' '}
              {formatter.format(item.price)}
            </p>
            <p className='text-xl'>
              <span className='font-semibold'>Category :</span>{' '}
              {categoryDisplay.categoryName[item?.categoryId]}
            </p>
            <p className='text-xl'>
              <span className='font-semibold'>Description :</span>{' '}
              {item?.description}
            </p>
          </div>

          <button className='mt-5 w-[90%] self-center rounded-md bg-primary py-2 font-semibold text-black transition-all hover:scale-105 hover:bg-primary-dark hover:text-white'>
            Add to your cart
          </button>
        </div>
      </div>
    </div>
  );
}
