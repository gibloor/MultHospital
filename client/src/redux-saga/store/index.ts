import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

// type Reducers<T> = {
//   [P in keyof T]?: T[P];
// };

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// const makeStore = (reducers: Reducers<typeof rootReducer>) => {
//   createStore(reducers, applyMiddleware(sagaMiddleware, logger));
// }

sagaMiddleware.run(rootSaga);

export default store;