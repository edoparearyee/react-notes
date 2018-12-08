import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

const todo = {
  id: 0,
  title: 'Culpa excepteur nisi fugiat',
  complete: false,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo title={todo.title} complete={todo.todo} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
