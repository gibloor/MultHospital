import axios, { AxiosResponse } from 'axios'

import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects'

import {
  QuestionTake,
  QuestionsTakeRequest
} from '../types/questionsTypes'

import {
  QUESTIONS_TAKE_REQUEST,

  questionsTake,
  questionsTakeFailure,
} from '../actions/questionsActions'

import { DOMAIN } from './rootSaga'

function* questionsSelectSaga(action: QuestionsTakeRequest) {
  try {
    const getQuestions = () => axios.get<QuestionTake[]>(`http://${DOMAIN}/questions/take/`, {
      params: {
        level: action.payload.level,
        topic: action.payload.topic
      }
    })
    const response: AxiosResponse<QuestionTake[]> = yield call(getQuestions)

    yield put(questionsTake({ questions: response.data }))
  } catch (e: any) {
    yield put(
      questionsTakeFailure({
        error: e.message,
      }),
    )
  }
}

function* questionsSagas() {
  yield all([takeLatest(QUESTIONS_TAKE_REQUEST, questionsSelectSaga)])
}

export default questionsSagas