import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundView from './NotFoundView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFoundView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
