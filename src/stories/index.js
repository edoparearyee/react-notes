import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../scss/main.scss';

import Todo from '../app/Todo/Todo';
import TodoList from '../app/TodoList/TodoList';

storiesOf('Todo', module)
  .add('Default', () => (
    <Todo
      key={0}
      title={'Veniam est ipsum Lorem'}
      complete={false}
      onChange={action('onChange')}
    />
  ))
  .add('Complete', () => (
    <Todo
      key={0}
      title={'Veniam est ipsum Lorem'}
      complete={true}
      onChange={action('onChange')}
    />
  ));

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

storiesOf('TodoList', module).add('Default', () => (
  <TodoList items={mockTodos} onChange={action('onChange')} />
));
