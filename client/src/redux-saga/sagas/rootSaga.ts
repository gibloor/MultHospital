import { all, fork } from 'redux-saga/effects'

import userSagas from './userSagas'
import questionsSagas from './questionsSagas'
import multfilmsSagas from './multfilmsSagas'
import profileSagas from './profileSagas'
import adminInfoSagas from './adminInfoSagas'
import offerSagas from './offerSagas'

export const DOMAIN = process.env.REACT_APP_DOMAIN || 'http://localhost:5000/api'

export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(questionsSagas),
    fork(multfilmsSagas),
    fork(profileSagas),
    fork(adminInfoSagas),
    fork(offerSagas)
  ])
}