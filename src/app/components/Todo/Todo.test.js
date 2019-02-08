import React from 'react';
import { shallow, mount } from 'enzyme';

import Todo from './Todo';

const todo = {
  id: '6d3e6088-bc4b-a1b1-b0a2-61328db3ba6',
  title: 'Culpa excepteur nisi fugiat',
  complete: false,
};

describe('Todo', () => {
  it('renders component', () => {
    const component = shallow(<Todo {...todo} />);
    expect(component).toMatchSnapshot();
  });

  it('should call onChange prop on title input', () => {
    const onChange = jest.fn();
    const component = mount(<Todo {...todo} onChange={onChange} />);
    component.find('.Todo__Title').simulate('input', {
      target: { innerText: `${todo.title}a` },
    });

    expect(onChange).toHaveBeenCalledWith({
      id: todo.id,
      title: `${todo.title}a`,
    });

    component.unmount();
  });

  it('should call onToggle prop on title input', () => {
    const onToggle = jest.fn();
    const component = mount(<Todo {...todo} onToggle={onToggle} />);
    component.find('.Todo__Checkbox').simulate('input');

    expect(onToggle).toHaveBeenCalledWith({
      id: todo.id,
    });

    component.unmount();
  });

  it('should call onDelete prop on title input', () => {
    const onDelete = jest.fn();
    const component = mount(<Todo {...todo} onDelete={onDelete} />);
    component.find('.Todo__Delete').simulate('click');

    expect(onDelete).toHaveBeenCalledWith({
      id: todo.id,
    });

    component.unmount();
  });

  it('should update component if title does not match', () => {
    const component = mount(<Todo {...todo} />);
    component.instance()._titleEl.innerText = `${todo.title}a`;
    const shouldUpdate = component
      .instance()
      .shouldComponentUpdate({ ...todo });
    expect(shouldUpdate).toBe(true);

    component.unmount();
  });

  it('should NOT update component if title does not match', () => {
    const component = mount(<Todo {...todo} />);
    component.instance()._titleEl.innerText = `${todo.title}a`;
    const shouldUpdate = component
      .instance()
      .shouldComponentUpdate({ ...todo, title: `${todo.title}a` });
    expect(shouldUpdate).toBe(false);

    component.unmount();
  });

  it('should update component if checkbox value does not match', () => {
    const component = mount(<Todo {...todo} />);
    const shouldUpdate = component
      .instance()
      .shouldComponentUpdate({ ...todo, complete: true });
    expect(shouldUpdate).toBe(true);

    component.unmount();
  });
});
