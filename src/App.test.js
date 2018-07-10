import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App', () => {
  const wrapper = render(<App />);
  expect(wrapper.text()).toEqual('Component for storing helpers.');
});
