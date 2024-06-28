'use client';

import SearchForm from './components/SearchForm';
import ShopList from './components/ShopList';
import SideBar from './components/SideBar';
import { SearchProvider } from './components/SearchContext';

export default function Page() {
  return (
    <section>
      <SearchProvider>
        <div className='flex flex-row p-5'>
          <div className='h-full w-[25vw] max-sm:hidden'>
            <SideBar />
          </div>
          <div className='w-[70vw] space-y-5'>
            <h1 className='text-4xl font-bold'>Our Products</h1>
            <div className='flex flex-col sm:flex-row sm:space-x-2'>
              <SearchForm />
            </div>
            <div className='block sm:hidden'>
              <SideBar />
            </div>
            <ShopList />
          </div>
        </div>
      </SearchProvider>
    </section>
  );
}
