import React from 'react';
import { headers } from 'next/headers';
import CreateItemForm from './components/CreateItemForm';
import RoleManage from './components/RoleManage';
import Sidebar from './components/Sidebar';
import PurchaseHistory from './components/PurchaseHistory';
import axios from 'axios';

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export default async function Page() {
  const headerRequest = headers();
  const userId = JSON.parse(headerRequest.get('userId'));

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId.userId}`
  );
  const user = res.data.data;

  return (
    <>
      <div className='m-auto mt-5 flex h-full w-[95%] sm:flex-row'>
        <Sidebar />
        <div className='w-full space-y-20 py-3 sm:w-[60%]'>
          <div id='userInfo' className='scroll-mt-[11vh]'>
            <h1 className='mb-6 text-5xl font-semibold'>
              Hello, {user.username} 👋🏽
            </h1>
            <p className='text-lg'>Role : {user.role}</p>
            <p className='text-lg'>
              Join DiGi since : {formatDate(new Date(user.createdAt))}
            </p>
            <PurchaseHistory />
          </div>
          <RoleManage />

          <div id='shopManage' className='scroll-mt-[11vh]'>
            <h1 className='mb-6 flex flex-row items-center text-2xl font-semibold'>
              <div className='mr-2 h-[50px] w-[8px] bg-white'></div>Shop
              Management
            </h1>
            <div id='newItem' className='scroll-mt-[11vh]'>
              <h1 className='mb-6 text-2xl font-semibold'>Create a New Item</h1>
              <CreateItemForm userId={user.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
