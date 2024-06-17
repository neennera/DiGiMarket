'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CreateItemForm = (userId: string) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('--------', userId);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
        {
          name,
          price: Number(price),
          description: desc,
          userId,
        }
      );

      if (res.data.message == 'success') {
        router.push('/shop');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='max-w-4xl'>
      <form className='flex flex-col space-y-6'>
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
            className='mt-1 block w-full rounded-md border-gray-300 pl-3 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
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
            className='mt-1 block w-full rounded-md border-gray-300 pl-3 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
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
            className='mt-1 block w-full rounded-md border-gray-300 pl-3 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            type='submit'
            className='text-whiterounded-md inline-flex justify-center self-end rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark'
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateItemForm;
