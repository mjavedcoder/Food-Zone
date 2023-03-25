import React from "react";
import { useContext, useState, useEffect } from "react";
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { NameContext } from "../../Vaulet/CartProvider";

function CartButton(props) {
  const [btnIsColoured, setBtnIsColoured] = useState(false);
  const cartCtx = useContext(NameContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsColoured ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsColoured(true);

    const timer = setTimeout(() => {
      setBtnIsColoured(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClickCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default CartButton;
