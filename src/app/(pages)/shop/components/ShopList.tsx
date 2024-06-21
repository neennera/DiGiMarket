import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/_components/Loading';
import ProductDisplay from './ProductDisplay';
import { useSearchContext } from './searchContext';
interface itemSchema {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  categoryId: number;
}

export default function ShopList() {
  // init items
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const initItems = async () => {
    try {
      const response = await axios.get('/api/products');
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
  const { searchText, categoryFilter, sortBy } = useSearchContext();
  const handleSearch = async () => {
    console.log(searchText);
  };
  useEffect(() => {
    handleSearch();
  }, [searchText, categoryFilter, sortBy]);
  return (
    <>
      {loading && <Loading />}
      <div className='grid-col-1 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {items.map((item: itemSchema) => (
          <ProductDisplay key={item.name} item={item} />
        ))}
      </div>
    </>
  );
}
