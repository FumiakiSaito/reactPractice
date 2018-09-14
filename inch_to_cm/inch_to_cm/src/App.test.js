import React from 'react';
import ReactDOM from 'react-dom';
import InchToCm from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InchToCm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
