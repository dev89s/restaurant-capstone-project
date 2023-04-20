import { JSDOM } from 'jsdom';
import menuCount from './menu-count.js';
import getMeals from './get-meals.js';
import getLikes from './get-likes.js';
import loadList from './load-list.js';

describe('test menuCount DOM function', () => {
  test('menuCount counts the DOM elements correctly', async () => {
    // Arrange
    const dom = new JSDOM();
    const { document } = dom.window;
    global.document = document;
    const mealContainers = document.createElement('div');
    const itemCount = 10;
    for (let i = 0; i < itemCount; i += 1) {
      const mealCont = document.createElement('div');
      mealCont.classList.add('meal-container');
      mealContainers.appendChild(mealCont);
    }
    const menuCounterEl = document.createElement('span');
    menuCounterEl.classList.add('menu-counter');

    document.body.appendChild(mealContainers);
    document.body.appendChild(menuCounterEl);

    // Act
    menuCount();

    // Assess
    expect(menuCounterEl.textContent).toBe(`Menu(${itemCount})`);
  });

  test('menuCount Edge case of 0 elemets', async () => {
    // Arrange
    const dom = new JSDOM();
    const { document } = dom.window;
    global.document = document;
    const mealContainers = document.createElement('div');
    const itemCount = 0;
    for (let i = 0; i < itemCount; i += 1) {
      const mealCont = document.createElement('div');
      mealCont.classList.add('meal-container');
      mealContainers.appendChild(mealCont);
    }
    const menuCounterEl = document.createElement('span');
    menuCounterEl.classList.add('menu-counter');

    document.body.appendChild(mealContainers);
    document.body.appendChild(menuCounterEl);

    // Act
    menuCount();

    // Assess
    expect(menuCounterEl.textContent).toBe(`Menu(${itemCount})`);
  });

  test('menuCount Edge case of big number of elemets', async () => {
    // Arrange
    const dom = new JSDOM();
    const { document } = dom.window;
    global.document = document;
    const mealContainers = document.createElement('div');
    const itemCount = 100000;
    for (let i = 0; i < itemCount; i += 1) {
      const mealCont = document.createElement('div');
      mealCont.classList.add('meal-container');
      mealContainers.appendChild(mealCont);
    }
    const menuCounterEl = document.createElement('span');
    menuCounterEl.classList.add('menu-counter');

    document.body.appendChild(mealContainers);
    document.body.appendChild(menuCounterEl);

    // Act
    menuCount();

    // Assess
    expect(menuCounterEl.textContent).toBe(`Menu(${itemCount})`);
  });
});

describe('test menuCount function using the app', () => {
  test('menuCount counts the DOM elements in real scenario', async () => {
    // Arrange
    const dom = new JSDOM();
    const { document } = dom.window;
    global.document = document;
    await getMeals();
    await getLikes();

    const mealList = document.createElement('div');
    mealList.classList.add('meal-list');
    document.body.appendChild(mealList);

    const menuCounter = document.createElement('div');
    menuCounter.classList.add('menu-counter');
    menuCounter.textContent = 'Menu';
    document.body.appendChild(menuCounter);

    loadList();
    const menuCountEL = document.querySelector('.menu-counter');

    // Act
    menuCount();

    // Assess
    expect(menuCountEL.textContent).toBe('Menu(25)');
  });
});