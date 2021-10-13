import {
  all,
  put,
  call,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  USER_DEAUTH,
  userAuthFailure,
  USER_AUTH_REQUARE,
  userAuth,
  USER_TESTING_REQUARE,
  userTesting
} from '../actions/userActions';
import { UserAuth, UserTestingRequare } from '../types/userTypes';

import axios from 'axios';

function* authSaga(action: UserAuth) {
  try {
    yield put(userAuth(action.payload));
  } catch (e: any) {
    yield put(
      userAuthFailure({
        error: e.message,
      }),
    );
  }
}

function* deuthSaga() {
  try {
    console.log('you deauthorizated');
  } catch (e: any) {
    yield put(
      userAuthFailure({
        error: e.message,
      }),
    );
  }
}

function* testingSaga(action: UserTestingRequare) {
  try {;
    const { features, userId } = action.payload;
    const acceptAnswer = () => axios.put<string[]>(`http://localhost:5000/watched/tested/${userId}`,
      { features });
    yield call(acceptAnswer);
    yield put(userTesting({ features }));
  } catch (e: any) {
    yield put(
      userAuthFailure({
        error: e.message,
      }),
    );
  }
}

function* userSagas() {
  yield all([takeLatest(USER_AUTH_REQUARE, authSaga), takeEvery(USER_DEAUTH, deuthSaga), takeLatest(USER_TESTING_REQUARE, testingSaga)]);
}

export default userSagas;