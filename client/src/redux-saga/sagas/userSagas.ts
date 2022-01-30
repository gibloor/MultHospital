import {
  all,
  put,
  call,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';

import {
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,
  USER_TESTING_REQUIRE,
  USER_DEAUTH_REQUIRE,
  USER_INVOLVEMENT_CHANGE_REQUIRE,
  USER_AVATAR_SAVE_REQUIRE,

  userFailure,
  userAuth,
  userTesting,
  userDeauth,
  userInvolvementChange,
  userAvatarSave
} from '../actions/userActions';

import {
  UserAuthRequire,
  UserAutoAuthRequire,
  UserInfoTaked,
  UserInvolvementChangeRequire,
  UserTestingRequire,
  UserAvatarSaveRequire,
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

function* testingSaga(action: UserTestingRequire) {
  try {
    let { features, userId, level, topic } = action.payload;
    const acceptAnswer = () => axios.put<string[]>(`http://localhost:5000/watched/tested/${userId}`,
      { features, level, topic }
    );
    if (topic !== 'newcomers') {
      features = [features[0]];
    }
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

function* changeInvolvementSaga(action: UserInvolvementChangeRequire) {
  try {
    const involvement = action.payload.involvement;
    const userId = action.payload.id
    const saveInvolvement = () => axios.put<string[]>(`http://localhost:5000/accounts/saveInvolvement/${userId}`,
      { involvement });
    yield call(saveInvolvement);
    yield put(userInvolvementChange({involvement: involvement}));
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    );
  }
}

function* avatarSaveSaga(action: UserAvatarSaveRequire) {
  try {
    const { id, avatar } = action.payload;
    const saveAvatar = () => axios.post<string[]>(`http://localhost:5000/profile/saveAvatar/${id}`,
      { avatar }
    );
    yield put(userAvatarSave({avatar: avatar}));
    const response: AxiosResponse<string> = yield call(saveAvatar);
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
    takeLatest(USER_TESTING_REQUIRE, testingSaga),
    takeLatest(USER_DEAUTH_REQUIRE, deuthSaga),
    takeLatest(USER_INVOLVEMENT_CHANGE_REQUIRE, changeInvolvementSaga),
    takeEvery(USER_AVATAR_SAVE_REQUIRE, avatarSaveSaga),
  ]);
}

export default userSagas;