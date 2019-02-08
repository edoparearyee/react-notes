import React from 'react';
import { shallow } from 'enzyme';

import TodosView from './TodosView';

describe('TodosView', () => {
  it('renders without crashing', () => {
    const component = shallow(<TodosView />);
    expect(component).toMatchSnapshot();
  });
});
