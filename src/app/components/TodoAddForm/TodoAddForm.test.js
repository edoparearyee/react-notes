import React from 'react';
import ReactDOM from 'react-dom';

import TodoAddForm from './TodoAddForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoAddForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
