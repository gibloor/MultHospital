import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import { AppState } from 'redux-saga/reducers/rootReducer';
import Router from './Router';
import basicStore from 'redux-saga/store';

interface InitialState extends AppState {
  [key: string]: object;
};
type RecursivePartial<T> = { 
  [P in keyof T]?: RecursivePartial<T[P]>
};

interface Options {
  route: string,
  initialState?: RecursivePartial<InitialState>,
}

const RouterWithRedux = (options: Options) => {

  const { initialState } = options;

  const sagaMiddleware = createSagaMiddleware();
  const mockStore = configureMockStore([sagaMiddleware]);

  let modifState: Partial<InitialState> = {...basicStore.getState()};

  for (const key in initialState) {
    modifState[key] = initialState[key]
  }

  const store = mockStore({ ...modifState });

  return (
    <Provider store={store}>
      <Router options={options} />
    </Provider>
  )
}

export default RouterWithRedux;