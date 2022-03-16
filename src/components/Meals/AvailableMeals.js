import { useState } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function AvailableMeals() {
  const [inputValue, setInputValue] = useState("");
  // const [filteredMeals, setFilteredMeals] = useState(DUMMY_MEALS);

  const filteredMeals = DUMMY_MEALS.filter((meal) =>
    meal.name.toLowerCase().includes(inputValue)
  );

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value.trim());
  };

  return (
    <section className="max-w-[60rem] w-[90%] my-12 mx-auto animate-mealsAppear">
      <div className="pb-8 pt-4">
        <input
          onChange={inputChangeHandler}
          type="text"
          placeholder="Type what are you looking for..."
          className="input input-bordered w-96 bg-gray-800/90 text-slate-200 mx-auto block"
        />
      </div>
      <Card>
        {filteredMeals.length > 0 ? (
          <ul>
            {filteredMeals.map((meal) => {
              return (
                <MealItem
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              );
            })}
          </ul>
        ) : (
          <p className="font-bold text-center text-xl text-slate-200">
            No meal was found!
          </p>
        )}
      </Card>
    </section>
  );
}
