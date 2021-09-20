import { all, fork } from 'redux-saga/effects';

import userAuthSaga from './userAuthSagas';
import questionsSagas from './questionsSagas';
import answersSagas from './answersSagas';

export default function* rootSaga() {
  yield all([fork(userAuthSaga), fork(questionsSagas), fork(answersSagas)]);
}