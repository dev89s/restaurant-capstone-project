import './style.css';
import getMeals from './modules/get-meals.js';
import loadList from './modules/load-list.js';
import commentsPopup from './modules/popup.js';
import getLikes from './modules/get-likes.js';
import createComment from './modules/getComment.js';

const init = async () => {
  await getLikes();
  await getMeals();
  loadList();
  commentsPopup();
  createComment('item1');
};

init();
