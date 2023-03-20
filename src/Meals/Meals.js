import React from "react";
import InStockMeals from "./InStockMeals";
import MealsDescription from "./MealsDescription";

function Meals() {
  return (
    <div>
      <MealsDescription />
      <InStockMeals />
    </div>
  );
}

export default Meals;
