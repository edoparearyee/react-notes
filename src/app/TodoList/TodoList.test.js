import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';

const mockTodos = [
  {
    id: 0,
    title: 'Culpa excepteur nisi fugiat',
    completed: false,
  },
  {
    id: 1,
    title: 'Culpa duis voluptate minim',
    completed: false,
  },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList items={mockTodos} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
