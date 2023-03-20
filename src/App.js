import React from "react";
import Header from "./Design/Header";
import Meals from "./Meals/Meals";

import Cart from "./Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
