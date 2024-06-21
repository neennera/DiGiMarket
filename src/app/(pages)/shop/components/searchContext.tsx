'use client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import axios from 'axios';

interface SearchContextType {
  searchText: string;
  setSearchText: (text: string) => void;
  categoryFilter: {
    [itemCategory: string]: boolean;
  };
  setCategoryFilter: (categories: { [itemCategory: string]: boolean }) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

// Create the context with default values
const SearchContext = createContext<SearchContextType | undefined>(undefined);

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

    response.data.data.forEach((item: any) => {
      categories[item.itemCategory] = true;
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
