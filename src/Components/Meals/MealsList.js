import React from "react";
import { useContext } from "react";
import classes from "./MealsList.module.css";
import MealsListForm from "./MealsListForm";
import { NameContext } from "../../Vaulet/CartProvider";

function MealsList(props) {
  const cartCtx = useContext(NameContext);
  const price = `£${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>
          {" "}
          <div>{props.name}</div>
        </h3>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsListForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealsList;
