import React from "react";
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";

function CartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>4</span>
    </button>
  );
}

export default CartButton;
