import React from "react";
import classes from "./Cart.module.css";
import Window from "../GUI/Window";
import CartItem from "./CartItem";
import { useContext } from "react";
import { NameContext } from "../../Vaulet/CartProvider";

function Cart(props) {
  const cartCtx = useContext(NameContext);

  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
  const withItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (list) => {
    cartCtx.addItem({ ...list, amount: 1 });
  };

  const cartlists = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((list) => (
        <CartItem
          key={list.id}
          name={list.name}
          amount={list.amount}
          price={list.price}
          onRemove={cartItemRemoveHandler.bind(null, list.id)}
          onAdd={cartItemAddHandler.bind(null, list)}
        />
      ))}
    </ul>
  );
  return (
    <Window onHide={props.onCartHide}>
      {" "}
      {cartlists}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt} onClick={props.onCartHide}>
          Close
        </button>
        {withItems && <button className={classes.button}>Order</button>}
      </div>
    </Window>
  );
}

export default Cart;
