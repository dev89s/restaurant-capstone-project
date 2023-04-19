import axios from 'axios';

const getMealById = async (mealId) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const meal = response.data.meals[0];

    const foodName = meal.strMeal;
    const imageUrl = meal.strMealThumb;
    const origin = meal.strArea;
    const category = meal.strCategory;
    const first = meal.strIngredient1;
    const second = meal.strIngredient2;

    return {
      foodName, imageUrl, origin, category, first, second,
    };
  } catch (error) {
    const page = document.querySelector('.meal-list');
    page.innerHTML = error;
    return null;
  }
};

export default getMealById;
