import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
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
const rootElement = document!.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <BrowserRouter>
    <Global />
    <App />
  </BrowserRouter>
);

reportWebVitals();

