import React from 'react';
import ReactDOM from 'react-dom';

import AddTodoForm from './AddTodoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTodoForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
