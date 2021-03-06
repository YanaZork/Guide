import { createRoot } from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import '@fontsource/jost';
import '@fontsource/josefin-slab';
import '@fontsource/jura';

const Global = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
a {
  text-decoration:none;
  color: #000;
}
`
const rootElement = document!.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <HashRouter>
    <Global />
    <App />
  </HashRouter>
);

reportWebVitals();

