import axios from 'axios';
import { useEffect, useState } from 'react';

interface categorySchema {
  id: number;
  itemCategory: string;
  color: string;
}

export default function SideBar() {
  const [category, setCategory] = useState<{ [key: string]: string }>({});
  const initItems = async () => {
    try {
      const response2 = await axios.get('/api/category');
      const newCategory: { [key: string]: string } = {};
      response2.data.data.forEach((item: categorySchema) => {
        newCategory[item.itemCategory] = item.color;
      });
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    initItems();
  }, []);
  const categoryEntries = Object.entries(category);
  return (
    <>
      {categoryEntries.map(([itemCategory, color], index) => (
        <div key={index}>
          <p>{itemCategory}</p>
          <p>{color}</p>
        </div>
      ))}
    </>
  );
}
