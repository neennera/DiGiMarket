import axios from 'axios';
import { useEffect, useState } from 'react';

interface categorySchema {
  id: number;
  itemCategory: string;
  color: string;
}

export default function SideBar() {
  const [category, setCategory] = useState<{ [key: string]: string }>({});
  const initItems = async () => {
    try {
      const response2 = await axios.get('/api/category');
      const newCategory: { [key: string]: string } = {};
      response2.data.data.forEach((item: categorySchema) => {
        newCategory[item.itemCategory] = item.color;
      });
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    initItems();
  }, []);
  const categoryEntries = Object.entries(category);
  return (
    <>
      <div className='w-full rounded-lg bg-slate-200 bg-opacity-15 p-5 sm:w-[85%]'>
        <p className='mb-2 text-xl font-bold'>Item Categories</p>
        <div className='flex flex-col space-y-2'>
          {categoryEntries.map(([itemCategory, color], index) => (
            <div className='flex flex-row items-center space-x-2 text-xl'>
              <input
                className='h-[20px] w-[20px] rounded-lg bg-primary focus:ring-2 focus:ring-primary-dark'
                type='checkbox'
                key={`category-${index}`}
              ></input>
              <p>{itemCategory}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
