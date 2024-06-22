import Link from 'next/link';
import React, { useState } from 'react';
import { headers } from 'next/headers';
import axios from 'axios';
import Image from 'next/image';

export default async function Header() {
  const headerRequest = headers();
  const userId = JSON.parse(headerRequest.get('userId'));
  let username = 'Login';
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId.userId}`
    );
    const user = res.data.data;
    username = `Hi, ${user.username}`;
  } catch (error: unknown) {
    username = 'Login';
  }

  return (
    <nav>
      <div className='text-md shadow-bl fixed left-1/2 top-2 z-50 flex h-[50px] w-[90vw] -translate-x-1/2 transform flex-row items-center justify-between self-center rounded-full bg-primary bg-opacity-80 px-5 py-3 font-semibold text-black shadow-lg shadow-sky-800 backdrop-blur-sm'>
        <Link href='/'>
          <div className='ml-2 flex flex-row space-x-2 font-abril text-lg font-semibold sm:text-2xl'>
            <Image
              src='/icon.png'
              height={20}
              width={20}
              className='h-full w-auto'
            />
            DiGi Market
          </div>
        </Link>
        {/* <div className='flex flex-row space-x-5 max-sm:hidden'>
          <input className='h-[30px] w-[30vw] rounded-md bg-white'></input>
          <div className='flex cursor-pointer items-center justify-center rounded-md bg-primary-dark px-3 text-white'>
            Search
          </div>
        </div> */}
        <div className='flex flex-row space-x-5 max-sm:hidden'>
          <Link href='/shop'>
            <p>Shops</p>
          </Link>

          <Link href='/about'>
            <p>About</p>
          </Link>
          <Link href='/cart'>
            <p>My Cart</p>
          </Link>
          <Link href='/user'>
            <p className='font-bold'>{username}</p>
          </Link>
        </div>
        <div className='hidden space-y-0.5 max-sm:block'>
          <div className='h-[4px] w-[20px] rounded-xl bg-slate-300'></div>
          <div className='h-[4px] w-[20px] rounded-xl bg-slate-300'></div>
          <div className='h-[4px] w-[20px] rounded-xl bg-slate-300'></div>
        </div>
      </div>
    </nav>
  );
}
