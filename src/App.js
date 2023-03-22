import React from "react";

import Header from "./Components/Design/Header";

import Meals from "./Components/Meals/Meals";
import { useState } from "react";

import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Vaulet/CartProvider";

function App() {
  const [showCart, setshowCart] = useState(false);

  const cartIsShown = () => {
    setshowCart(true);
  };

  const cartIsNotShown = () => {
    setshowCart(false);
  };
  return (
    <CartProvider>
      {/* //Here i am rendering the Cart component conditionally  by adding the curly braces around */}
      {showCart && <Cart onCartHide={cartIsNotShown} />}
      {/* Here we passing the function (cartIsShown) to the header component with the help of props(onCartVisible). We can name the props whatever we want but the conventional method is to start the name with "on" which we did below: */}
      <Header onCartVisible={cartIsShown} />
      <main>
        <Meals />
      </main>{" "}
    </CartProvider>
  );
}

export default App;
