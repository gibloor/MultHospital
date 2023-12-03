import {
  all,
  put,
  call,
  takeEvery,
} from 'redux-saga/effects'
import {
  PROFILE_TAKE_REQUIRE,

  profileTake,
  profileFailure,
} from '../actions/profileActions'
import {
  ProfileTakeRequire,

  Profile,
} from '../types/profileTypes'
import axios, { AxiosResponse } from 'axios'

import { DOMAIN } from './rootSaga'

function* profileTakeSaga(action: ProfileTakeRequire ) {
  try {
    const { id } = action.payload
    const takeProfile = () => axios.get<string[]>(`${DOMAIN}/profile/takeInfo/${id}`)
    const response: AxiosResponse<Profile> = yield call(takeProfile)
    const { avatar, statistics } = response.data

    yield put(profileTake({
      id: id,
      avatar: avatar,
      statistics: statistics
    }))
  } catch (e: any) {
    yield put(
      profileFailure({
        error: e.message,
      }),
    )
  }
}

function* profileSagas() {
  yield all([
    takeEvery(PROFILE_TAKE_REQUIRE, profileTakeSaga)
  ])
}

export default profileSagas