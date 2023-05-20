import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShopingCardProvider = ({ children }) => {

  // Shopping cart . Increment quantity
  const [count, setCount] = useState(0);
  
  // Product detail . Open/Close 
  const [isProductDetailOpen, setIsProductOpen] = useState(false);
  const openProductDetail = () => setIsProductOpen(true);
  const closeProductDetail = () => setIsProductOpen(false);

  // Product detail . show product
  const [productToShow, setProductoToShow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductoToShow
    }}>
        { children }
    </ShoppingCartContext.Provider>
  )
}

ShopingCardProvider.propTypes = {
  children: PropTypes.node.isRequired
}

