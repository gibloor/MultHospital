import { all, fork } from "redux-saga/effects";

import userAuthSaga from './userAuthSaga';

export function* rootSaga() {
  yield all([fork(userAuthSaga)]);
}