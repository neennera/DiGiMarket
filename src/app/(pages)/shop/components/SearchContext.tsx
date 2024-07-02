'use client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import axios from 'axios';

interface CategoryDisplay {
  categoryColor: { [key: string]: string };
  categoryName: { [key: string]: string };
  categoryImage: { [key: string]: string };
  categoryId: { [key: string]: string };
}
interface SearchContextType {
  searchText: string;
  setSearchText: (text: string) => void;
  categoryFilter: {
    [itemCategory: string]: boolean;
  };
  setCategoryFilter: (categories: { [itemCategory: string]: boolean }) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  categoryDisplay: CategoryDisplay;
}
// Create the context with default values
const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const categoryDisplay: CategoryDisplay = {
  categoryColor: {},
  categoryName: {},
  categoryId: {},
  categoryImage: {
    0: '/productsImage/noCategory_mock.webp',
    1: '/productsImage/postit_mock.jpg',
    2: '/productsImage/planner_mock.jpg',
    3: '/productsImage/sticker_mock.png',
  },
};
// Create the provider component
export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('Relavance');
  const [categoryFilter, setCategoryFilter] = useState<{
    [itemCategory: string]: boolean;
  }>({});
  const getCategory = async () => {
    const response = await axios.get('/api/category');
    const categories: { [itemCategory: string]: boolean } = {};

    response.data.data.forEach((item: any, index: string) => {
      categories[item.itemCategory] = true;
      categoryDisplay.categoryColor[item.id] = item.color;
      categoryDisplay.categoryName[item.id] = item.itemCategory;
      categoryDisplay.categoryId[item.itemCategory] = item.id;
    });
    setCategoryFilter(categories);
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
        categoryFilter,
        setCategoryFilter,
        sortBy,
        setSortBy,
        categoryDisplay,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the search context
export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
