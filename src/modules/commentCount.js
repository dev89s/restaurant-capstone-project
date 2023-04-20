const commentCounter = () => {
  const menuHolder = document.querySelectorAll('.meal-container');
  menuHolder.forEach((meal) => {
    meal.addEventListener('click', async (event) => {
      const targetElement = event.target;
      const comment = targetElement.textContent;

      if (comment === 'Comments') {
        const popup = document.querySelector('#displayPopup');
        setTimeout(() => {
          const commentSpans = popup.querySelectorAll('.comment-list');
          const commentCount = commentSpans.length;
          const commentHeader = popup.querySelector('#comment-header');
          commentHeader.textContent = `Comments(${commentCount})`;
        }, 500);
      }
    });
  });
};

export default commentCounter;