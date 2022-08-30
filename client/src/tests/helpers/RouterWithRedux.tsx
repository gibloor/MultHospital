import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import store from 'redux-saga/store';
import Router from './Router';

interface Options {
  route: string
}

const RoutRenderWithRedux = (options: Options) => {

  return (
    <Provider store={store}>
      <Router options={options} />
    </Provider>
  )
}

export default RoutRenderWithRedux;