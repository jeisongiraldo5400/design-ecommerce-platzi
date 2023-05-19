import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShopingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductOpen] = useState(false);

  const openProductDetail = () => setIsProductOpen(true);
  const closeProductDetail = () => setIsProductOpen(false);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen
    }}>
        { children }
    </ShoppingCartContext.Provider>
  )
}

ShopingCardProvider.propTypes = {
  children: PropTypes.node.isRequired
}

