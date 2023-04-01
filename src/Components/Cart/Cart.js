import React from "react";
import { useState } from "react";
import classes from "./Cart.module.css";
import Window from "../GUI/Window";
import CartItem from "./CartItem";
import { useContext } from "react";
import { NameContext } from "../../Vaulet/CartProvider";
import Checkout from "./Checkout";

function Cart(props) {
  const cartCtx = useContext(NameContext);
  const [issubmitting, setIsSubmitting] = useState(false);
  const [didsubmit, setDidSubmit] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
  const withItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (list) => {
    cartCtx.addItem({ ...list, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-app-48409-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
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

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes.buttonAlt} onClick={props.onCartHide}>
        Close
      </button>
      {withItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartWindowContent = (
    <>
      {" "}
      {cartlists}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={props.onCartHide} />
      )}
      {!isCheckout && modalAction}
    </>
  );

  const isSubmittingWindowContent = <p>Sending Order Data</p>;
  const didSubmitWindowContent = (
    <>
      {" "}
      <div className={classes.color}>
        <p>Successfully send the order !</p>
        <p>You will be contacted once the order is ready &#128522;</p>
        <br />
        <div className={classes.actions}>
          <button className={classes.button_close} onClick={props.onCartHide}>
            Close
          </button>
        </div>
      </div>
    </>
  );

  return (
    <Window onHide={props.onCartHide}>
      {!issubmitting && !didsubmit && cartWindowContent}{" "}
      {issubmitting && isSubmittingWindowContent}
      {!issubmitting && didsubmit && didSubmitWindowContent}
    </Window>
  );
}

export default Cart;
