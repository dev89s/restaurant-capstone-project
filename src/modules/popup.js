import getMealById from './mealById.js';

const commentsPopup = () => {
  const menuHolder = document.querySelectorAll('.meal-container');
  const mainMenu = document.querySelector('#appContainer');
  const popup = document.querySelector('#displayPopup');

  function onClose() {
    const closeBtn = document.querySelector('#close-btn');
    closeBtn.removeEventListener('click', onClose);
    popup.style.display = 'none';
    mainMenu.style.display = 'block';
  }

  menuHolder.forEach((meal) => {
    meal.addEventListener('click', (event) => {
      const targetElement = event.target;
      const comment = targetElement.textContent;

      if (comment === 'Comments') {
        const mealId = meal.getAttribute('data-mealid');
        const mealDetails = getMealById(mealId);

        popup.innerHTML = `
          <i id="close-btn" class="fa-solid fa-xmark"></i>
          <div class='popup-container'>
            <img class='main-meal img-fluid' src=${mealDetails.imageUrl}>
            <h1 class='text-center fw-bold mt-3'>${mealDetails.foodName}</h1>
            <ul class='meal-details-container'>
              <span>
                <li>Course: ${mealDetails.category}</li>
                <li>Ingredient1: ${mealDetails.first}</li>
              </span>
              <span>
                <li>Origin: ${mealDetails.origin}</li>
                <li>Ingredient2: ${mealDetails.second}</li>
              </span>
            </ul>
          </div>
        `;

        popup.style.display = 'block';
        mainMenu.style.display = 'none';

        const closeBtn = document.querySelector('#close-btn');
        closeBtn.addEventListener('click', onClose);
      }
    });
  });
};

export default commentsPopup;