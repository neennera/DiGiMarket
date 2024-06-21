import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchContext } from './searchContext';

interface categorySchema {
  id: number;
  itemCategory: string;
  color: string;
}

export default function SideBar() {
  const [category, setCategory] = useState<{ [key: string]: string }>({});
  const { categoryFilter, searchText, sortBy, setCategoryFilter } =
    useSearchContext();

  const toggleCategory = (category: string) => {
    const data = {
      ...categoryFilter,
    };
    data[category] = !data[category];
    setCategoryFilter(data);
  };
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

  const [categoryNow, setCategoryNow] = useState<JSX.Element[] | undefined>(
    undefined
  );
  useEffect(() => {
    const data: any = Object.keys(categoryFilter).map((item) => {
      if (categoryFilter[item]) {
        return (
          <p className='mb-2 ml-2' key={item}>
            {item}
          </p>
        );
      }
    });
    setCategoryNow(data);
  }, [categoryFilter]);
  const categoryEntries = Object.entries(category);
  return (
    <>
      <div className='w-full rounded-lg bg-slate-200 bg-opacity-15 p-5 sm:w-[85%]'>
        <div className='mb-10 flex flex-col space-y-3'>
          <p className='text-xl font-bold'>Search</p>
          <p>"{searchText}"</p>
          {sortBy}
          {categoryNow}
        </div>
        <p className='mb-2 text-xl font-bold'>Item Categories</p>
        <div className='flex flex-col space-y-2'>
          {categoryEntries.map(([itemCategory, color], index) => (
            <button
              onClick={(e) => {
                toggleCategory(itemCategory);
              }}
              className='flex flex-row items-center space-x-2 text-xl'
            >
              <input
                className='h-[20px] w-[20px] rounded-lg bg-primary focus:ring-2 focus:ring-primary-dark'
                type='checkbox'
                key={`category-${index}`}
                checked={categoryFilter[itemCategory]}
              ></input>
              <p>{itemCategory}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
