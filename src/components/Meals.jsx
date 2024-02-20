//import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "./hooks/useHttp";
import Error from "./UI/Error";

const requestConfig = {};
export default function Meals() {
  // const [loadingMeals, setLoadingMeals] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("http://localhost:3000/meals");

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data: " + response.statusText);
  //       }

  //       const meals = await response.json();
  //       setLoadingMeals(meals);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const {
    data: loadingMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals..</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <>
      <ul id="meals">
        {loadingMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
}
