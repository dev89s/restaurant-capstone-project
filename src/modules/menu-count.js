const menuCount = () => {
  const mealContainers = document.querySelectorAll('.meal-container');
  const menuCounterEl = document.querySelector('.menu-counter');
  menuCounterEl.textContent = `Menu(${mealContainers.length})`;
};

export default menuCount;