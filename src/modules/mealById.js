const getMealById = (mealId) => {
  const meals = JSON.parse(localStorage.getItem('meals'));
  const meal = meals.find((meal) => {
    if (meal.idMeal === mealId) {
      return meal;
    }
    return undefined;
  });

  const foodName = meal.strMeal;
  const imageUrl = meal.strMealThumb;
  const origin = meal.strArea;
  const category = meal.strCategory;
  const first = meal.strIngredient1;
  const second = meal.strIngredient2;

  return {
    foodName, imageUrl, origin, category, first, second,
  };
};

export default getMealById;
