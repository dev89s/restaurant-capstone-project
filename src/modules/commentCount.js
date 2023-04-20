const commentCounter = () => {
  const menuHolder = document.querySelectorAll('.meal-container');
  menuHolder.forEach((meal) => {
    meal.addEventListener('click', async (event) => {
      const targetElement = event.target;
      const comment = targetElement.textContent;

      if (comment === 'Comments') {
        const popup = document.querySelector('#displayPopup');
        setTimeout(() => {
          let commentHeader = document.querySelector('#comment-header');
          let tries = 0;
          const updateCommentCount = () => {
            commentHeader = document.querySelector('#comment-header');
            if (commentHeader) {
              const commentSpans = popup.querySelectorAll('.comment-list');
              const commentCount = commentSpans.length;
              commentHeader.textContent = `Comments(${commentCount})`;
            } else if (tries < 10) {
              tries += 1;
              setTimeout(updateCommentCount, 100);
            }
          };
          updateCommentCount();
        }, 500);
      }
    });
  });
};

export default commentCounter;