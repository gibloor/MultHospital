import axios, { AxiosResponse } from 'axios';
import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';6
import { QuestionTake, QuestionsTakeRequest } from '../types/questionsTypes';
import {
  QUESTIONS_TAKE_REQUEST,
  questionsTake,
  questionsTakeFailure,
} from '../actions/questionsActions';

const shuffler = (array:string[]) => {
  let currentIndex = array.length;

  while (0 !== currentIndex) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    let temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function* questionsSelectSaga(action: QuestionsTakeRequest) {
  try {
    const getQuestions = () => axios.get<QuestionTake[]>('http://localhost:5000/questions/take/', {
      params: {
        level: action.payload.level,
        topic: action.payload.topic
      }
    });
    const response: AxiosResponse<QuestionTake[]> = yield call(getQuestions);
    response.data.map(question => (
      question.answers = shuffler(
        [
          question.answer,
          question.blende1,
          question.blende2,
        ]
      )
    ));
    yield put(questionsTake({ questions: response.data }));
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