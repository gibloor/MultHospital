import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  VIEWED_SAVE_REQUEST,
  viewedFailure,
  viewedSave
} from '../actions/viewedActions';
import { ViewedSaveRequest } from '../types/viewedTypes'
import axios from 'axios';

function* viewedSaveSaga(action: ViewedSaveRequest) {
  try {
    const viewed = action.payload.viewed
    yield axios.put<string[]>(`http://localhost:5000/watched/viewed/${action.payload.userId}`,
    { viewed });
    yield put(viewedSave());
  } catch (e: any) {
    yield put(
      viewedFailure({
        error: e.message,
      }),
    );
  }
}

function* viewedSagas() {
  yield all([takeLatest(VIEWED_SAVE_REQUEST, viewedSaveSaga)]);
}

export default viewedSagas;