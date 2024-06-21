import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/_components/Loading';
import { ItemCategory } from '@prisma/client';
import Image from 'next/image';

interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  categoryId: number;
}
interface categorySchema {
  id: number;
  itemCategory: string;
  color: string;
}

export default function ShopList(item: itemSchema) {
  const [categoryColor, setCategoryColor] = useState<{ [key: number]: string }>(
    {}
  );
  const [categoryName, setCategoryName] = useState<{ [key: number]: string }>(
    {}
  );
  const [categoryImage, setCategoryImage] = useState<{ [key: number]: string }>(
    {
      0: '/productsImage/noCategory_mock.webp',
      1: '/productsImage/postit_mock.jpg',
      2: '/productsImage/planner_mock.jpg',
      3: '/productsImage/sticker_mock.png',
    }
  );

  return (
    <>
      <div className='grid-col-1 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        <Link key={item.id} href={`/shop/${item.id}`}>
          <div className='min-h-[180px] w-[240px] space-y-2 rounded-md bg-gray-200 p-2 text-black hover:bg-gray-300'>
            <div className='relative h-[120px] w-full bg-gray-400'>
              <Image
                width={400}
                height={400}
                alt='product image'
                src={categoryImage[Number(item.categoryId)]}
                className='h-full object-cover'
              ></Image>
              <div
                className='absolute bottom-1 right-0.5 flex items-center justify-center rounded-lg px-1 py-0.5 font-semibold text-black opacity-80 group-hover:opacity-100'
                style={{ backgroundColor: categoryColor[item.categoryId] }}
              >
                <p>{categoryName[Number(item.categoryId)]}</p>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='text-xl font-bold'>{item.name}</p>
              <p className='text-md self-end text-end font-semibold text-slate-600'>
                {item.price} ฿
              </p>
            </div>

            <p>{item.description.slice(0, 20)}...</p>
          </div>
        </Link>
      </div>
    </>
  );
}
