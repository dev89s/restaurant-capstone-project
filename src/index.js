import './style.css';
import getMeals from './modules/get-meals.js';
import loadList from './modules/load-list.js';
import commentsPopup from './modules/popup.js';
import getLikes from './modules/get-likes.js';
import menuCount from './modules/menu-count.js';
import commentCounter from './modules/commentCount.js';

const init = async () => {
  await getLikes();
  await getMeals();
  loadList();
  await commentsPopup();
  menuCount();
  commentCounter();
};

init();
