import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../scss/main.scss';

import Todo from '../app/Todo/Todo';

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
