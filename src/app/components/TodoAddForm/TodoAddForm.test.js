import React from 'react';
import { shallow, mount } from 'enzyme';

import TodoAddForm from './TodoAddForm';

describe('TodoAddForm', () => {
  it('renders without crashing', () => {
    const component = shallow(<TodoAddForm value="foo" />);
    expect(component).toMatchSnapshot();
  });

  it('should call onInput prop on title input', () => {
    const onInput = jest.fn();
    const component = mount(<TodoAddForm value={''} onInput={onInput} />);
    component.find('.TodoAddForm__Title').simulate('input', {
      target: { value: 'foo' },
    });

    expect(onInput).toHaveBeenCalledWith({
      value: 'foo',
    });

    component.unmount();
  });

  it('should call onAdd prop on form submit', () => {
    const onAdd = jest.fn();
    const preventDefault = jest.fn();
    const component = mount(<TodoAddForm value={'foo'} onAdd={onAdd} />);
    const event = {
      preventDefault,
    };
    component.find('.TodoAddForm').simulate('submit', event);

    expect(onAdd).toHaveBeenCalledWith({
      title: 'foo',
    });
    expect(preventDefault).toHaveBeenCalled();

    component.unmount();
  });
});
