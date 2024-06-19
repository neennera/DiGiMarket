import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/_components/Loading';
import { ItemCategory } from '@prisma/client';

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

export default function ShopList() {
  const [items, setItems] = useState([]);
  const [categoryColor, setCategoryColor] = useState<{ [key: number]: string }>(
    {}
  );
  const [categoryName, setCategoryName] = useState<{ [key: number]: string }>(
    {}
  );

  const [loading, setLoading] = useState(true);

  const initItems = async () => {
    try {
      const response = await axios.get('/api/products');
      setItems(response.data.data);
      const response2 = await axios.get('/api/category');
      const categoryColorMap: { [key: string]: string } = {};
      const categoryNameMap: { [key: string]: string } = {};
      response2.data.data.forEach((item: categorySchema) => {
        categoryColorMap[item.id] = item.color;
        categoryNameMap[item.id] = item.itemCategory;
      });
      setCategoryColor(categoryColorMap);
      setCategoryName(categoryNameMap);
    } catch (error) {
      console.log(error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    initItems();
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className='grid-col-1 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {items.map((item: itemSchema) => (
          <Link key={item.id} href={`/shop/${item.id}`}>
            <div className='min-h-[180px] w-[240px] space-y-2 rounded-md bg-gray-200 p-2 text-black hover:bg-gray-300'>
              <div className='relative h-[120px] w-full bg-gray-400'>
                <div
                  className='absolute bottom-1 right-0.5 flex items-center justify-center rounded-lg px-1 py-0.5 font-semibold text-black opacity-80'
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
        ))}
      </div>
    </>
  );
}
