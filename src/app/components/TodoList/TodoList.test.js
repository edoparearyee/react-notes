import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

const mockTodos = [
  {
    id: '6d3e6088-bc4b-a1b1-b0a2-61328db3ba6',
    title: 'Culpa excepteur nisi fugiat',
    complete: false,
  },
  {
    id: 'a4a14b66-b53b-8511-2ba8-7203570f5cd5',
    title: 'Et aliqua enim aliqua id',
    complete: false,
  },
];

describe('TodoList', () => {
  it('renders without crashing', () => {
    const component = shallow(<TodoList items={mockTodos} />);
    expect(component).toMatchSnapshot();
  });
});
