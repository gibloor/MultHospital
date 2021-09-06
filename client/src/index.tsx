import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
      <React.StrictMode>
        <App />
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
);

reportWebVitals();
