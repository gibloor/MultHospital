import {
  all,
  put,
  call,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';

import axios, { AxiosResponse } from 'axios';

import {
  MULTFILM_TAKE_REQUARE,
  MULTFILM_TESTING_REQUIRE,
  VIEWED_SAVE_REQUEST,

  multfilmsTake,
  multfilmTesting,
  viewedSave,
  multfilmsFailure,
} from '../actions/multfilmsActions';

import {
  MultfilmList,
  MultfilmTakeRequare,
  MultfilmTestingRequire,
  ViewedSaveRequest
} from '../types/multfilmsTypes';

import { userTestingRequire } from 'redux-saga/actions/userActions';

import { DOMAIN } from './rootSaga';

function* multfilmTakeSaga(action: MultfilmTakeRequare) {
  try {
    const getQuestions = () => axios.get(`http://${DOMAIN}/multfilms/${action.payload.id}`);
    const response: AxiosResponse<MultfilmList> = yield call(getQuestions);
    yield put(multfilmsTake({multfilms: response.data}));
  } catch (e: any) {
    yield put(
      multfilmsFailure({
        error: e.message,
      }),
    );
  }
}

function* multfilmTestingSaga(action: MultfilmTestingRequire) {
  try {
    const { userId, userLevel, topic, features, multLevel } = action.payload;

    const acceptAnswer = () => axios.put<string[]>(`http://${DOMAIN}/watched/tested/${userId}`,
      { features, level: userLevel, topic }
    );
    
    yield call(acceptAnswer);
    
    if (topic !== 'newcomers' && multLevel) {
      const topic = features[0];
      yield put(multfilmTesting({ topic, level: multLevel }));
    } else {
      yield put(userTestingRequire());
    }

  } catch (e: any) {
    yield put(
      multfilmsFailure({
        error: e.message,
      }),
    );
  }
}

function* viewedSaveSaga(action: ViewedSaveRequest) {
  try {
    const viewed = action.payload.viewed
    yield axios.put<string[]>(`http://${DOMAIN}/watched/viewed/${action.payload.userId}`,
      { viewed }
    );
    yield put(viewedSave());
  } catch (e: any) {
    yield put(
      multfilmsFailure({
        error: e.message,
      }),
    );
  }
}

function* multfilmsSagas() {
  yield all([
    takeLatest(MULTFILM_TAKE_REQUARE, multfilmTakeSaga),
    takeEvery(MULTFILM_TESTING_REQUIRE, multfilmTestingSaga),
    takeLatest(VIEWED_SAVE_REQUEST, viewedSaveSaga)
  ]);
}

export default multfilmsSagas;