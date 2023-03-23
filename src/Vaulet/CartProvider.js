import React, { createContext, useReducer } from "react";

const NameContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if ((action.type = "ADD")) {
    const newItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price + action.item.amount;
    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
