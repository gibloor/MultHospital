import axios from 'axios';
import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { AnswerTakeRequest } from '../types/answersTypes';
import {
  ANSWER_TAKE_REQUEST,
  answerTake,
  answerTakeFailure,
} from '../actions/answersActions';

function* answerAcceptSaga(action: AnswerTakeRequest) {
  try {
    const { features } = action.payload;
    const acceptAnswer = () => axios.put<string[]>(`http://localhost:5000/accounts/acceptAnswer/${action.payload.id}`,
      { features });
    yield call(acceptAnswer);
    yield put(answerTake({ features: action.payload.features }));
  } catch (e: any) {
    yield put(
      answerTakeFailure({
        error: e.message,
      }),
    );
  }
}

function* answersSagas() {
  yield all([takeLatest(ANSWER_TAKE_REQUEST, answerAcceptSaga)]);
}

export default answersSagas;