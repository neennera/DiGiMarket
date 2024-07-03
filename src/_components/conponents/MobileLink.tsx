'use client';

import Link from 'next/link';
import { useState } from 'react';

export const MobileLink = (props: { username: string }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className='block sm:hidden'>
      <button
        className='hidden space-y-0.5 max-sm:block'
        onClick={(e) => {
          setIsShow(!isShow);
        }}
      >
        <div className='h-[4px] w-[20px] rounded-xl bg-slate-300'></div>
        <div className='h-[4px] w-[20px] rounded-xl bg-slate-300'></div>
        <div className='h-[4px] w-[20px] rounded-xl bg-slate-300'></div>
      </button>
      {isShow && (
        <div className='absolute inset-0 top-[10vh] -z-10 flex h-[85vh] w-full flex-col items-center justify-start space-y-10 rounded-lg bg-primary-dark pt-[40px] font-normal'>
          <Link
            onClick={(e) => {
              setIsShow(false);
            }}
            href='/shop'
          >
            <p>Shops</p>
          </Link>
          <Link
            onClick={(e) => {
              setIsShow(false);
            }}
            href='/about'
          >
            <p>About</p>
          </Link>
          <Link
            onClick={(e) => {
              setIsShow(false);
            }}
            href='/cart'
          >
            <p>My Cart</p>
          </Link>
          <Link
            onClick={(e) => {
              setIsShow(false);
            }}
            href='/user'
          >
            <p className='font-bold'>{props.username}</p>
          </Link>
        </div>
      )}
    </div>
  );
};
