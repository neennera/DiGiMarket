'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { ItemContext } from './ItemContext';
import { getUserId } from '@/_assets/user';
import { useSearchContext } from '../../components/searchContext';
export default function ItemEdit({
  setIsEdit,
}: {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const item = useContext(ItemContext);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const [category, setCategory] = useState(0);
  const [userId, setUserId] = useState<Number | null>(null);

  const router = useRouter();
  const { categoryDisplay } = useSearchContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.put(`/api/products/${item.id}`, {
        name,
        price: Number(price),
        description: desc,
        userId,
        categoryId: category,
      });

      setIsEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`/api/products/${item.id}`, {
        data: { userId },
      });

      router.push('/shop');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeCat = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(Number(event.target.value));
  };

  const initItem = async () => {
    try {
      setName(item.name);
      setPrice(item.price);
      setDesc(item.description);
      setCategory(item.categoryId);
      const response = await getUserId();
      setUserId(Number(response));
    } catch (error: unknown) {
      console.log(error);
    }
  };
  useEffect(() => {
    initItem();
  }, []);

  return (
    <section className='relative'>
      {isDelete && (
        <div className='absolute flex h-full w-[100%] flex-col items-center justify-center space-y-1 bg-slate-900'>
          <div className='text-2xl font-bold'>
            Confirm to <span className='underline'>Delete</span> Item
          </div>
          <div className='text-lg italic'>
            your item's data will lost after delete
          </div>

          <div className='space-x-3'>
            <button
              onClick={(e) => {
                deleteItem(e);
              }}
              className='inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 hover:text-black'
            >
              Confirm Delete
            </button>
            <button
              onClick={(e) => {
                setIsDelete(false);
              }}
              className='inline-flex justify-center rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 hover:text-black'
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <p className='mb-4 text-lg italic text-primary'>
        Edit mode : Click "Save Change" to confirm your edit
      </p>
      <form className='w-[50vw] justify-start space-y-6'>
        <div className='flex w-full flex-row space-x-2'>
          <h1 className='w-[20%] text-3xl font-bold'>Name</h1>
          <input
            type='text'
            name='name'
            id='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mt-1 block w-[92%] rounded-md border-gray-300 pl-3 text-3xl text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg'
          />
        </div>
        <div className='flex w-full flex-row space-x-2'>
          <p className='w-[20%] text-xl'>Price </p>
          <input
            type='text'
            name='price'
            id='price'
            required
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className='mt-1 block w-[92%] rounded-md border-gray-300 pl-3 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg'
          />
        </div>

        <div className='flex w-full flex-row space-x-2'>
          <p className='w-[20%] text-xl'>Category </p>

          <select
            name='category'
            className='mt-1 block h-full w-[92%] rounded-md py-1 text-black'
            onChange={handleChangeCat}
            value={category}
          >
            {Object.entries(categoryDisplay.categoryName).map(
              ([itemCategory, color], index) => (
                <option value={itemCategory}>
                  {categoryDisplay.categoryName[Number(itemCategory)]}
                </option>
              )
            )}
          </select>
        </div>
        <div className='flex flex-row space-x-2'>
          <p className='w-[20%] text-xl'>Description </p>
          <textarea
            name='desc'
            id='desc'
            required
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='mt-1 block w-[92%] rounded-md border-gray-300 pl-3 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg'
          ></textarea>
        </div>
        <div className='flex w-full justify-end space-x-5'>
          <button
            type='submit'
            className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save Change
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsDelete(true);
            }}
            className='inline-flex justify-center rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 hover:text-black'
          >
            Delete this Item
          </button>
        </div>
      </form>
    </section>
  );
}
