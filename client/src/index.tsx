import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import store from './redux-saga/store';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Suspense fallback="...is loading">
      <BrowserRouter>
        <CookiesProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CookiesProvider>
      </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
