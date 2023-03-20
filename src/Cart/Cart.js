import React from "react";
import classes from "./Cart.module.css";
import Window from "../GUI/Window";

function Cart(props) {
  const cartlists = (
    <ul className={classes.cartItems}>
      {[{ id: "a1", name: "Tikka", amount: 3, price: 10 }].map((list) => (
        <li>{list.name}</li>
      ))}
    </ul>
  );
  return (
    <Window>
      {" "}
      {cartlists}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>40.40</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Window>
  );
}

export default Cart;
