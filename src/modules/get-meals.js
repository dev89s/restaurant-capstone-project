const getMeals = async () => {
  const mealsRes = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const jsonData = await mealsRes.json();
  const { meals } = jsonData;
  return meals;
};

export default getMeals;