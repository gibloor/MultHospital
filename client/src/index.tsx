import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import './i18n';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Suspense fallback="...is loading">
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
