/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const FilteredProductsContext = createContext();

export const FilteredProductsProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <FilteredProductsContext.Provider value={{ filteredProducts, setFilteredProducts }}>
      {children}
    </FilteredProductsContext.Provider>
  );
};

export const useFilteredProductsContext = () => {
  return useContext(FilteredProductsContext);
};
