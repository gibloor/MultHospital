import { all, fork } from "redux-saga/effects";

import userAuthSaga from './userAuthSaga';
import questionsSagas from './questionsSagas'

export function* rootSaga() {
  yield all([fork(userAuthSaga), fork(questionsSagas)]);
}