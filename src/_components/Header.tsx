import Link from 'next/link';
import React, { useState } from 'react';
import { headers } from 'next/headers';
import axios from 'axios';
import Image from 'next/image';
import { MobileLink } from './conponents/MobileLink';

export default async function Header() {
  const headerRequest = headers();
  const headerId = headerRequest.get('userId');
  let username = 'Login';
  try {
    var userId = JSON.parse(headerId ? headerId : '');
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
          <div className='ml-2 flex flex-row space-x-[7px] font-abril text-lg font-semibold sm:text-2xl'>
            <Image
              src='/icon.png'
              height={22}
              width={22}
              alt='digiLogo'
              className='h-full w-auto'
            />
            <p>DiGi Market</p>
          </div>
        </Link>
        <WebsiteLink username={username} />
        <MobileLink username={username} />
      </div>
    </nav>
  );
}

const WebsiteLink = (props: { username: string }) => {
  return (
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
        <p className='font-bold'>{props.username}</p>
      </Link>
    </div>
  );
};
