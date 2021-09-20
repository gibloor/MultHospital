import axios, { AxiosResponse } from 'axios';
import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { Question, QuestionsTakeRequest } from '../types/questionsTypes';
import {
  QUESTIONS_TAKE_REQUEST,
  questionsTake,
  questionsTakeFailure,
} from '../actions/questionsActions';

function* questionsSelectSaga(action: QuestionsTakeRequest) {
  try {
    const getQuestions = () => axios.get<Question[]>(`http://localhost:5000/questions/level/${action.payload.level}`);
    const response: AxiosResponse<Question[]> = yield call(getQuestions);
    yield put(questionsTake({ questions: response.data, error: false }));
  } catch (e: any) {
    yield put(
      questionsTakeFailure({
        error: e.message,
      }),
    );
  }
}

function* questionsSagas() {
  yield all([takeLatest(QUESTIONS_TAKE_REQUEST, questionsSelectSaga)]);
}

export default questionsSagas;