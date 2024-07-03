import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/_components/Loading';
import ProductDisplay from './ProductDisplay';
import { categoryDisplay, useSearchContext } from './SearchContext';

interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  categoryId: string;
}

export default function ShopList() {
  // init items
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const initItems = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
      );
      setItems(response.data.data);
    } catch (error) {
      console.log(error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    initItems();
  }, []);

  // handle search
  const { searchText, categoryFilter, sortBy, categoryDisplay } =
    useSearchContext();
  const handleSearch = async () => {
    try {
      const categoryList = Object.keys(categoryFilter).filter(
        (key) => categoryFilter[key]
      );
      const categoryFilterId: string[] = [];
      categoryList.map((item) => {
        categoryFilterId.push(categoryDisplay.categoryId[item]);
      });
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/search`,
        {
          searchText,
          categoryFilter: categoryFilterId,
          sortBy,
        }
      );

      setItems(response.data.data);
    } catch (error) {
      console.log(error);
      setItems([]);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [searchText, categoryFilter, sortBy]);

  if (loading || items === undefined) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      {items.length === 0 && (
        <div className='flex w-full flex-col items-center justify-center space-y-3 pt-8'>
          <p className='text-2xl font-semibold'> Sorry, your item not found</p>
          <p className='text-xl'> try to use another keyword?</p>
        </div>
      )}
      <div className='grid-col-1 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {items.map((item: itemSchema) => (
          <ProductDisplay key={item.name} item={item} />
        ))}
      </div>
    </>
  );
}
