import React, { useEffect, useState } from 'react';
import { useSearchContext } from './SearchContext';

export default function SearchForm() {
  const { setSearchText, sortBy, setSortBy } = useSearchContext();
  const [searchWord, setSearchWord] = useState('');
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <form className='flex w-full flex-col items-start justify-between rounded-lg bg-slate-200 bg-opacity-15 p-2 font-semibold max-sm:space-y-2 sm:h-[60px] sm:flex-row sm:items-center sm:space-x-2'>
      <div className='space-x-2 sm:w-[55%]'>
        <input
          className='w-[70%] rounded-md py-1 pl-2 text-black'
          type='text'
          value={searchWord}
          name='name'
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button
          className='h-[100%] rounded-md bg-primary-dark px-1 py-1 font-semibold text-white sm:px-3'
          onClick={(e) => {
            e.preventDefault();
            setSearchText(searchWord);
          }}
        >
          Search
        </button>
      </div>

      <div className='flex h-[40px] flex-row items-center space-x-2'>
        <p>sort by :</p>
        <select
          name='sortBy'
          className='h-[80%] rounded-lg px-3 text-black max-sm:text-sm'
          onChange={handleSortChange}
        >
          <option value='relavance'>Relavance</option>
          <option value='newest'>Newest</option>
          <option value='priceLow'>Price Low to High</option>
          <option value='priceHigh'>Price High to Low</option>
        </select>
      </div>
    </form>
  );
}
