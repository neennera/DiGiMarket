import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchContext } from './SearchContext';

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
        <p className='mb-2 text-xl font-bold'>Item Categories</p>
        <div className='flex flex-col space-y-2'>
          {categoryEntries.map(([itemCategory, color], index) => (
            <button
              key={itemCategory}
              onClick={(e) => {
                toggleCategory(itemCategory);
              }}
              className='flex flex-row items-center space-x-2 text-xl'
            >
              <input
                className='h-[20px] w-[20px] rounded-lg bg-primary focus:ring-2 focus:ring-primary-dark'
                type='checkbox'
                checked={!!categoryFilter[itemCategory]}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  const result = categoryFilter;
                  result[itemCategory] = isChecked;
                  setCategoryFilter(result);
                  // TODO : change to set prev
                  // setCategoryFilter(
                  //   (prevState: { [itemCategory: string]: boolean }) => {
                  //     const result: { [itemCategory: string]: boolean } = {
                  //       ...prevState,
                  //       [itemCategory]: isChecked,
                  //     };
                  //     return result;
                  //   }
                  // );
                }}
              ></input>
              <p>{itemCategory}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
