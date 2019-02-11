import puppeteer from 'puppeteer';

const addTodo = async (page, title) => {
  await page.focus('.TodoAddForm__Title');
  await page.keyboard.type(title);
  await page.keyboard.press('Enter');
  return await page.$$('.Todo');
};

const addMultipleTodos = async (page, titles) => {
  for (let i = 0; i < titles.length; i++) {
    await addTodo(page, titles[i]);
  }
  return await page.$$('.Todo');
};

const getTodoTitle = async (page, i) => {
  return await page.$eval(
    `.Todo:nth-child(${i}) .Todo__Title`,
    e => e.innerHTML,
  );
};

const getTodoClass = async (page, i) => {
  return await page.$eval(`.Todo:nth-child(${i})`, e =>
    Array.from(e.classList),
  );
};

const editTodoTitle = async (page, i, title) => {
  const selector = `.Todo:nth-child(${i}) .Todo__Title`;
  await page.$eval(selector, e => (e.innerHTML = ''));
  const todoTitleEl = await page.$(selector);
  await page.focus(selector);
  await page.keyboard.type(title);
  return await todoTitleEl;
};

const toggleTodoComplete = async (page, i) => {
  const selector = `.Todo:nth-child(${i}) .Todo__Checkbox`;
  const todoCheckbox = await page.$(selector);
  await todoCheckbox.click();
  return await page.$eval(selector, e => e.value);
};

const deleteTodo = async (page, i) => {
  const selector = `.Todo:nth-child(${i}) .Todo__Delete`;
  const deleteBtn = await page.$(selector);
  await deleteBtn.click();
  return await page.$$('.Todo');
};

describe('TodoView end-to-end tests', () => {
  let browser, page;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1024,
        height: 768,
      },
      userAgent: '',
    });
  });

  afterEach(() => browser.close());

  describe('TodoView', () => {
    beforeEach(async () => {
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.TodosView');
    });

    it('displays h1 text', async () => {
      const html = await page.$eval('h1', e => e.innerHTML);
      expect(html).toBe('Todos');
    }, 16000);

    it('adds todo to list', async () => {
      const todos = await addTodo(
        page,
        'Id qui excepteur reprehenderit ex aute',
      );
      expect(todos.length).toBe(1);
      const todoText = await getTodoTitle(page, 1);
      expect(todoText).toEqual('Id qui excepteur reprehenderit ex aute');
    }, 16000);

    it('adds multiple todos to list', async () => {
      const todos = await addMultipleTodos(page, [
        'Id qui excepteur reprehenderit ex aute',
        'Ipsum nisi qui eu adipisicing dolore tempor',
      ]);
      expect(todos.length).toBe(2);
      const todo1Text = await getTodoTitle(page, 1);
      expect(todo1Text).toEqual('Id qui excepteur reprehenderit ex aute');
      const todo2Text = await getTodoTitle(page, 2);
      expect(todo2Text).toEqual('Ipsum nisi qui eu adipisicing dolore tempor');
    }, 16000);

    it('edits todo', async () => {
      await addMultipleTodos(page, [
        'Id qui excepteur reprehenderit ex aute',
        'Ipsum nisi qui eu adipisicing dolore tempor',
      ]);
      await editTodoTitle(page, 1, 'Nulla est enim et non aliquip');
      await editTodoTitle(page, 2, 'Deserunt laborum officia cupidatat sit');
      const todo1Text = await getTodoTitle(page, 1);
      expect(todo1Text).toBe('Nulla est enim et non aliquip');
      const todo2Text = await getTodoTitle(page, 2);
      expect(todo2Text).toEqual('Deserunt laborum officia cupidatat sit');
    }, 16000);

    it('marks todo as complete', async () => {
      await addMultipleTodos(page, [
        'Id qui excepteur reprehenderit ex aute',
        'Ipsum nisi qui eu adipisicing dolore tempor',
      ]);
      const todoComplete = await toggleTodoComplete(page, 1);
      const todoClass = await getTodoClass(page, 1);
      expect(todoComplete).toBe('on');
      expect(todoClass).toContain('Todo--Complete');
    }, 16000);

    it('deletes todo', async () => {
      await addMultipleTodos(page, [
        'Id qui excepteur reprehenderit ex aute',
        'Ipsum nisi qui eu adipisicing dolore tempor',
      ]);

      const todos = await deleteTodo(page, 2);
      expect(todos.length).toBe(1);
      const todoText = await getTodoTitle(page, 1);
      expect(todoText).toEqual('Id qui excepteur reprehenderit ex aute');
    }, 16000);
  });
});
