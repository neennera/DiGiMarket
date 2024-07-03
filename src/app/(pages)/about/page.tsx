'use client';

import Link from 'next/link';
import React from 'react';
import Feature from './conponents/Feature';
import Timeline from './conponents/Timeline';

export default function Page() {
  return (
    <main className='flex w-full items-center justify-center'>
      <section className='w-full rounded-xl border border-primary bg-black bg-opacity-40 px-8 py-5 sm:w-[90%]'>
        <h1 className='animate-fade-in mb-6 text-4xl font-bold'>
          Digital Product Marketplace
        </h1>
        <p className='animate-slide-in mb-8 text-lg'>
          This is a digital product marketplace website. Users can shop for
          items that shops put on sale.
        </p>

        <div className='mb-5 flex flex-row space-x-2'>
          <div className='mr-2 h-[50px] w-[8px] bg-white'></div>
          <h2 className='animate-fade-in mb-4 text-3xl font-semibold'>
            What is a Digital Product?
          </h2>
        </div>

        <p className='animate-slide-in mb-2 text-lg'>
          A product based on digital technology, existing in a non-physical
          form.
        </p>
        <p className='animate-slide-in mb-8 text-lg'>
          This website focuses on study-related products like digital planners,
          stickers, digital post-its, etc.
        </p>

        <Feature />
        <Timeline />
      </section>
    </main>
  );
}
