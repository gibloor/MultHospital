import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';

import {
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,
  USER_TESTING_REQUARE,

  userFailure,
  userAuth,
  userTesting,
  userDeauth,
  USER_DEAUTH_REQUIRE,
} from '../actions/userActions';

import {
  UserAuthRequire,
  UserAutoAuthRequire,

  UserInfoTaked,
  UserTestingRequare
} from '../types/userTypes';

import axios, { AxiosResponse } from 'axios';

function* authSaga(dates: UserInfoTaked) {
  try {
    yield put(userAuth(dates));
    localStorage.setItem('token', dates.token);
  } catch (e: any) {
    yield put(
      userFailure({error: e.message}),
    );
  }
}

function* hendAuthSaga(action: UserAuthRequire) {
  try {
    const { dates, typeForm } = action.payload;
    const authorization = () => axios.post(`http://localhost:5000/accounts/${typeForm}`,
      { ...dates });
    const response: AxiosResponse<UserInfoTaked> = yield call(authorization);
    yield authSaga({...response.data});
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    );
  }
}

function* autoAuthSaga(action: UserAutoAuthRequire) {
  try {
    const { token } = action.payload;
    const headers = {authorization: `Bearer ${token}`} 
    const authorization = () => axios.post('http://localhost:5000/accounts/auto_auth', {},
      { headers: headers });
    const response: AxiosResponse<UserInfoTaked> = yield call(authorization);
    yield authSaga({...response.data});
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    );
  }
}

function* testingSaga(action: UserTestingRequare) {
  try {
    const { features, userId } = action.payload;
    const acceptAnswer = () => axios.put<string[]>(`http://localhost:5000/watched/tested/${userId}`,
      { features });
    yield call(acceptAnswer);
    yield put(userTesting({ features }));
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    );
  }
}

function* deuthSaga() {
  try {
    yield put(userDeauth());
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    );
  }
}

function* userSagas() {
  yield all([
    takeLatest(USER_AUTH_REQUIRE, hendAuthSaga),
    takeLatest(USER_AUTO_AUTH_REQUIRE, autoAuthSaga),
    takeLatest(USER_TESTING_REQUARE, testingSaga),
    takeLatest(USER_DEAUTH_REQUIRE, deuthSaga),
  ]);
}

export default userSagas;