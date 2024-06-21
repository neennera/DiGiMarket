'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSearchContext } from '../../shop/components/searchContext';

const CreateItemForm = (params: { userId: string }) => {
  const { categoryDisplay } = useSearchContext();

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');

  const [price, setPrice] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
        {
          name,
          price: Number(price),
          description: desc,
          userId: Number(params.userId),
          categoryId: Number(category),
        }
      );

      if (res.data.message == 'success') {
        router.push('/shop');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeCat = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className='w-full pl-5'>
      <form className='flex w-[90%] flex-col space-y-6'>
        <fieldset>
          <label className='block text-sm font-medium text-gray-200'>
            Item Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
        </fieldset>
        <fieldset>
          <label className='block text-sm font-medium text-gray-200'>
            Item Price
          </label>
          <input
            type='text'
            name='price'
            id='price'
            required
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className='mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
        </fieldset>
        <fieldset>
          <label className='block text-sm font-medium text-gray-200'>
            Category
          </label>
          <select
            name='category'
            className='mt-1 block h-full w-full rounded-md py-1 pl-2 text-black'
            onChange={handleChangeCat}
          >
            {Object.entries(categoryDisplay.categoryName).map(
              ([itemCategory, color], index) => (
                <option value={itemCategory}>
                  {categoryDisplay.categoryName[Number(itemCategory)]}
                </option>
              )
            )}
          </select>
        </fieldset>
        <fieldset>
          <label className='block text-sm font-medium text-gray-200'>
            Item Description
          </label>
          <textarea
            name='desc'
            id='desc'
            required
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          ></textarea>
        </fieldset>
        <fieldset className='flex w-full justify-end'>
          <button
            type='submit'
            className='text-whiterounded-md inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark'
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Publich The Item
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateItemForm;
