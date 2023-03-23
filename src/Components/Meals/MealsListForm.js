import React, { useRef, useState } from "react";
import classes from "./MealsListForm.module.css";
import Input from "../GUI/Input";

function MealsListForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim.length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        heading="Amount"
        input={{
          id: "amount_ + props.id",
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(≥1)</p>}
    </form>
  );
}

export default MealsListForm;
