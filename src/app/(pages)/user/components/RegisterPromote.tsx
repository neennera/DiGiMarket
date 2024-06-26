'use client';
import axios from 'axios';
import { getUserId } from '@/_assets/user';
import { useRouter } from 'next/navigation';

export default function RegisterPromote() {
  const router = useRouter();
  const handleSwitchRole = async (role: string) => {
    const userId = await getUserId();
    try {
      const res = await axios.post(`/api/user/role`, {
        userId,
        role,
      });
      window.location.reload();
    } catch (error: unknown) {
      console.log(error);
    }
  };
  return (
    <div className='flex w-full flex-col space-y-5 sm:flex-row sm:space-x-10 sm:space-y-0'>
      <div className='relative flex min-h-[260px] flex-col rounded-md bg-gray-800 p-5 text-white sm:w-[85%]'>
        <h5 className='mb-2 text-2xl font-semibold tracking-tight'>Customer</h5>
        <p className='font-normal0 mb-3'>shop freely in DiGi Market</p>
        <ol className='list-disc pl-8'>
          <li className='mb-1'>Purchase Items</li>
          <li className='mb-1'>View Purchase History</li>
          <li className='mb-1'>Leave Reviews (Phase 2)</li>
        </ol>
        <button
          onClick={(e) => {
            handleSwitchRole('customer');
          }}
          className='absolute bottom-5 w-[80%] self-center rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-dark hover:text-white'
        >
          Switch to Customer
        </button>
      </div>
      <div className='relative flex min-h-[260px] flex-col rounded-md bg-gray-800 p-5 text-white sm:w-[85%]'>
        <h5 className='mb-2 text-2xl font-semibold tracking-tight'>Shop</h5>
        <p className='font-normal0 mb-3'>
          Sale your digital product on DiGi Markey
        </p>
        <ol className='list-disc pl-8'>
          <li className='mb-1'>Add New Product</li>
          <li className='mb-1'>Tracking Sales</li>
          <li className='mb-1'>Promotion Campaign (Phase 2)</li>
        </ol>
        <button
          onClick={(e) => {
            handleSwitchRole('shop');
          }}
          className='absolute bottom-5 w-[80%] self-center rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium hover:bg-primary-dark hover:text-white'
        >
          Switch to Shop
        </button>
      </div>
    </div>
  );
}
