import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='to-primay-dark mt-5 flex h-[200px] w-full flex-col items-center justify-center bg-gradient-to-t from-black py-6 text-white'>
      <div className='text-center'>
        <p className='text-lg font-semibold'>
          The Website made by{' '}
          <a href='#' className='underline hover:text-indigo-200'>
            Naphat Serirak
          </a>
        </p>
        <p>Data on this website is a mockup</p>
        <p>(For educational purposes only)</p>
      </div>
      <div className='mt-4'>
        <a
          href='#'
          className='mx-2 text-sm text-indigo-200 hover:text-indigo-100 hover:underline'
        >
          Contact Me
        </a>
        <a
          href='#'
          className='mx-2 text-sm text-indigo-200 hover:text-indigo-100 hover:underline'
        >
          Source Code
        </a>
        <a
          href='#'
          className='mx-2 text-sm text-indigo-200 hover:text-indigo-100 hover:underline'
        >
          Demo
        </a>
      </div>
    </footer>
  );
}
