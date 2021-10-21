import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import {
  USER_DEAUTH,
  userAuthFailure,
  USER_AUTH_REQUARE,
  userAuth,
  USER_TESTING_REQUARE,
  userTesting,
  USER_AUTHORIZATION,
  USER_AUTO_AUTHORIZATION,
} from '../actions/userActions';
import {
  UserAuth,
  UserAuthorization,
  UserAutoAuthorization,
  UserInfo,
  UserInfoTake,
  UserTestingRequare
} from '../types/userTypes';

import axios, { AxiosResponse } from 'axios';

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
  try {
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

function* authorizationSaga(action: UserAuthorization) {
  try {
    const { dates, typeForm } = action.payload;
    const authorization = () => axios.post(`http://localhost:5000/accounts/${typeForm}`,
      { ...dates });
    const response: AxiosResponse<UserInfoTake> = yield call(authorization);
    yield put(userAuth({...response.data}));
    localStorage.setItem('token', response.data.acsessToken);
  } catch (e: any) {
    yield put(
      userAuthFailure({
        error: e.message,
      }),
    );
  }
}

function* autoAuthorizationSaga(action: UserAutoAuthorization) {
  try {
    const { token } = action.payload;
    const headers = {authorization: `Bearer ${token}`} 
    const authorization = () => axios.post('http://localhost:5000/accounts/auth/token', {},
      { headers: headers });
    const response: AxiosResponse<UserInfoTake> = yield call(authorization);
    yield put(userAuth({...response.data}));
  } catch (e: any) {
    yield put(
      userAuthFailure({
        error: e.message,
      }),
    );
  }
}

function* userSagas() {
  yield all([
    takeLatest(USER_AUTH_REQUARE, authSaga),
    takeLatest(USER_DEAUTH, deuthSaga),
    takeLatest(USER_TESTING_REQUARE, testingSaga),
    takeLatest(USER_AUTHORIZATION, authorizationSaga),
    takeLatest(USER_AUTO_AUTHORIZATION, autoAuthorizationSaga),
  ]);
}

export default userSagas;