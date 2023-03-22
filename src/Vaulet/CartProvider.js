import React, { createContext } from "react";

const NameContext = createContext();

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <NameContext.Provider value={cartContext}>
      {props.children}
    </NameContext.Provider>
  );
};

export { CartProvider, NameContext };
