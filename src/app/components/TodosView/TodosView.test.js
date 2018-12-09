import React from 'react';
import ReactDOM from 'react-dom';
import TodosView from './TodosView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodosView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
