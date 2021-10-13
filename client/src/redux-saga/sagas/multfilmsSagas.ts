import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import {
  MULTFILM_TAKE_REQUARE,
  multfilmsTake,
  multfilmsFailure,
} from '../actions/multfilmsActions';
import { MultfilmList, MultfilmTakeRequare } from '../types/multfilmsTypes'
import axios, { AxiosResponse } from 'axios';

function* multfilmTakeSaga(action: MultfilmTakeRequare) {
  try {
    const getQuestions = () => axios.get(`http://localhost:5000/multfilms/${action.payload.id}`);
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

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* multfilmsSagas() {
  yield all([takeLatest(MULTFILM_TAKE_REQUARE, multfilmTakeSaga)]);
}

export default multfilmsSagas;