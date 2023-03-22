import React from "react";
import classes from "./MealsListForm.module.css";
import Input from "../GUI/Input";

function MealsListForm() {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
}

export default MealsListForm;
