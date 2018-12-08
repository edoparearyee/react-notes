import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../scss/main.scss';

import Todo from '../app/components/Todo/Todo';
import TodoList from '../app/components/TodoList/TodoList';
import TodoAddForm from '../app/components/TodoAddForm/TodoAddForm';

storiesOf('Todo', module)
  .add('Default', () => (
    <Todo
      id={0}
      title={'Veniam est ipsum Lorem'}
      complete={false}
      onChange={action('onChange')}
      onToggle={action('onToggle')}
    />
  ))
  .add('Complete', () => (
    <Todo
      id={0}
      title={'Veniam est ipsum Lorem'}
      complete={true}
      onChange={action('onChange')}
      onToggle={action('onToggle')}
    />
  ));

const mockTodos = [
  {
    id: 0,
    title: 'Culpa excepteur nisi fugiat',
    complete: false,
  },
  {
    id: 1,
    title: 'Culpa duis voluptate minim',
    complete: false,
  },
];

storiesOf('TodoList', module).add('Default', () => (
  <TodoList
    items={mockTodos}
    onChange={action('onChange')}
    onToggle={action('onToggle')}
  />
));

storiesOf('TodoAddForm', module).add('Default', () => (
  <TodoAddForm value={''} onAdd={action('onAdd')} onInput={action('onInput')} />
));
