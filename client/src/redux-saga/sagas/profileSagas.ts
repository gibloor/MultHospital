import {
  all,
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import {
  PROFILE_TAKE_REQUIRE,

  profileTake,
  profileFailure,
} from '../actions/profileActions';
import {

  ProfileTakeRequire,

  Profile,
} from '../types/profileTypes'
import axios, { AxiosResponse } from 'axios';

function* profileTakeSaga(action: ProfileTakeRequire ) {
  try {
    const takeProfile = () => axios.get<string[]>(`http://localhost:5000/profile/takeInfo/${action.payload.id}`);
    const response: AxiosResponse<Profile> = yield call(takeProfile);
    const { id, avatar, achievements, statistic, } = response.data;
    // yield put(profileTake({ avatar: avatar }));
  } catch (e: any) {
    yield put(
      profileFailure({
        error: e.message,
      }),
    );
  }
}

function* profileSagas() {
  yield all([
    takeEvery(PROFILE_TAKE_REQUIRE, profileTakeSaga)
  ]);
}

export default profileSagas;