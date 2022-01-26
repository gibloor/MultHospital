import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import {
  AVATAR_TAKE_REQUIRE,
  avatarTake,
  imagesFailure,
} from '../actions/imagesActions';
import { AvatarTakeRequire } from '../types/imagesTypes'
import axios, { AxiosResponse } from 'axios';

function* avatarTakeSaga(action: AvatarTakeRequire) {
  try {
    const getAvatar = () => axios.get(`http://localhost:5000/images/takeAvatar/${action.payload.id}`);
    const response: AxiosResponse<string> = yield call(getAvatar);
    yield put(avatarTake({img: response.data, type: action.payload.type}));
  } catch (e: any) {
    yield put(
      imagesFailure({
        error: e.message,
      }),
    );
  }
}

function* imagesSagas() {
  yield all([takeLatest(AVATAR_TAKE_REQUIRE, avatarTakeSaga)]);
}

export default imagesSagas;