import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
`

ReactDOM.render(
  <BrowserRouter>
    <Global />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
