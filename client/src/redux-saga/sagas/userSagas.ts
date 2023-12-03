import {
  all,
  put,
  call,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects'

import axios, { AxiosResponse } from 'axios'

import {
  USER_AUTH_REQUIRE,
  USER_AUTO_AUTH_REQUIRE,
  USER_TESTING_REQUIRE,
  USER_DEAUTH_REQUIRE,
  USER_INVOLVEMENT_CHANGE_REQUIRE,
  USER_AVATAR_SAVE_REQUIRE,
  USER_ERROR_CLEANING_REQUIRE,

  userFailure,
  userAuth,
  userDeauth,
  userInvolvementChange,
  userAvatarSave,
  userErrorCleaning,
  userTesting,
} from '../actions/userActions'

import {
  UserAuthRequire,
  UserAutoAuthRequire,
  UserInfoTaked,
  UserInvolvementChangeRequire,
  UserAvatarSaveRequire,
} from '../types/userTypes'

import { DOMAIN } from './rootSaga'

function* authSaga(dates: UserInfoTaked) {
  try {
    localStorage.setItem('token', dates.token)
    yield put(userAuth(dates))
  } catch (e: any) {
    yield put(
      userFailure({error: e.message}),
    )
  }
}

function* hendAuthSaga(action: UserAuthRequire) {
  try {
    const { dates, typeForm } = action.payload
    const authorization = () => axios.post(`${DOMAIN}/accounts/${typeForm}`,
      { ...dates })
    const response: AxiosResponse<UserInfoTaked> = yield call(authorization)

    yield authSaga(response.data)
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    )
  }
}

function* autoAuthSaga(action: UserAutoAuthRequire) {
  try {
    const { token } = action.payload
    const headers = {authorization: `Bearer ${token}`} 
    const authorization = () => axios.post(`${DOMAIN}/accounts/auto_auth`,
      {}, { headers: headers }
    )
    const response: AxiosResponse<UserInfoTaked> = yield call(authorization)

    yield authSaga({...response.data})
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    )
  }
}

function* deuthSaga() {
  try {
    yield put(userDeauth())
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    )
  }
}

function* changeInvolvementSaga(action: UserInvolvementChangeRequire) {
  try {
    const level = action.payload.level
    const userId = action.payload.id
    const saveInvolvement = () => axios.put<string[]>(`${DOMAIN}/accounts/saveInvolvement/${userId}`,
      { level }
    )
      
    yield call(saveInvolvement)
    yield put(userInvolvementChange({level: level}))
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    )
  }
}

function* avatarSaveSaga(action: UserAvatarSaveRequire) {
  try {
    const { id, avatar } = action.payload
    const saveAvatar = () => axios.post<string[]>(`${DOMAIN}/profile/saveAvatar/${id}`,
      { avatar }
    )

    yield put(userAvatarSave({avatar: avatar}))
    yield call(saveAvatar)
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    )
  }
}

function* userTestingSaga() {
  try {
    yield put(userTesting())
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    )
  }
}

function* errorCleaningSaga() {
  try {
    yield put(userErrorCleaning())
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      }),
    )
  }
}

function* userSagas() {
  yield all([
    takeLatest(USER_AUTH_REQUIRE, hendAuthSaga),
    takeLatest(USER_AUTO_AUTH_REQUIRE, autoAuthSaga),
    takeLatest(USER_DEAUTH_REQUIRE, deuthSaga),
    takeLatest(USER_INVOLVEMENT_CHANGE_REQUIRE, changeInvolvementSaga),
    takeEvery(USER_AVATAR_SAVE_REQUIRE, avatarSaveSaga),
    takeEvery(USER_ERROR_CLEANING_REQUIRE, errorCleaningSaga),
    takeEvery(USER_TESTING_REQUIRE, userTestingSaga)
  ])
}

export default userSagas