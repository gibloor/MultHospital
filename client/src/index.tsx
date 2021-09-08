import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import './i18n';
import './index.css';

ReactDOM.render(
  <Suspense fallback="...is loading">
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Suspense>,
  document.getElementById('root')
);
