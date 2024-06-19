'use client';

import SearchForm from './components/SearchForm';
import ShopList from './components/ShopList';
import SideBar from './components/SideBar';

export default function Page() {
  return (
    <section>
      <div className='flex flex-row p-5'>
        <div className='h-full w-[25vw]'>
          <SideBar />
        </div>
        <div className='w-[70vw] space-y-5'>
          <h1 className='text-3xl font-bold'>Our Shops</h1>
          <div className='flex flex-row space-x-2'>
            <h2>Searching a shop </h2>
            <SearchForm />
          </div>
          <ShopList />
        </div>
      </div>
    </section>
  );
}
