import './style.css';
import getMeals from './modules/get-meals.js';
import loadList from './modules/load-list.js';
import commentsPopup from './modules/popup.js';

const init = async () => {
  const meals = await getMeals();
  loadList(meals);
  commentsPopup(meals);
};

init();
