import commentCounter from './commentCount.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

global.window = window;
global.document = window.document;

describe('commentCounter', () => {
  document.body.innerHTML = `
    <div class="meal-container">
      <button class="comment-btn">Comments</button>
    </div>
    <div id="displayPopup">
      <h3 id="comment-header">Comments(0)</h3>
      <div class="comment-list">Comment 1</div>
      <div class="comment-list">Comment 2</div>
    </div>
    `;
  commentCounter();

  test('updates comment count header when new comments are added', async () => {
    const commentBtn = document.querySelector('.comment-btn');
    commentBtn.click();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const commentHeader = document.querySelector('#comment-header');
    expect(commentHeader.textContent).toBe('Comments(2)');
  });

  test('updates comment count header when there are no comments', async () => {
    document.body.innerHTML = `
      <div class="meal-container">
        <button class="comment-btn">Comments</button>
      </div>
      <div id="displayPopup">
        <h3 id="comment-header">Comments(0)</h3>
      </div>
    `;
    commentCounter();

    const commentBtn = document.querySelector('.comment-btn');
    commentBtn.click();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const commentHeader = document.querySelector('#comment-header');
    expect(commentHeader.textContent).toBe('Comments(0)');
  });
});
