import { useEffect, useState } from "react";
import React from "react";
import classes from "./InStockMeals.module.css";
import Card from "../GUI/Card";
import MealsList from "./MealsList";

function InStockMeals() {
  const [meals, setmeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-48409-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setmeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealsList
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading....</p>
      </section>
    );
  }

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
