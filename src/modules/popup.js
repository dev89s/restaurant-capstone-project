import getMealById from './mealById.js';
import { createComment, getComments } from './getComment.js';

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
    meal.addEventListener('click', async (event) => {
      const targetElement = event.target;
      const comment = targetElement.textContent;

      if (comment === 'Comments') {
        const mealId = meal.getAttribute('data-mealid');
        const mealDetails = getMealById(mealId);

        const appId = JSON.parse(localStorage.getItem('appId'));
        const comments = await getComments(mealId, appId);

        popup.innerHTML = `
          <i id="close-btn" class="fa-solid fa-xmark"></i>
          <div class='popup-container'>
            <img class='main-meal img-fluid mb-4' src=${mealDetails.imageUrl}>
            <h1 class='text-center fw-bold mb-4'>${mealDetails.foodName}</h1>
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

            <div class='mb-3'>
              <h2 id='comment-header' class='text-center fw-bold mb-3'>Comments(${comments.length})</h2>
              <div class='comment-display-container'>
              ${comments.map((comment) => `
              <span>${comment.creation_date} ${comment.username}: ${comment.comment}</span>
            `).join('')}
              </div>
            </div>

            <div>
              <h2 class='text-center fw-bold mb-4'>Add a comment</h2>
              <form id='form'>
                <input id='name' type='text' placeholder='Your name' required>
                <textarea id='message' placeholder='Your insights'></textarea>
                <button id='comment'>Comment</button>
              </form>
            </div> 
          </div>
        `;

        const form = popup.querySelector('#form');
        const nameInput = popup.querySelector('#name');
        const messageInput = popup.querySelector('#message');

        form.addEventListener('submit', async (event) => {
          event.preventDefault();
          const name = nameInput.value;
          const message = messageInput.value;
          const commentDetails = await createComment(mealId, name, message);
          const commentDisplayContainer = popup.querySelector('.comment-display-container');
          commentDisplayContainer.innerHTML += `
          <span>${commentDetails.comments[commentDetails.comments.length - 1].creation_date} ${commentDetails.comments[commentDetails.comments.length - 1].username}: ${commentDetails.comments[commentDetails.comments.length - 1].comment}</span>
        `;
          const commentHeader = popup.querySelector('#comment-header');
          commentHeader.innerHTML = `Comments(${commentDetails.comments.length})`;

          nameInput.value = '';
          messageInput.value = '';
        });

        popup.style.display = 'block';
        mainMenu.style.display = 'none';

        const closeBtn = document.querySelector('#close-btn');
        closeBtn.addEventListener('click', onClose);
      }
    });
  });
};

export default commentsPopup;