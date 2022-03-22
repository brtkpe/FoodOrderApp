import { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import Spinner from "../UI/Spinner";
import Error from "../UI/Error";
import useHttp from "../../hooks/use-http";

export default function AvailableMeals() {
  const [inputValue, setInputValue] = useState("");
  const [meals, setMeals] = useState([]);

  const transformMeals = (data) => {
    const loadedMeals = [];

    for (const mealKey in data) {
      loadedMeals.push({
        id: mealKey,
        name: data[mealKey].name,
        description: data[mealKey].description,
        price: data[mealKey].price,
      });
    }

    setMeals(loadedMeals);
  };

  const {
    sendRequest: fetchMeals,
    isLoading,
    error,
  } = useHttp(
    "https://food-app-e35bb-default-rtdb.firebaseio.com/meals.json",
    transformMeals
  );

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const filteredMeals = meals.filter((meal) =>
    inputValue === "" ? meal : meal.name.toLowerCase().includes(inputValue)
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
        {error && <Error error={error} />}
        {isLoading && !error && <Spinner />}
        {!isLoading && !error && (
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
        )}
      </Card>
    </section>
  );
}
