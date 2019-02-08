import React from 'react';
import { shallow } from 'enzyme';
import NotFoundView from './NotFoundView';

describe('NotFoundView', () => {
  it('renders component', () => {
    const component = shallow(<NotFoundView location={{ pathname: '/foo' }} />);
    expect(component).toMatchSnapshot();
  });
});
