import { all, fork } from 'redux-saga/effects';

import userSagas from './userSagas';
import questionsSagas from './questionsSagas';
import multfilmsSagas from './multfilmsSagas';
import viewedSagas from './viewedSagas';
import imagesSagas from './imagesSagas';

export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(questionsSagas),
    fork(multfilmsSagas),
    fork(viewedSagas),
    fork(imagesSagas)
  ]);
}