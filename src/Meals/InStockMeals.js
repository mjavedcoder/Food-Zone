import React from "react";
import classes from "./InStockMeals.module.css";
import Card from "../GUI/Card";
import MealsList from "./MealsList";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken-Tikka",
    description: "Scatter over spring onions to serve",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chicken shish kebabs",
    description: "These kebabs are big on flavour!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Hot wings",
    description: "The sticky maple and butter glaze on these wings",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Honey Chicken",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const mealsList = DUMMY_MEALS.map((meal) => (
  <MealsList
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />
));

function InStockMeals() {
  return (
    <section className={classes.meals}>
      <Card>
        {" "}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default InStockMeals;
